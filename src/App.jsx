import { Component, useEffect, useState } from 'react'
import './App.css'
import ListTodos from './components/ListTodos';
import { BrowserRouter, Routes, Route } from 'react-router';
import SignIn from './components/SignIn';
import SignUp from './components/signUp';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';

const App = () => {
  const[user, setUser] = useState("Rodolfo e");
  
  useEffect(() => {
    setUser(auth?.displayName)
  })

  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={user ? <ListTodos user={user} /> : <SignIn /> } />
          <Route path='/SignIn' element={<SignIn/>} />
          <Route path='/SignUp' element={ <SignUp/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App