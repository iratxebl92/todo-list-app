
import { types } from "./types/types";


export const TodoReducer = (initialState = [] , action ) => {
  


      switch (action.type) {

        case types.addTodo:
        
          return[ ...initialState, action.payload]


        // case types.deleteTodo:
        //  const todoFilter = initialState.filter((todo) => {
        //   return todo.id != action.payload
        //  })
        //  console.log(todoFilter, "TODO FILTER")
        //  return [
        //   ...initialState,
        //   todoFilter
        //  ]
      
        default:
          return initialState;
      }

}
