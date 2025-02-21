import React,{useState, useEffect} from 'react'
import { BrowserRouter,Routes,Route, Navigate } from 'react-router-dom'
import TodoList from './components/TodoList'
import Login from './components/Login'
import Sample from './components/Sample'
import Signin from './assets/auth/Signin'
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

     <Route path="/signin"  element={<Signin/>}/>  
       
        
        
         {/* Redirect unknown routes to /login or /todolist based on login status */}
    <Route path="*" element={<Navigate to={isLoggedin ? "/todolist" : "/login"} />} />
    <Route path="/sample" element={<Sample></Sample>} ></Route>
    </Routes>

    </BrowserRouter>
    </>
  )
}

export default App
