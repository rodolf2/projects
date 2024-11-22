import { Component, useState } from 'react'
import './App.css'
import ListTodos from './components/ListTodos';

const App = () => {
  const[user, setUser] = useState("Rodolfo");
  
  return(
    <>
      <h1>Todo React App</h1>
      {user ? (
        <ListTodos user={user} />
      ) : (
      <p>You must login to view the todo lists</p>
      )}
    </>
  )
}

export default App
