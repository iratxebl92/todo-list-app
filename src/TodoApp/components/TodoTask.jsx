import { Box } from "@mui/material";
import { TodoCard } from "./TodoCard";
import { useContext } from "react";
import { TodoContext } from "../../core/context/TodoContext";

export const TodoTask = () => {
 const {todoState} = useContext(TodoContext)
  
  return (
    <>
     
      {todoState?.map((todo) => {
        return (


          <TodoCard  todos={todo} key={todo.id} />
          );
        })}
     
    </>
  );
};
