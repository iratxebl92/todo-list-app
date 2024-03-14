import { useContext, useEffect, useMemo, useRef, useState } from "react";
import { TodoContext } from "../../core/context/TodoContext";
import { useAddModal } from "../hooks/useAddModal";

import "../styles/styles.css";
import "../../core/share/ModalStyles/styles.css"
import { CustomModal } from "../../core/share/CustomModal/CustomModal";
import { CustomButton } from "../../core/share/CustomButton/CustomButton";

export const TodoAddModal = () => {

  const { setOpenModal } = useContext(TodoContext);
  const inputRef = useRef(null)

  
  const {
    item,
    priority,
    error,
    handleItemChange,
    handlePriorityChange,
    onSubmit,
    selectPriority,
    disabled, 
    setDisabled
  } = useAddModal();
  

    useEffect(() => {
      item.length > 3 && priority.length >= 3 ? setDisabled(false) : setDisabled(true)

    }, [item, priority])

    useEffect(() => {
      inputRef.current.focus();
    }, []);
    

  return (
    <>
      <CustomModal
        title="Add a task"
        viewHeader={true}
        clickAction={() => setOpenModal(false)}
      >
        <form action="">
          <div className="modal__inputContainer">
            <label for='task' className="modal__label" >Task</label>
            <input
              id='task'
              type="text"
              placeholder="Type your task here..."
              onChange={handleItemChange}
              value={item}
              error={error.error}
              helperText={error.message}
              className="modal__input"
              ref={inputRef}
            />
          </div>
          <div className="modal__priorityContainer">
            <span className="modal__priority">Priority</span>
            <ul className="priority-list">
              {selectPriority.map((priorityItem, index) => {
                return (
                  <li
                    key={index}
                    onClick={() => handlePriorityChange(priorityItem)}
                    className={
                      `${priorityItem}-select priority ${
                      priority === priorityItem ? `${priorityItem}-active` : ""
                    }`
                  }
                  >
                    {priorityItem}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="add-item-button-container">
            <CustomButton
              onClick={() => onSubmit(item, priority)}
              className={`button confirmation-button ${disabled && 'button-disabled'} `}
              value= 'Add'
              disabled={ disabled}

            />
              
        
          </div>
        </form>
      </CustomModal>
    </>
  );
};
