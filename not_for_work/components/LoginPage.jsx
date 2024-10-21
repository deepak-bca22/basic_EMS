import React, { useState } from 'react'
import '../components/loginpage.css'
import axios from 'axios';


const LoginPage = () => {
  const [value,setValue]= useState({
    email:'',
    password:''
  });

   const handleSubmit =(event)=>{
       event.preventDefault();
       axios.post('http://localhost:4000/auth/adminlogin')
       .then(result => console.log(result))
       .catch(err=>console.log(err))
       }
  return (
    <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
    <div className='p-3 rounded w-26 border loginForm'>
    <h1>Login Page</h1>
    <form onSubmit={handleSubmit}>

       <div>
        <label htmlFor="email"><strong>Email:</strong></label>
        <input type="email" name='email' autoComplete='off' placeholder='enter your email' className='form-control rounded-0 my-2'required onChange={(e)=>setValue({...value,email:e.target.value})}/>
       </div>
       <div>
        <label htmlFor="password"><strong>Password:</strong></label>
        <input type="password" name='password' autoComplete='off' placeholder='enter your password' className='form-control rounded-0 my-2'required onChange={(e)=>setValue({...value,password:e.target.value})}/>
       </div>

       <button className='btn btn-success w-100 my-3 rounded-0'>Login</button>

       <div className=' '>
         <input type="checkbox" name="tick" id="tick" required/>
        <label htmlFor="password" className='mx-3'>You are agree with terms & conditions</label>
       </div>


    </form>
    </div>
    </div>
  )
}

export default LoginPage;