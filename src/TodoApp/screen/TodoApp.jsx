import { useContext } from "react";
import { CustomButton } from "../../core/share/CustomButton/components/CustomButton";
import { TodoTask } from "../components/TodoTask";
import { TodoContext } from "../../core/context/TodoContext";
import { TodoAddModal } from "../../TodoAddModal/components/TodoAddModal";
import { TodoUpdateModal } from "../../TodoUpdateModal/components/TodoUpdateModal";
import { TodoDeleteModal } from "../../TodoDeleteModal/components/TodoDeleteModal";
import { ToastContainer } from 'react-toastify';
import "../styles/styles.css";
import 'react-toastify/dist/ReactToastify.css';

export const TodoApp = () => {
  const { openModal, setOpenModal,openUpdateModal, openDeleteModal} = useContext(TodoContext);

  return (
    <>
      {openModal && <TodoAddModal/>}
      {openUpdateModal && <TodoUpdateModal/>}
      {openDeleteModal && <TodoDeleteModal/> }
      <ToastContainer/>
    

      <div className="container">
          <div className="header">
            <h1 className="header__title">Task List</h1>
            <CustomButton
              onClick={() => setOpenModal(true)}
              value="Add Task"
              />
          </div>
          <div className="task-container">
          <TodoTask />
          </div>
        </div>
    
    </>
  );
};
