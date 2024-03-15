import { useContext } from "react";
import { CustomButton } from "../../core/share/CustomButton/CustomButton";
import { TodoTask } from "../components/TodoTask";
import { TodoContext } from "../../core/context/TodoContext";
import { TodoAddModal } from "../../TodoAddModal/components/TodoAddModal";
import "../styles/styles.css";
import { TodoUpdateModal } from "../../TodoUpdateModal/components/TodoUpdateModal";
import { TodoDeleteModal } from "../../TodoDeleteModal/components/TodoDeleteModal";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const TodoApp = () => {
  const { openModal, setOpenModal,openUpdateModal, openDeleteModal, showUpdateMessage, showDeleteMessage } = useContext(TodoContext);

  return (
    <>
      {openModal && <TodoAddModal/>}
      {openUpdateModal && <TodoUpdateModal/>}
      {openDeleteModal && <TodoDeleteModal/> }
      {/* {showUpdateMessage && <ToastContainer />}
      {
        showDeleteMessage && <ToastContainer/> 
      } */}

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
