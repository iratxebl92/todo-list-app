import { useContext, useState } from "react";
import { TodoContext } from "../../core/context/TodoContext";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export const useUpdateModal = () => {

  const {updateItemAction,setOpenUpdateModal} = useContext(TodoContext)

  const [updateInputLocal, setUpdateInputLocal] = useState("");
  const [updatePriorityLocal, setUpdatePriorityLocal] = useState("");

    
    const selectPriority = ["high", "medium", "low"];
    const message = () => {
      toast.success('The task has been updated', {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light"
        });
    }
 

    const handleItemUpdate = (event) => {
        setUpdateInputLocal(event.target.value);
      };
    
      const handlePriorityUpdate = (newPriority) => {
        setUpdatePriorityLocal(newPriority);
      };
    
      const handleUpdateSubmit = (updateId, item, priority) => {
        setOpenUpdateModal(false);
        updateItemAction(updateId, item, priority)
        message()

      };

  return {
    selectPriority,
    handleItemUpdate,
    handlePriorityUpdate,
    handleUpdateSubmit,
    updateInputLocal, 
    setUpdateInputLocal,
    updatePriorityLocal, 
    setUpdatePriorityLocal
  }
}
