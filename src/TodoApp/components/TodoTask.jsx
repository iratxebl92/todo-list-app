import { useContext } from "react";
import { TodoContext } from "../../core/context/TodoContext";
import { TodoCard } from "./TodoCard";

export const TodoTask = () => {
 const {todoState} = useContext(TodoContext)

  return (
    <>
     
      {todoState?.slice().reverse().map((todo) => {
        return (
          <TodoCard  todos={todo} key={todo.id}  />
          );
        })}
     
    </>
  );
};
