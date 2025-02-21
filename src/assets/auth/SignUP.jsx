import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const SignUp = () => {

  const[fname ,setFname]=useState("")
  const[lname,setLname]=useState("")
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const[errors,setErrors]=useState({})

  

  const handleFnameChange=(e)=>{
  
    
      setFname(e.target.value)

  
  }

  const handleLnameChange=(e)=>{
 
   
      setLname(e.target.value)

    

  }
  
  const handleEmailChange=(e)=>{
 
   
      setEmail(e.target.value)

    

  }
  
  const handlePasswordChange=(e)=>{
   
      setPassword(e.target.value)

    

  }

  const validateForm=()=>{
    let isValid = true
    let newErrors = {}

    if (!fname) {
      newErrors.fname = "First Name is required";
      isValid = false;
    }

    if (!lname) {
      newErrors.lname= "Last Name is required";
      isValid = false;
    }

    if (!email) {
      newErrors.email = "Email is required";
      isValid = false;
    }

    if (!password) {
      newErrors.password = "Password is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;



  }
  const handleSubmit=(e)=>{
      e.preventDefault()
      if (validateForm()) {
 
       console.log("Forms Submitted Successfully")
      } 
    };
  


  

  return (

    <div className='container'>

        <h1 className='mt-10 text-center font-mono font-bold text-3xl text-blue-950'>Dashboard</h1>
        <form onSubmit={handleSubmit}>

        <div className='my-5 p-8 shadow-2xl shadow-gray-600 sm:mx-10 md:mx-20 lg:mx-60 xl:mx-120'>

            <h3 className='font-mono  font-bold text-2xl m-2'>Create your account</h3>
            <p className='font-light text-[14] m-2'>Enter your personal details to create account</p>
            
            <div className=" mt-4 ml-5">

            <label>Your Name</label>
         
              <div className='flex gap-5'>

              
            <input
            className='input-control  p-2 border-1 outline-none rounded-md w-[215px]'
            value={fname}
            onChange={handleFnameChange}
             type="text" 
             placeholder='First Name' />
         
             {errors.fname && <div classname='text-red-800'>{errors.fname}</div>}

             
             
            <input
            className='input-control  p-2 border-1 outline-none rounded-md w-[215px]'
            value={lname}
            onChange={ handleLnameChange}
             type="text" 
             placeholder='Last Name' />
                    {errors.lname && <div>{errors.lname}</div>}
             

</div>
              
                </div>

             <div className="email mt-5 ml-5">
                Email Address
             </div>

             <input 
             type="email"
             value={email}
             onChange={handleEmailChange}
             className='bg-[#e5efef] ml-5 p-2 border-1 outline-none rounded-md w-md'
             placeholder='test@gmail.com'
             

             />
                    {errors.email && <div>{errors.email}</div>}


             <div className="password mt-5 ml-5">
               Password
             </div>

             <input 
             type="password"
             value={password}
             onChange={handlePasswordChange}
             className='bg-[#e5efef] ml-5 p-2 border-1 outline-none rounded-md w-md'
             placeholder='Password'
             
             />
                    {errors.password && <div>{errors.password}</div>}

            <div  className='flex justify-center'>


             <div className='flex-1'>
             <input
              type="checkbox" 
              className='m-5'
              />
             <label htmlFor="">Agree with our terms and policies</label>

             </div>


             </div>


        <button
        type='submit'
        className='border-1 outline-none px-2 py-2 text-center ml-5 w-md rounded-md text-white bg-[#006766] hover:bg-green-700'
        >
             
             
             Create Account
             
        </button>

        <p className='mt-2 mr-20'>
        or signUp with

        </p>
            
        <div className='flex  gap-6'>

       
   
        <a href='#' className='bg-[#9376d90f]
         p-3 font-sans rounded-md'>LinkedIn</a>
        <a href='#' className='bg-[#9376d90f]
         p-3 font-sans rounded-md'>twitter</a>
        <a href='#' className='bg-[#9376d90f]
         p-3 font-sans rounded-md'> facebook</a>
          
        </div>


        <div className='flex gap-6'>
        <p>Already have an account?</p>
        <span>Sign In</span>
        </div>
       
      

        </div>
      
        </form>
   
    </div>
  )
}

export default SignUp
