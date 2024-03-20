
import { useContext } from "react";
import { TodoContext } from "../../core/context/TodoContext";
import { CustomButton } from "../../core/share/CustomButton/components/CustomButton";
import { CustomModal } from "../../core/share/CustomModal/components/CustomModal";
import { useDeleteModal } from "../hooks/useDeleteModal";
import "../styles/styles.css";

export const TodoDeleteModal = () => {
  const { setOpenDeleteModal } = useContext(TodoContext);
  const  {onHandleDelete} = useDeleteModal()

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
