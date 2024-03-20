import { useReducer, useState } from "react";
import { TodoContext } from "./TodoContext";
import { TodoReducer } from "./TodoReducer";
import { types } from "./types/types";
import { useEffect } from "react";

const init = () => {
  return JSON.parse(localStorage.getItem("todo")) || [];
};

export const TodoProvider = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal]= useState(false)
  const [openUpdateModal, setOpenUpdateModal] = useState(false)
  const [{updateInput, updateId, updatePriority}, setUpdateTodo] = useState({
    updateId: '',
    updateInput: '',
    updatePriority: ''
  })
  const [deleteItemId, setDeleteItemId] = useState('')

  const [todoState, dispatch] = useReducer(TodoReducer, [], init);


// ADD ITEM
  const addTodoItem = (item, priority) => {
    const action = {
      type: types.addTodo,
      payload: { id: new Date().getTime(), item: item, priority: priority, state: 'To Do' },
    };
    dispatch(action);
  };

  // DELETE ITEM
  const deleteItem = (id) => {
    setDeleteItemId(id)
    setOpenDeleteModal(true)
  }

  const deleteItemAction = (id) => {
    const action = {
      type: types.deleteTodo,
      payload:  id ,
    };
    dispatch(action);
  };

  // UPDATE ITEM
  const updateItem = (id, item, priority) => {
    setUpdateTodo({
      updateId: id,
      updateInput: item,
      updatePriority: priority
    })
    setOpenUpdateModal(true)
  }
  const updateItemAction = (id, itemUpdated, priorityUpdated) => {
    const action = {
      type: types.updateTodo,
      payload: {id, itemUpdated, priorityUpdated}
    }
    dispatch(action)
    
  }

  //CHANGE PROGRESS
  const progressChange = (id) => {

    const progressState = todoState.find((element) => element.id === id) 
    const newState = progressState.state === 'To Do' ? 'In Progress' : progressState.state === 'In Progress' ? 'Done' : 'To Do'; 

    progressState.state = newState; 
    const newTodos = [...todoState] 

    const objIndex = newTodos.findIndex((element) => element.id === progressState.id)

    if(objIndex !== -1) {
      newTodos[objIndex] = progressState; 
      progressAction(newTodos)
    } else {
      console.log('El objeto con el id especificado no se encontró.')
    }
  
  }
  const progressAction = (newTodos) =>  {
    const action = {
      type: types.updateProgressTodo,
      payload: newTodos
    };
    dispatch(action);
  }
  
  //SAVE AND UPDATE TODOSTATE 
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todoState));

  }, [todoState]);


  return (
    <TodoContext.Provider
      value={{
        ...todoState,
        todoState,
        openModal,
        setOpenModal,
        addTodoItem,
       deleteItemAction,
        openDeleteModal,
        setOpenDeleteModal,
        openUpdateModal, 
         setOpenUpdateModal,
         updateItem,
         updateId,
         updateInput,
         updatePriority,
         setUpdateTodo,
         updateItemAction,
         deleteItem,
         deleteItemId,
         progressAction,
         progressChange
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
