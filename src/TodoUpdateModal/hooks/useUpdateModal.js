import { useContext, useState } from "react";
import { TodoContext } from "../../core/context/TodoContext";




export const useUpdateModal = () => {

  const {updateItemAction,setOpenUpdateModal} = useContext(TodoContext)

  const [updateInputLocal, setUpdateInputLocal] = useState("");
  const [updatePriorityLocal, setUpdatePriorityLocal] = useState("");

    
    const selectPriority = ["high", "medium", "low"];

    const handleItemUpdate = (event) => {
        setUpdateInputLocal(event.target.value);
      };
    
      const handlePriorityUpdate = (newPriority) => {
        setUpdatePriorityLocal(newPriority);
      };
    
      const handleUpdateSubmit = (updateId, item, priority) => {
    
        setOpenUpdateModal(false);
        updateItemAction(updateId, item, priority)
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
