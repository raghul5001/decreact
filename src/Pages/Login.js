import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import "./Login.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
// import logo from "./Images/Greenslogo.jpg";

function Login() {

  const[uname, setUname] = useState("")
  const[pass, setPass] = useState("")

  const handleLogin = (e)=>{
    e.preventDefault()
    if(uname == "" || pass == ""){
      toast.error("Please fill all the details")
    }
    else{
      localStorage.setItem("user", uname)
      localStorage.setItem("pass", pass)
      toast.success("Login Successfull")

      setTimeout(() => {
        window.location.href = "/landingpage"
      }, 5000);   
    }
  }

  return (
    <div className='row'>
      <ToastContainer/>
      <div className='col-5 left'>
        <div className='leftcontent'>
          {/* <img className="logo" src={logo} alt='logo'/> */}
          <h1>Login</h1>
          <h3>Get access to your orders, wishlist and recommendations</h3>
        </div>
      </div>
      <div className='col-7 right'>
        <div className='graytext'>
          <input className="em" type='text' value={uname} placeholder='Enter Email/Mobile number' onChange={(e)=>setUname(e.target.value)}/><br/>
          <input className='ep' type='password' value={pass} placeholder='Enter Password' onChange={(e)=>setPass(e.target.value)}/>
          <h6 className='forgot'>Forgot?</h6>
          <h6 className='bc'>By continuing, you agree to Paperwall <span style={{color: "blue"}}> Terms of use</span> and <span style={{color: "blue"}}> Privacy policy</span></h6>
          <button className='login' onClick={handleLogin}><h5>Login</h5></button>
          <h6 className='dh'><span style={{color: "gray"}}> Don't have an account? </span> <span style={{color: "blue"}}> Register Now </span></h6>
        </div>
      </div>
    </div>
  )
}

export default Login