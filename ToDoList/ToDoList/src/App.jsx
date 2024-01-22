import { useEffect, useState } from 'react'
import { NewTodoForm } from './NewTodoForm'
import { TodoList } from './TodoList'
import './style.css'

function App() {
  // const [newItem,setNewItem] = useState("")
  const [todos,setTodos] = useState(() =>{
    
    const storedTodos = localStorage.getItem("ITEMS")
    if (storedTodos == null) return []

    return JSON.parse(storedTodos)
  })
  // const [id,setNewId] = useState(0)

  useEffect(() => {
    localStorage.setItem("ITEMS",JSON.stringify(todos))
  },[todos])

  function addTodo(tittle,id){
      setTodos( currentTodos => {
        return[
          ... currentTodos,
          { id, tittle, completed: false },
        ]
      })
  }

  // function handleSubmit(e) {
  //   e.preventDefault()

  //   setNewId((prevId) => prevId + 1);
    
  //   setTodos( currentTodos => {
  //     return[
  //       ... currentTodos,
  //       { id: id, tittle: newItem, completed: false },
  //     ]
  //   })

  //   setNewItem("")

  // }

  function toggleTodo (id,completed) {
    setTodos(currentTodos =>{
      return currentTodos.map(todo =>{
        if(todo.id === id){
          return { ...todo,completed }
        }

        return todo
      })
    })
  }

  function deleteTodo(id){
    setTodos(currentTodos =>{
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  console.log(todos)

  return (
    <>
      {/* <form onSubmit={handleSubmit} className='todos-form'>
        <label htmlFor="item">New Item</label>
        <input 
          type="text"
          value={newItem}
          onChange={e => setNewItem(e.target.value)} 
          id='item' 
          maxLength="88"
        />
        <button type="submit" className='btn add'>Add</button>
      </form> */}
      <NewTodoForm onSubmit={addTodo} />
      <div className="todos-list">
        <h1> Todo List </h1>
        <TodoList 
          todos={todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo} 
        />
        {/* <ul>
          {todos.length === 0 && "No Todos"}
          {todos.map(todo => {
            return(
            <li className='todo-item' key={todo.id}>
              <label>
                <input 
                  type="checkbox" 
                  checked={todo.completed}
                  onChange={e => toggleTodo(todo.id,e.target.checked)}
                />
                  {todo.tittle}
                </label>
              <button onClick={() => deleteTodo(todo.id)} className='btn delete'>Delete</button>
            </li>
            )
          })}
        </ul> */}
      </div>
    </>
  )
}

export default App
