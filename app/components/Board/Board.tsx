'use client'

import React, { useEffect } from 'react'
import { DragDropContext, DropResult, Droppable } from 'react-beautiful-dnd'
import useBoard from '@/app/hooks/useBoard'
import Column from '../Column/Column'

type Props = {}

const Board = ({ }: Props) => {
    const { board, getBoard, setBoardState, updateTodoDB } = useBoard()

    useEffect(() => {
        getBoard()
    }, [getBoard])

    const handleOnDragEnd = (result: DropResult) => {
        try {
            const { destination, source, type } = result

            if (!destination) return

            if (type === 'column') {
                const entries = Array.from(board.columns.entries())
                const [removed] = entries.splice(source.index, 1)
                entries.splice(destination.index, 0, removed)
                const rearrangedColumns = new Map(entries)
                setBoardState({
                    ...board,
                    columns: rearrangedColumns
                })
            }

            const columns = Array.from(board.columns)
            const startColIndex = columns[Number(source.droppableId)]
            const endColIndex = columns[Number(destination.droppableId)]

            const startCol: Column = {
                id: startColIndex[0],
                todos: startColIndex[1].todos
            }

            const endCol: Column = {
                id: endColIndex[0],
                todos: endColIndex[1].todos
            }

            if (!startCol || !endCol) return
            if (source.index === destination.index && startCol === endCol) return

            const newTodos = startCol.todos
            const [todoMoved] = newTodos.splice(source.index, 1)

            if (startCol.id == endCol.id) {
                newTodos.splice(destination.index, 0, todoMoved)
                const newCol: Column = {
                    id: startCol.id,
                    todos: newTodos
                }
                const newColsMap = new Map(board.columns)
                newColsMap.set(startCol.id, newCol)

                setBoardState({
                    ...board,
                    columns: newColsMap
                })
            } else {
                const endTodos = Array.from(endCol.todos)
                endTodos.splice(destination.index, 0, todoMoved)

                const newColsMap = new Map(board.columns)
                const newCol: Column = {
                    id: startCol.id,
                    todos: newTodos
                }
                newColsMap.set(startCol.id, newCol)
                newColsMap.set(endCol.id, {
                    id: endCol.id,
                    todos: endTodos
                })

                updateTodoDB(todoMoved, endCol.id)

                setBoardState({
                    ...board,
                    columns: newColsMap
                })
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId='board' direction='horizontal' type='column'>
                {(provided) => (
                    <div
                        className='grid grid-cols-1 md:grid-cols-3 gap-5 max-w-7xl mx-auto w-[95vw]'
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                    >
                        {Array.from(board.columns.entries()).map(([id, column], index) => (
                            <Column
                                key={id}
                                id={id}
                                todos={column.todos}
                                index={index}
                            />
                        ))}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    )
}

export default Board