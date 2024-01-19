import { useContext, useState } from "react";
import { TodoContext } from "../../core/context/TodoContext";



export const useAddModal = () => {

    const {addTodoItem, setOpenModal} = useContext(TodoContext)

  
  const [{item, priority}, setTodo] = useState(
    {
        item: '',
        priority: ''
    }
  )
  const [error, setError] = useState({
    error: false,
    message: "",
  });

 //Función para actualizar el item con el value del input
  const handleItemChange = (event) => {

    setTodo((prev)  => (
        {
            ...prev,
            item: event.target.value
        }
    )  )
 

  };
  const handlePriorityChange = (priority) => {
     setTodo((prev)  => (
        {
            ...prev,
            priority: priority
        }
    )  )
  };


  const onSubmit = (item, priority) => {
    addTodoItem(item, priority)
    setError({
      error: false,
      message: "",
    });
    setTodo({
      item: '',
      priority: ''
    })
    setOpenModal(false)


  };

  return {
    item,
    error,
    priority,
    setError,
    handleItemChange,
    onSubmit,
    handlePriorityChange
    
  };
};
