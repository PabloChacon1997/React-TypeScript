import { useReducer } from 'react';

// Contexto
import { TodoContext } from './TodoContext';

// Interfaces para el tipado
import { TodoState } from '../interfaces/interfaces';

// Acciones que modifican el state
import { todoReducer } from './todoReducer';


// Creamos el estado inicial
const INITIAL_STATE: TodoState = {
  todoCount: 2,
  todos: [
    {
      id: "1",
      desc: 'Recolectar las gemas del infinito',
      completed: false
    },
    {
      id: "2",
      desc: 'Gema del alma',
      completed: false
    },
  ],
  completed: 0,
  pending: 2
}


interface props {
  children: JSX.Element | JSX.Element[],
}


export const TodoProvider = ({children}: props) => {

  const [todoState, dispatch] = useReducer(todoReducer, INITIAL_STATE);

  // Funcion que realiza la accion
  const toggleTodo = (id: string) => {
    // Realiza la accion de todoReducer
    dispatch({ type: 'toggleTodo' , payload: {id} });
  }

  return (
    <TodoContext.Provider value={{
      todoState,
      toggleTodo
    }}>
      {children}
    </TodoContext.Provider>
  )
}
