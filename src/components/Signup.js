import React, { useState } from 'react'
import '../assets/signup.css'
import {  useNavigate } from 'react-router-dom';



function Signup() {
  const [fnames,setfnames]=useState();
  const [lnames,setlnames]=useState();
  const [emails,setEmails]=useState();
  const [phone,setphonenumber]=useState();
  const [passwords,setPasswords]=useState();
  const [conpass,setConpass]=useState();
  const [address,setaddress]=useState();
  const navigate=useNavigate();
  const handleValues=async()=>{
    try{
      if(passwords==conpass){
        const response = await fetch('http://localhost:8000/user/detail',{
          method:'POST',
          headers:{
            'content-Type':'application/json'
          },
          body:JSON.stringify({
            fname:fnames,
            lname:lnames,
            email:emails,
            mobile:phone,
            password:passwords,
            address:address
          })
        }
      )
      const data=await response.json()
      console.log("Account created successfully")
      navigate('/login')
        }
        else{
          console.log("Password is not same")
        }
      } 
      catch (error) {
        console.log("Error is ",error)
      }
  }


  return (
    <div className='s-outer'>
        <img style={{margin:'0',marginTop:'6px'}} width={'67%'} height={'51px'} src="src/assets/images/08.jpg" alt="pic"/>
        <img style={{position:'absolute',marginTop:'-48.2%',marginLeft:'65%',height:'60%'}} src="src/assets/images/dribbb2.png" alt="pic" />
        <form className="form">
        <p className="title">Create new account</p>
        <div className='namefield'>
        <label>
                <input className="input" type="text" onChange={t => {setfnames(t.target.value)}}/>
                <span>First name</span>
        </label>
        <label>
                <input className="input" type="text" onChange={t => {setlnames(t.target.value)}}/>
                <span>Last name</span>
        </label>
        </div>

        <label>
          <input className="input" type="email" onChange={k => {setEmails(k.target.value)}}/>
          <span>Email</span>
        </label>

        <label>
          <input className="input" type="text" onChange={k => {setphonenumber(k.target.value)}}/>
          <span>Phone number</span>
        </label>

        <label>
                <input className="input" type="text" onChange={t => {setaddress(t.target.value)}}/>
                <span>Address</span>
        </label>
  
        <label>
          <input className="input" type="password" onChange={u => {setPasswords(u.target.value)}} />
          <span>Password</span>
        </label>
  
        <label>
          <input className="input" type="password" onChange={h => {setConpass(h.target.value)}}/>
          <span>Confirm password</span>
        </label>
        
        <button className="submit" onClick={e => {e.preventDefault();handleValues()}}>Create</button>
        
        <p className="signin">
          Already have an account? <h1><a href="/login"><b>Login</b> </a></h1>
        </p>
      </form>
      <div className='quotes'>
        <h1 style={{color:'#f89c72'}}>SHOW SUPPORT FOR THE FLOOD AFFECTED REGIONS</h1>
        <h1>Connecting the people through</h1>
        <img style={{marginLeft:'40%'}} width={'100px'} src="src/assets/images/ATN logo.png" alt="pic" />
      </div>
    </div>
  )
}

export default Signup