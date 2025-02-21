import React,{useEffect, useState} from 'react'
import UserData from './UserData'
import { useNavigate } from "react-router-dom";

const TodoList = () => {
  const [data,setData] = useState([]);
  const [firstName,setFirstName] = useState('');
  const [lastName,setLastName] = useState('');
  const [age,setAge] = useState(0);
  const [id,setId] = useState(0);
  const [isUpdate,setIsUpdate] = useState(false);
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("token");


  useEffect(()=>{
    setData(UserData)
    if(!isAuthenticated){
      navigate("/login");
    }

  },[isAuthenticated, navigate])

  const handleEdit =(id)=>{
      const dt = data.filter(item => item.id ===id)
      if(dt !== undefined){
        setIsUpdate(true)
        setId(id);
        setFirstName(dt[0].firstName);
        setLastName(dt[0].lastName);
        setAge(dt[0].age);
      }
  }

  const handleUpdate = () =>{
      const index = data.map((item) =>{
        return item.id
      }).indexOf(id);

      const dt = [...data];
      dt[index].firstName = firstName;
      dt[index].lastName = lastName;
      dt[index].age = age;
      setData(dt);
      handleClear();
  }

  const handleDelete =(id)=>{
    if(id>0){
      if(window.confirm("Are you sure to delete this item?")){
      const dt = data.filter(item=>item.id !==id);
      setData(dt);
    }

    }
  }

  const handleSave =(e)=>{
    let error = '';
    if(firstName.trim() === '')
      error += 'First name is required, ';

    if(lastName.trim() === '')
      error += 'Last name is required, ';

    if(age === '')
      error += 'Age is required.';

    if(error === '')
    {

    e.preventDefault();
    const dt = [...data];
    const newObject = {
      // id : data.length > 0 ? data[UserData.length - 1].id + 1: 1,
      id: data.length > 0 ? data[data.length - 1].id + 1 : 1,
      firstName : firstName,
      lastName : lastName,
      age : age
    }
   dt.push(newObject);
   setData(dt);
  }
  else{
    alert(error);
  }
}
const handleClear =()=>{
        setId(0);
        setFirstName('');
        setLastName('');
        setAge('');
        setIsUpdate(false);
}

  return (
    <>
      
      <div className='flex justify-center flex-col my-4 mx-10'>
        <div>
          <label className='font-serif text-blue-700'>
            First Name:
            <input className='border rounded-md px-2 py-1 mx-1 my-2 hover:border-blue-500' type="text" placeholder='Enter First Name' value={firstName} onChange={(e)=>setFirstName(e.target.value)} />
          </label>
        </div>
        <div>
        <label className='font-serif text-blue-700'>
            Last Name:
            <input className='border rounded-md px-2 py-1 mx-1 my-2 hover:border-blue-500' type="text" placeholder='Enter Last Name' value={lastName} onChange={(e)=>setLastName(e.target.value)} />
          </label>
        </div>
        <div>
        <label className='font-serif text-blue-700'>
            Age:
            <input className='border rounded-md px-2 py-1 mx-1 my-2 hover:border-blue-500' type="text" placeholder='Enter Age' value={age} onChange={(e)=>setAge(e.target.value)} />
          </label>
        </div>
        <div>
          {
            !isUpdate ? 
              <button className='bg-blue-500 m-1 px-2 py-1 rounded-md hover:text-white' onClick={handleSave}>SAVE</button>
              :
               <button className='bg-blue-500 m-1 px-2 py-1 rounded-md hover:text-white' onClick={()=>handleUpdate()}>Update</button>

          }
        <button className='bg-red-700 m-1 px-2 py-1 rounded-md hover:text-white' onClick={()=>handleClear()}>CLEAR</button>
        </div>
      </div>

      <table className='m-8 justify-center text-center items-center'>
        <thead >
          <tr className='bg-blue-400 text-2xl text-center justify-center'>
          <td className='mx-4 my-4 px-2 py-2 font-bold hover:text-white'>Sr.No</td>
          <td className='mx-4 my-4 px-2 py-2 font-bold hover:text-white'>Id</td>
          <td className='mx-4 my-4 px-2 py-2 font-bold hover:text-white'>First Name</td>
          <td className='mx-4 my-4 px-2 py-2 font-bold hover:text-white'>Last Name</td>
          <td className='mx-4 my-4 px-2 py-2 font-bold hover:text-white'>Age</td>
          <td className='mx-4 my-4 px-2 py-2 font-bold hover:text-white'>Actions</td>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item,index)=>{
              return(
                <tr key={index} className='bg-gray-400'>
                  <td className='mx-4 my-4 px-2 py-2 font-bold hover:text-white'>{index+1}</td>
                  <td className='mx-4 my-4 px-2 py-2 font-bold hover:text-white'>{item.id}</td>
                  <td className='mx-4 my-4 px-2 py-2 font-bold hover:text-white'>{item.firstName}</td>
                  <td className='mx-4 my-4 px-2 py-2 font-bold hover:text-white'>{item.lastName}</td>
                  <td className='mx-4 my-4 px-2 py-2 font-bold hover:text-white'>{item.age}</td>
                  <td>
                    <button className='bg-blue-500 m-1 px-2 py-1 rounded-md hover:text-white' onClick={()=>handleEdit(item.id)}>EDIT</button>
                    <button className='bg-red-700 m-1 px-2 py-1 rounded-md hover:text-white' onClick={()=>handleDelete(item.id)}>DELETE</button>
                  </td>
                  
                </tr>
              )
            })
          }
        </tbody>
      </table>


    </>
  )
}

export default TodoList
