import React,{useState} from "react";
import { Link } from "react-router-dom";


const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    let errors = {};
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      errors.email = "Invalid email format";
    }

    if (!password) {
      errors.password = "Password is required";
    } else if (passwordRegex.test(password)) {
      errors.password = "Invalid password format";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted successfully");
      // Perform login logic here
    }
  };
  
  return (
    <>

      {/* <div className="bg-transparent">
        <h1 className="font-bold text-3xl text-black text-center mt-30">
          Dashboard
        </h1>
      </div> */}
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="w-full   max-w-md p-6 bg-white shadow-xl rounded-lg">
        <h1 className="text-2xl font-bold text-gray-900">Sign in </h1>
        <p className="text-gray-600">Enter your email & password to login</p>

        <div className="mt-4">
        <label className="block text-gray-700">Email Address</label>
          <input
            className={`w-full mt-2 p-2 bg-[#e5efef] border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md outline-none`}
            placeholder="test@gmail.com"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>
        

        <div className="mt-4">
          <label className="block text-gray-700">Password</label>
          <input
            className={`w-full mt-2 p-2 bg-[#e5efef] border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md outline-none`}
            placeholder="********"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
        </div>




        <div className="flex justify-between items-center mt-3">
          <div className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <label className="text-gray-700">Remember Password</label>
          </div>
          <p className="text-[#006666] cursor-pointer">Forgot Password?</p>
        </div>



        <button  type="submit" className="w-full mt-4 p-2 bg-[#006666] text-white rounded-md hover:bg-green-700">
          Sign in
        </button>

        <p className="mt-4 text-center text-gray-600">or sign in with</p>

        <div className="flex justify-center gap-4 mt-3">


        <a className="bg-[#e5efef] p-2 rounded-md" href="https://www.linkedin.com/">LinkedIn</a>

        <a className="bg-[#e5efef] p-2 rounded-md" href="https://www.twitter.com/">Twitter</a>

         <a className="bg-[#e5efef] p-2 rounded-md" href="https://www.facebook.com/">Facebook</a>

          

        </div>

        <div className="flex justify-center gap-2 mt-4">
          <p className="text-gray-600">Don't have an account?</p>
          <span className="text-[#006666] cursor-pointer">Create Account</span>
        </div>
      </form>
    </div>
    </>
  );
};

export default login;
