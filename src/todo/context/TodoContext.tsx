import { createContext } from "react";
import { TodoState } from '../interfaces/interfaces';


// Damos forma al contexto
export type TodoContextProps = {
  todoState: TodoState,
  toggleTodo: (id:string) => void,
}

// Creamos el contexto
export const TodoContext = createContext<TodoContextProps>({} as TodoContextProps);