import { TodoReducer } from "../../../src/core/context/TodoReducer";
import { types } from "../../../src/core/context/types/types";

describe("Pruebas en el archivo TodoReducer.js", () => {
  const initialState = [];

  const state = [
    {
      id: 1,
      item: "Hacer la compra",
      priority: "Medium",
    },
  ];

  const deleteId = 1;

  const stateToUpdate = [
    {
      id: 1,
      item: "Hacer la compra",
      priority: "Medium",
    },
    {
        id: 2,
        item: "Sacar la basura",
        priority: "Low",
      },
  ];



  test("Debe devolver el estado por defecto", () => {
    const defaultState = TodoReducer(initialState, {});
    expect(defaultState).toEqual(initialState);
  });

  test("Debe de (addTodo) añadir un nuevo todo al state", () => {
    const action = {
      type: types.addTodo,
      payload: {
        id: "1",
        item: "Hacer la compra",
        priority: "Medium",
      },
    };
    const newState = TodoReducer(initialState, action);

    expect(newState).toEqual([...initialState, action.payload]);
  });
  test("Debe de (deleteTodo) eliminar un item del state", () => {
    const action = {
      type: types.deleteTodo,
      payload: deleteId,
    };

    const newState = TodoReducer(state, action);
    expect(newState).toEqual(initialState);
    expect(newState.length).toBe(0);
  });

  test("Debe mantenerse igual el state si la action no es correcta", () => {
    const invalidAction = {
      //No existe la action
      type: "INVALID_ACTION",
      payload: deleteId,
    };

    const unchangedState = TodoReducer(state, invalidAction); //Debe devolver el state sin cambios
    expect(unchangedState).toEqual(state);
  });

  test("Debe devolver el mismo state si el id a eliminar no existe", () => {
    const nonExistentDeleteId = 2;

    const invalidAction = {
      type: types.deleteTodo,
      payload: nonExistentDeleteId,
    };

    const unchangedState = TodoReducer(state, invalidAction);
    expect(unchangedState).toEqual(state);
  });

  test("Debe de devolver el array con el objeto que no contenga el id a eliminar", () => {
    const customInitialState = [
      { id: 3, item: "Tarea personal", priority: "High" },
    ];

    const customState = [
      {
        id: 3,
        item: "Tarea personal",
        priority: "High",
      },
      {
        id: 1,
        item: "Hacer la compra",
        priority: "Medium",
      },
    ];

    const customStateAction = {
      type: types.deleteTodo,
      payload: deleteId,
    };

    const customStateNew = TodoReducer(customState, customStateAction);
    expect(customStateNew).toEqual(customInitialState);
  });

  test('Debe (updateTodo) devolver actualizado el state ', () => { 

    
    const updateItem = {id: 1, itemUpdated: 'Hacer la colada', priorityUpdated: 'Low'}
    const action = {
        type: types.updateTodo,
        payload: updateItem
    }

    const newState = TodoReducer(stateToUpdate, action)
    expect(newState).toEqual([
            { id: 1, item: 'Hacer la colada', priority: 'Low' },
            { id: 2, item: 'Sacar la basura', priority: 'Low' }
          ])
   })

   test('Debe(updateTodo) mantener igual el state si el item no existe', () => { 

    const updateItemInvent = {id: 4, itemUpdated: 'Barrer el salón', priorityUpdated: 'Low'}

    const action = {
        type: types.updateTodo,
        payload: updateItemInvent
    }
    const newState = TodoReducer(stateToUpdate, action)
    expect(newState).toEqual(stateToUpdate)

    })
});
