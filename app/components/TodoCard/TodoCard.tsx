'use client'

import getURL from '@/app/actions/getURL'
import useBoard from '@/app/hooks/useBoard'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { DraggableProvidedDragHandleProps, DraggableProvidedDraggableProps } from 'react-beautiful-dnd'
import { AiOutlineCloseCircle } from 'react-icons/ai'

type Props = {
    todo: Todo
    index: number
    id: TypedColumn
    innerRef: (element: HTMLElement | null) => void
    draggableProps: DraggableProvidedDraggableProps
    dragHandleProps: DraggableProvidedDragHandleProps | null | undefined
}

const TodoCard = ({ todo, index, id, innerRef, dragHandleProps, draggableProps }: Props) => {
    const [imageUrl, setImageUrl] = useState<string | null>(null)
    const { deleteTask } = useBoard()

    useEffect(() => {
        if (todo.image) {
            const fetchImage = async () => {
                const url = await getURL(todo.image!)
                if (url) setImageUrl(url.toString())
            }

            fetchImage()
        }
    }, [todo.image])

    return (
        <div
            {...draggableProps}
            {...dragHandleProps}
            ref={innerRef}
            className='bg-white rounded-md space-y-2 drop-shadow-md'
        >
            <div className='flex justify-between items-center p-5'>
                <p>{todo.title}</p>
                <button onClick={() => deleteTask(index, todo, id)} className='text-red-500 hover:text-red-600'>
                    <AiOutlineCloseCircle className='h-8 w-8 ml-5' />
                </button>
            </div>

            {imageUrl && (
                <div className='h-full w-full rounded-b-md'>
                    <Image
                        src={imageUrl}
                        alt={'Task Iamge'}
                        width={400}
                        height={200}
                        className='w-full object-contain rounded-b-md'
                    />
                </div>
            )}
        </div>
    )
}

export default TodoCard