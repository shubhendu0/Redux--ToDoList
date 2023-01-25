const initialState=[ ];

export const todo =(state=initialState, action)=>{
    switch(action.type){
        case "ADD_TODO":
            return [...state, action.payload];

        case "CLEAR_TODO":{
            if(window.confirm("Proceed to clear all?") === false){
                return 
            }
            return [];
        }
        case "DELETE_TODO":{
            if(window.confirm("Proceed to delete?") === false){
                return 
            }
            const filterTodo = state.filter((todo)=>todo.id!==action.payload);
            return filterTodo;
        }

        case "UPDATE_TODO":{
            let data = action.payload;
            const updatedArray=[];
            state.map((item)=>{
                if(item.id===data.id){
                    item.todo = data.todo;
                    item.lastUpdated = data.lastUpdated;
                }
                updatedArray.push(item);
            })
            return updatedArray;
        }

        case "UPDATE_STATUS":{
            let data = action.payload;
            const updatedArray=[];
            state.map((item)=>{
                if(item.id===data.id){
                    if(data.isCompleted === false)
                        item.isCompleted = true;
                    else
                        item.isCompleted = false;
                }
                updatedArray.push(item);
            })
            return updatedArray;
        }
        default: return state;
    }
}