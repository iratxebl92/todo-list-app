import { types } from "../../../../src/core/context/types/types"

describe('Pruebas en el archivo de types', () => { 

    test('Debe de devolver los tipos creados en el archivo types.js', () => { 
        expect(types).toEqual(
            {
                addTodo: 'GET_TODO',
                updateTodo: 'UPDATE_TODO',
                deleteTodo: 'DELETE_TODO'
              }
        )
     })

 })