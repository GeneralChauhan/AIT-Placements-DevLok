import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/Logo.png';


const LoginForm = () => {

  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");
  const [role , setRole] = useState("");
  const [logindata , setLoginData] = useState([]);


  const submitForm = (e) => {
    e.preventDefault();
    const entry = {role : role, email:email , password: password }
    setLoginData([entry]);
    console.log(logindata);
  }

  function handleChange(event){
    setRole(event.target.value)
  }

  
  
  return(
      <form action="POST" onSubmit = {submitForm}>
      <div id="loginform" >
          <img src={logo} alt="logo" className="image"/>
          <div class="row"> 
                <label htmlFor="role">Role</label>
                
                <select id="cars" name="cars" placeholder="Enter Role" onChange={handleChange}>
                    <option>Select</option>
                    <option value="Admin" >Admin</option>
                    <option value="Student">Student</option>
                </select>
          </div> 
          <div class="row">
            <label htmlFor="email">Email ID</label>
            <input type="text" placeholder="Enter your email" value={email} 
              onChange={(e)=> setEmail(e.target.value)}/>
          </div>
          <div class="row">
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Enter your password" value={password}
              onChange={(e)=>setPassword(e.target.value)}/>
          </div>
          <div id="button" class="row">
            <button type="submit">Log in</button>
          </div>
          
        
        </div>
        </form>
  )
  
}




export default LoginForm; 


