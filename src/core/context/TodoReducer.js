
import { types } from "./types/types";


export const TodoReducer = (state = [] , action ) => {
  
      switch (action.type) {

        case types.addTodo:
          return[ ...state, action.payload]


        case types.deleteTodo:
          return state.filter(todo => todo.id !== action.payload);

        case types.updateTodo:
          return state 
      
        default:
          return state;
      }

}
