import { Box } from "@mui/material";
import { TodoCard } from "./TodoCard";

export const TodoTask = () => {
 
  
  
  const todos = JSON.parse(localStorage.getItem('todo'))

  return (
    <>
        <Box className='todo-card-container'>
      {todos?.map((todo) => {
        return (
          // <div className="todo-app-div" key={todo.item}>
    
          //   <p>{todo.item}</p>
          //   <p>{todo.priority}</p>
          // </div>

          <TodoCard  todos={todo} key={todo.id} />
          );
        })}
        </Box>
    </>
  );
};
