import './App.css';
import React, {useState} from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import Private from './components/Private'

function App() {
  const[isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div className="App">
      <button onClick={() => setIsLoggedIn(true)}>Login</button>
      {isLoggedIn ? <Navigate to = "/private" /> : <h1>Please Login</h1>}      
      <Routes>
        <Route path ="/private" element ={<Private />} />
      </Routes> 
    </div>
  );
}

export default App;
