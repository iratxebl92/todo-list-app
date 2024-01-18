
import { types } from "./types/types";


export const TodoReducer = (initialState = [] , action ) => {
  
      switch (action.type) {

        case types.addTodo:
        
          return[ ...initialState, action.payload]


        case types.deleteTodo:
          return initialState.filter(todo => todo.id !== action.payload);
          
         
      
        default:
          return initialState;
      }

}
