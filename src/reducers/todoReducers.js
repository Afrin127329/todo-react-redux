const initialData = {
    list: []
}
const todoReducers = (state = initialData, action) =>{
    

    switch (action.type) {
        case 'AddTodo':
            const {id, data} = action.payload;
            return{
                ...state,
                list: [...state.list,
                    {
                        id,
                        data
                    }
                ]

            }


        case 'DELETE_TODO':
            const newList = state.list.filter((elem) => elem.id !== action.id)
            return {
                ...state,
                list: newList
            }
        case 'REMOVE_ALL_TODO':
            return {
                ...state,
                list: []
            }
    
        default:
            return state;
    }
}

export default todoReducers;