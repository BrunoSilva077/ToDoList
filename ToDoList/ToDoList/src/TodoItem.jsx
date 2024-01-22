
import PropTypes from 'prop-types';

export function TodoItem({completed , id, tittle, toggleTodo,deleteTodo}){
    return(
        <li className='todo-item'>
            <label>
              <input 
                type="checkbox" 
                checked={completed}
                onChange={e => toggleTodo(id,e.target.checked)}
              />
                {tittle}
              </label>
            <button 
                onClick={() => deleteTodo(id)} 
                className='btn delete'>
                    Delete
            </button>
          </li>
    )
}

TodoItem.propTypes = {
  completed: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  tittle: PropTypes.string.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};