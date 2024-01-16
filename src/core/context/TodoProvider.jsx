import { useReducer, useState } from "react";
import { TodoContext } from "./TodoContext";
import { TodoReducer } from "./TodoReducer";
import { types } from "./types/types";
import { useEffect } from "react";

const init = () => {
  return JSON.parse(localStorage.getItem("todo")) || [];
  // ES IMPORTANTE PONER || [] SINO DA EL ERROR:  Uncaught TypeError: state is not iterable
};

export const TodoProvider = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);
  const [todoState, dispatch] = useReducer(TodoReducer, [], init);



  const addTodoItem = (item, priority) => {
    const action = {
      type: types.addTodo,
      payload: { id: new Date().getTime(), item: item, priority: priority },
    };
    dispatch(action);
  };

  const deleteItem = (id) => {
    const action = {
      type: types.deleteTodo,
      payload: { id },
    };
    dispatch(action);
  };

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todoState));
  }, [todoState]);

  return (
    <TodoContext.Provider
      value={{
        ...todoState,
        todoState,
        openModal,
        setOpenModal,
        addTodoItem,
        deleteItem,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
