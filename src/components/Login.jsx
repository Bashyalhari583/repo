import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TodoList from "./TodoList";

const Login = ({setIsLoggedin}) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoggedin(true);
    if (userName === "admin" && password === "password") {
      localStorage.setItem("isAuthenticated" , "true");
      navigate("/todolist");
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <>
      <form
        action=""
        onSubmit={handleLogin}
        className="relative justify-center flex flex-col text-center mx-8 md:mx-80 sm:mx-50 my-8 bg-gray-200 rounded-md"
      >
        <h1 className="bg-blue-500 px-2 py-2 font-bold font-serif text-white rounded-md">
          LOGIN FORM
        </h1>
        <input
          className="mx-8 my-4 border px-2 py-1 rounded-md"
          type="text"
          placeholder="Username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          className="mx-8 my-4 border px-2 py-1 rounded-md"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="flex justify-center items-center">
          <button
            className="px-2 py-1 my-2 rounded-md bg-blue-500"
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
    </>
  );
};

export default Login;
