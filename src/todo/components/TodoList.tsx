
import { TodoItem } from './TodoItem';
import { useTodos } from '../hooks/useTodos';

export const TodoList = () => {

  // const { todoState } = useContext(TodoContext);

  // const { todos } = todoState;

  // Obtener rodos los todos para mandarlos a la vista
  const { todos } = useTodos();

  return (
    <ul>
      {
        todos.map(todo => <TodoItem key={todo.id} todo={todo} />)
      }
    </ul>
  )
}
