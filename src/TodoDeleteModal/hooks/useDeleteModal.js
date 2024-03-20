import { useContext } from "react";
import { TodoContext } from "../../core/context/TodoContext";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const useDeleteModal = () => {
  const {deleteItemId, setOpenDeleteModal, deleteItemAction} = useContext(TodoContext)

  //React Toast
  const messageDelete = () => {
    toast.success('The task has been deleted', {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }

//Function to delete item
    const onHandleDelete = () => {
        deleteItemAction(deleteItemId);
        setOpenDeleteModal(false);
        messageDelete()
      };
  return {
    onHandleDelete
  }
}
