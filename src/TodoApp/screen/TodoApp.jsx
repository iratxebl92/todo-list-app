import { useContext } from "react";
import { CustomButton } from "../../core/share/CustomButton/CustomButton";
import { TodoTask } from "../components/TodoTask";
import "../styles/index.css";
import { TodoContext } from "../../core/context/TodoContext";
import { AddItem } from "../../TodoAddModal/components/AddItem";
import { UseTodoApp } from "../hooks/UseTodoApp";
export const TodoApp = () => {
  const { openModal, setOpenModal } = useContext(TodoContext);

  return (
    
    <>
      {openModal ? <AddItem /> : ""}

      <div
        className="todo-app-container"
        style={{ width: "720px", maxWidth: "100%", margin: "0 auto" }}
      >
        <div style={{height: '100%'}}>
          <h1 className="todo-app-title">TODO LIST</h1>
          <CustomButton
            value="Add Task"
            className="todo-app-add-button"
            onClick={() => setOpenModal(true)}
          />
          <TodoTask />
        </div>
      </div>
    </>
  );
};
