import { Box } from "@mui/material";
import { TodoCard } from "./TodoCard";

export const TodoTask = () => {
 
  
  const todos = JSON.parse(localStorage.getItem('todo'))

  return (
    <>
        <Box className='todo-card-container'>
      {todos?.map((todo) => {
        return (


          <TodoCard  todos={todo} key={todo.id} />
          );
        })}
        </Box>
    </>
  );
};
