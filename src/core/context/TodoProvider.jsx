import { useReducer, useState } from "react";
import { TodoContext } from "./TodoContext";
import { TodoReducer } from "./TodoReducer";
import { types } from "./types/types";
import { useEffect } from "react";

const init = () => {
  return JSON.parse(localStorage.getItem("todo")) || [];
  // ES IMPORTANTE PONER || [] SINO DA EL ERROR:  Uncaught TypeError: state is not iterable
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



  const addTodoItem = (item, priority) => {
    const action = {
      type: types.addTodo,
      payload: { id: new Date().getTime(), item: item, priority: priority, state: 'To Do' },
    };
    dispatch(action);
  };

  const deleteItemAction = (id) => {
    const action = {
      type: types.deleteTodo,
      payload:  id ,
    };
    dispatch(action);
  };

  const updateItemAction = (id, itemUpdated, priorityUpdated) => {
    const action = {
      type: types.updateTodo,
      payload: {id, itemUpdated, priorityUpdated}
    }
    dispatch(action)
    
  }

  const progressChange = (id) => {
 
    const progressState = todoState.find((element) => element.id === id) //Devuelve el bjeto que cumple la condición.
    const newState = progressState.state === 'To Do' ? 'In Progress' : progressState.state === 'In Progress' ? 'Done' : 'To Do'; //Guardo el state

    progressState.state = newState; //Modifico el state del objeto recuperado en base al if anterior.
    const newTodos = [...todoState] 
    // Hacemos una copia del array para poder modificarla y una vez que se modifique se llama a la action para que con el reducer se actualice el todoState. 
    // React solo cambia un componente si se utiliza un hook para modificarlo.
    // newTodos si se puede modificar porque es simplemente una const

    const objIndex = newTodos.findIndex((element) => element.id === progressState.id) //Devuele la posición del elemento en el array, el que coincida con el id.

    if(objIndex !== -1) {
      newTodos[objIndex] = progressState; //Cambia en el indice que corresponda el objeto anterior por el que hemos actualizado, el que guardamos al inicio con el todoState.find

      progressAction(newTodos)
    } else {
      console.log('El objeto con el id especificado no se encontró.')
    }
    //Si no encuentra el id devolverá -1, eso es que no encuentra nada. Si el objIndex NO es -1 entonces si ha devuelto algo.


    

  }
  const progressAction = (newTodos) =>  {
    const action = {
      type: types.updateProgressTodo,
      payload: newTodos
    };
    dispatch(action);
  }
  
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todoState));

  }, [todoState]);


  const updateItem = (id, item, priority) => {
    setUpdateTodo({
      updateId: id,
      updateInput: item,
      updatePriority: priority
    })
    setOpenUpdateModal(true)
  }
const deleteItem = (id) => {
  setDeleteItemId(id)
  setOpenDeleteModal(true)
}

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
