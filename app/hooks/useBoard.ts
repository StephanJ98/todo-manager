import { useBoardStore } from '@/store/BoardStore'

const useBoard = () => {
    const [board,
        getBoard,
        setBoardState,
        updateTodoDB,
        searchString,
        setSearchString,
        newTaskInput,
        setNewTaskInput,
        newTaskType,
        setNewTaskType,
        image,
        setImage,
        addTask,
        deleteTask
    ] = useBoardStore(
        (state) => [
            state.board,
            state.getBoard,
            state.setBoardState,
            state.updateTodoDB,
            state.searchString,
            state.setSearchString,
            state.newTaskInput,
            state.setNewTaskInput,
            state.newTaskType,
            state.setNewTaskType,
            state.image,
            state.setImage,
            state.addTask,
            state.deleteTask
        ]
    )

    return {
        board,
        getBoard,
        setBoardState,
        updateTodoDB,
        searchString,
        setSearchString,
        newTaskInput,
        setNewTaskInput,
        newTaskType,
        setNewTaskType,
        image,
        setImage,
        addTask,
        deleteTask
    }
}

export default useBoard