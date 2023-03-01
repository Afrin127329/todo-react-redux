export const addTodo = (data) =>{
    return{
        type: 'AddTodo',
        payload: {
            id: new Date().getTime().toString(),
            data
        }
    }
}

export const deleteTodo = (id) =>{
    return{
        type: 'DELETE_TODO',
        id
    }
}

export const removeAllTodo = () =>{
    return{
        type: 'REMOVE_ALL_TODO'
    }
}
