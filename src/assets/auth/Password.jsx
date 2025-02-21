import React from 'react';
import {useState} from 'react';
 const Password = () => {
    const [password ,setPassword] = useState("");
    const [confirmPassword ,setConfirmPassword] = useState("");
    const [passwordError , setPasswordError] = useState("");
    const [confirmPasswordError , setConfirmPasswordError] = useState("");
     
       
       

        const handleClick = (e) =>{
            e.preventDefault();
        let isValid = true;
        if(password .length<6){
            setPasswordError("password must be greater than six digit");
        isValid = false;
        }
     else {
      setPasswordError("");
    }

    if (confirmPassword !== password) {
      setConfirmPasswordError("Passwords do not match");
      isValid = false;
    } else {
      setConfirmPasswordError("");
    }

    if (isValid) {
      alert("Password successfully set!");
    }
  };

        
    

  return (
    
    <div className ="grid  justify-center items-center min-h-screen p-4 bg-gray-100 mx-10">
        <div className ="justify-center items-center w-full max-w-sm md:max-w-lg  bg-white p-6 md:p-8 rounded-lg shadow-lg mx-10 ">
    <p className ="font-bold mt-4">Create Your Password</p>
<div className ="mt-2">
<h3 className="mb-1">New Password</h3>
<input type="password"  name = {password} className ="bg-[#e5efef] p-3 w-full" placeholder ="**********" onChange={(e) =>setPassword(e.target.value)}  />
</div>
{passwordError && <p style={{ color: "red", margin: 0 }}> {passwordError}</p>}
<div className ="mt-3">
<h3 className ="mb-1">Retype Password</h3>
<input type="password" name = {confirmPassword} className =" bg-[#e5efef]  p-3 w-full " placeholder ="**********" onChange={(e) =>setConfirmPassword(e.target.value)}/>
</div>
{confirmPasswordError && <p style={{ color: "red", margin: 0 }} >{confirmPasswordError}</p>}

<div className ="flex mt-4 mb-3">
    <input type="checkbox" className =" rounded-sm" />
    <h2 className ="ml-2">Remember Password</h2>
</div>
<button type="submit" value ="Done" className ="w-full  rounded-sm px-40 py-2 text-white bg-[#006666] mt-3 cursor-pointer" onClick ={handleClick} >Done </button>
<div className ="flex mt-2">
    <p>Already have an password ?</p> &nbsp;
<a className ="text-[#006666]" >Sign in</a>
</div>

</div>
</div>


  )
}
export default Password;