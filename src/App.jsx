import React,{useState, useEffect} from 'react'
import { BrowserRouter,Routes,Route, Navigate } from 'react-router-dom'
import TodoList from './components/TodoList'
import Login from './components/Login'
import Sample from './components/Sample'

import SignUp from './assets/auth/SignUp'

import Password from './assets/auth/Password';
import Reset from './assets/auth/Reset';
import Otp from './assets/auth/Otp';

// import { useNavigate } from 'react-router-dom'


function App() {
  const [isLoggedin,setIsLoggedin] = useState(() => {
    return localStorage.getItem("isLoggedin") === "false"; // Retrieve stored value
  })
  //  const Navigate = useNavigate()
    // Update localStorage when login state changes
    useEffect(() => {
      setIsLoggedin(true)
      localStorage.setItem("isLoggedin", isLoggedin);
    }, [isLoggedin]); //dependency


  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/login" element={<Login setIsLoggedin={setIsLoggedin} />} />
    
    <Route path="/todolist" element={isLoggedin ? <TodoList /> : <Navigate to="/login" />} />
          


    <Route path ="/Password" element={<Password/>}></Route>
       <Route path ="/Reset" element= {<Reset/>}></Route>
       <Route path ="/Otp" element={<Otp/>}></Route>
       
        
        
         {/* Redirect unknown routes to /login or /todolist based on login status */}
    <Route path="*" element={<Navigate to={isLoggedin ? "/todolist" : "/login"} />} />
    <Route path="/sample" element={<Sample></Sample>} ></Route>

    <Route path='/signup' element={<SignUp/>}/>
    </Routes>

    </BrowserRouter>
    </>
  )
}

export default App
