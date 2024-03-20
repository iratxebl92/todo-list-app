import { useContext, useState } from "react";
import { TodoContext } from "../../core/context/TodoContext";



export const useAddModal = () => {

  const {addTodoItem, setOpenModal} = useContext(TodoContext)

  const [disabled, setDisabled] = useState(true)


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

 //Function to update the item with the value of the input
  const handleItemChange = (event) => {

    setTodo((prev)  => (
        {
            ...prev,
            item: event.target.value
        }
    )  )
 

  };
 //Function to update the priority with the value of the input

  const handlePriorityChange = (priority) => {
     setTodo((prev)  => (
        {
            ...prev,
            priority: priority
        }
    )  )
  };

// Function to add item and close modal
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
    handlePriorityChange,
    disabled, setDisabled
    
  };
};
