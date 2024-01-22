import { TodoItem } from "./TodoItem"

import PropTypes from 'prop-types';


export function TodoList( {todos, toggleTodo, deleteTodo} ){
    return(
        <ul>
        {todos.length === 0 && "No Todos"}
        {todos.map(todo => {
          return(
            <TodoItem 
              key={todo.id}
              {...todo}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          // <li className='todo-item' key={todo.id}>
          //   <label>
          //     <input 
          //       type="checkbox" 
          //       checked={todo.completed}
          //       // onChange={e => toggleTodo(todo.id,e.target.checked)}
          //     />
          //       {todo.tittle}
          //     </label>
          //   <button 
          //       // onClick={() => deleteTodo(todo.id)} 
          //       className='btn delete'>
          //           Delete
          //   </button>
          // </li>
          )
        })}
      </ul>
    )
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};