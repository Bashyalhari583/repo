import React from 'react';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

 const Reset= () => {
    const [num , setNum] = useState("");
    const [numError , setNumError] = useState("");
    const navigate = useNavigate();

    const handleClick = ( e) =>{
        e.preventDefault();
        let isValid = true;
        
      if(num.length!= 10){
       setNumError("phone number must be 10 digit long");
       isValid = false;
      }
      if(isValid){
      navigate("/Otp");
      }
        }

  return (
    <>
    <div className =" grid justify-center items-center min-h-screen p-4 bg-gray-100 mx-10">
        <div className =" justify-center items-center w-full max-w-sm md:max-w-lg  bg-white p-6 md:p-8 rounded-lg shadow-lg mx-10 ">
            <h1 className ="text-2xl font-bold">Reset Your Password</h1>
        
            <p className="mt-5 font-bold">Enter Your Mobile Number</p>

            <div className="flex space-x-8 mt-2">
            <select id="dropdown" className ="bg-[#e5efef] w-1/3 rounded" >
            <option ></option>
            </select>
                <input type="text" name={num} placeholder='000-000-0000' className ="bg-[#e5efef] w-3/4 p-2 rounded" onChange = {(e) =>setNum(e.target.value)}/>
            </div>

            <div className ="mt-4 flex justify-end">
            <button
            className="w-1/3 py-2 rounded-sm text-white bg-[#006666] cursor-pointer hover:bg-[#004d4d] transition-all"
            onClick={handleClick}>Send </button>
            </div>
          { numError && <p className="text-red-500">{numError}</p>}
            <div className ="flex mt-4">
                <p>If don't receive OTP?</p> &nbsp; 
                <a className ="text-red-400">Resend</a>

            </div>
</div>
    </div>
    </>
  )
}
export default Reset;
