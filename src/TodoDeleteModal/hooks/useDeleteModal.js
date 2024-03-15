import { useContext } from "react";
import { TodoContext } from "../../core/context/TodoContext";

export const useDeleteModal = () => {

    const {deleteItemId, setOpenDeleteModal, deleteItemAction} = useContext(TodoContext)

    const onHandleDelete = () => {
        deleteItemAction(deleteItemId);
        setOpenDeleteModal(false);
      };
  return {
    onHandleDelete
  }
}
