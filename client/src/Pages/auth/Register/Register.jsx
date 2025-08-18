import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./Register.css"
import axios from "axios";
import toast from 'react-hot-toast';


const Register = () => {
  const users={
    name:"",
    email:"",
    password:""
  }

  const[user,setUser]=useState(users)
  const navigate=useNavigate();
  const inputHandler=(e)=>{
    const{name,value}=e.target;
    console.log(name,value)
    setUser({...user,[name]:value})
    console.log(user)
  }

    const submitHandler=async(e)=>{
      e.preventDefault();
      console.log(user)
      try {
        await axios.post("http://localhost:3000/api/v1/user/register",user)
        .then((res)=>{
           toast.success(res.data.message,{position:'top-right'})
           
           
        })
        setTimeout(()=>{
          navigate('/Homepage')

        },1000)
       

        
        
        }
       catch (error) {
        console.log(error)
        const message=error.response?.data?.message||"something Went Wrong";
        toast.error(  message,{position:'top-right'})
        
      } 
      
    }
    
  
  return (
    <div className='form-container'>
      <div className="form">
     
        <form action="submit"  onSubmit={submitHandler}>
            <div className="mb-3">
              <i className="fa-solid fa-user"></i>

            </div>
            <div className="mb-3">
              <label htmlFor="name">Name:</label>
              <input type="text"  name="name" placeholder='Enter Your Name' 
              onChange={inputHandler} />

            </div>
            <div className="mb-3">
              <label htmlFor="email">Email-Id:</label>
              <input type="text" name="email" placeholder='Enter Your Email'
              onChange={inputHandler} />

            </div>

            <div className="mb-3">
              <label htmlFor="password">Password</label>
              <input type="password"  name="password" placeholder='Enter Your Password'
              onChange={inputHandler}  />

            </div>
            <div className="form-bottom">
              <p className='text-center'>
                Already  a User,Please <Link to='/login'>Login</Link>
              </p>
              <button type="submit" className="btn btn-dark">Register</button>
              
             

            </div>
        </form>
       </div>
      </div>
      
   
  )
}

export default Register

