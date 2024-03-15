import { Button, Box, Modal, Typography } from "@mui/material";

import "../styles/styles.css";
import { useContext } from "react";
import { TodoContext } from "../../core/context/TodoContext";
import { CustomModal } from "../../core/share/CustomModal/CustomModal";
import { CustomButton } from "../../core/share/CustomButton/CustomButton";

export const TodoDeleteModal = () => {
  const { openDeleteModal, setOpenDeleteModal,deleteItemAction, deleteItemId } =
    useContext(TodoContext);
    console.log(deleteItemId, "Delete")

  const onHandleDelete = () => {
    deleteItemAction(deleteItemId);
    setOpenDeleteModal(false);
  };

  return (
    <>
      <CustomModal
        title="Delete a task"
        viewHeader={false}
        clickAction={false}
      >
        <div className="delete-modal">
          <p className="delete-modal__title"> Are you sure you want to delete this task?</p>
          <div className="delete-modal__buttonContainer" >
            <CustomButton className='delete-modal__button' onClick={onHandleDelete} value='Delete' />
            <CustomButton className='delete-modal__button' onClick={() => setOpenDeleteModal(false)} value='Cancel' />
          </div>
        </div>
      </CustomModal>
    </>
  );
};
