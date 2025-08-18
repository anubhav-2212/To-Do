import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const users={
    
    email:"",
    password:""
  }

  const [user,setUser]=useState(  users)
  const navigate=useNavigate();
  const inputHandler=async(e)=>{
    const{name,value}=e.target;
    console.log(name,value)
    setUser({...user,[name]:value})
  }
  const submitHandler=async(e)=>{
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/api/v1/user/login",user,
        {withCredentials:true},
      )
      .then((res)=>{
        toast.success(res.data.message,{position:'top-right'})
      })
      setTimeout(()=>{
        navigate('/Homepage')

      },1000)
      
    } catch (error) {
      console.log(error)
      toast.error(error.response?.data?.message,{position:'top-right'})
      
    }

    
  }


  return (
    <div>
      <div className='form-container'>
      <div className="form">
     
        <form action="submit"  onSubmit={submitHandler}>
            <div className="mb-3">
              <i className="fa-solid fa-user"></i>

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
                Not a User,Please <Link to='/register'>Register</Link>
              </p>
              <button type="submit" className="btn btn-dark">Login</button>
              
             

            </div>
        </form>
       </div>
      </div>
      
    </div>
  )
}

export default Login
