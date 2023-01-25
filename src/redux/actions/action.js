export const addTodo = (payload) => {
    return {
        type: "ADD_TODO",
        payload
    }
}
export const clearTodo = () => {
    return {
        type: "CLEAR_TODO",
    }
}
export const deleteTodo = (payload) => {
    return {
        type: "DELETE_TODO",
        payload
    }
}
export const updateTodo = (payload) => {
    return {
        type: "UPDATE_TODO",
        payload
    }
}
export const updateStatus = (payload) => {
    return {
        type: "UPDATE_STATUS",
        payload
    }
}