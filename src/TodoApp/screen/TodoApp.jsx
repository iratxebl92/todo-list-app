import { useContext } from "react";
import { CustomButton } from "../../core/share/CustomButton/CustomButton";
import { TodoTask } from "../components/TodoTask";
import { TodoContext } from "../../core/context/TodoContext";
import { TodoAddModal } from "../../TodoAddModal/components/TodoAddModal";
import "../styles/styles.css";

export const TodoApp = () => {
  const { openModal, setOpenModal } = useContext(TodoContext);

  return (
    <>
      {openModal ? 
      
      <TodoAddModal/> : ""}
      <div className="container">
          <div className="header">
            <h1 className="header__title">Task List</h1>
            <CustomButton 
              className="button" 
              onClick={() => setOpenModal(true)}
              value="Add Task"
              />
          </div>
          <div className="task-container">
          <TodoTask />
          </div>

          {/* <CustomButton
            value="Add Task"
            classNameName="todo-app-add-button"
            onClick={() => setOpenModal(true)}
            style={{backgroundColor: '#646ff0', color: 'white'}}
          /> */}
       
        </div>
    
    </>
  );
};
