import { Component, useState } from 'react'
import './App.css'
import NavBar from './NavBar'
import { MdDelete } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";

const App = () => {
  const[user, setUser] = useState(null);
  const[newTodo, setNewTodo] = useState('')
  const[todos, setTodos] = useState([
    {
      id: 1,
      title: 'Todo 1',
      completed: false
    },
    {
      id: 2,
      title: 'Todo 2',
      completed: false
    },
    {
      id: 3,
      title: 'Todo 3',
      completed: false
    }
  ])

  const handleToggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? {...todo, completed: !todo.completed} : todo
    ))
  }

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const handleNewTodo = () => {
    setTodos([...todos, {id: todos.length + 1, title: newTodo, completed: false}])
    setNewTodo('')
  }

  return(
    <>
      <h1>Todo React App</h1>
      {user ? (
        <div>
          <h3>Welcome, {user}</h3>
          <input type="text" value={newTodo} placeholder='Add Todo' onChange={(e) => setNewTodo(e.target.value)}/>
          <button onClick={handleNewTodo}> <FaPlus /> Add</button>

          {todos.map(todo => (
            <li key={todo.id}>
              <input type="checkbox" checked={todo.completed} onChange={() => handleToggleTodo(todo.id)} />
              {todo.completed ? <s>{todo.title}</s> : todo.title}
              <button onClick={() => handleDeleteTodo(todo.id)}> <MdDelete />  Delete</button>
            </li>
          ))}
        </div>
      ) : (
      <p>You must login to view the todo lists</p>
      )}
    </>
  )
}

export default App
