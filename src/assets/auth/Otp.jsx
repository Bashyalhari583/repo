import React from 'react'
const Otp = () => {
  return (
    <div className =" grid justify-center items-center min-h-screen p-4 bg-gray-100 mx-10">
        <div className =" justify-center items-center w-full max-w-sm md:max-w-lg  bg-white p-6 md:p-8 rounded-lg shadow-lg mx-10 ">
    <h3 className ="mt-4 font-bold"> Enter OTP</h3>
<div className ="flex space-x-8 mt-2">
<input type="text" placeholder ="00" className ="w-full md:w-1/3 p-3 bg-[#e5efef] rounded"/>
<input type="text" placeholder ="00" className ="w-full md:w-1/3 p-3 bg-[#e5efef] rounded"/>
<input type="text" placeholder ="00" className ="w-full md:w-1/3 p-3 bg-[#e5efef] rounded"/>
</div>
</div>
</div>
  )
}

export default Otp;