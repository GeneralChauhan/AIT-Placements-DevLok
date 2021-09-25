import React, { useState }  from "react";
import '../Register/Register.css';

const Register = () => {

    const [FirstName , setFirstName] = useState("");
    const [LastName , setLastName] = useState("");
    const [Year , setYear] = useState("");
    const [Branch , setBranch] = useState("");
    const [Email , setEmail] = useState("");
    const [RegistrationID , setRegistrationID] = useState("");
    const [password , setPassword] = useState("");
    const [ConfirmPassword , setConfirmPassword] = useState("");
    const [logindata , setLoginData] = useState([]);
  
  
    const submitForm = (e) => {
      // if(ConfirmPassword==password)
      // { 
        e.preventDefault();
        const entry = { FirstName:FirstName,LastName:LastName,Year:Year,Branch:Branch,email:Email
                      ,RegistrationID:RegistrationID, password: password }
        setLoginData([entry]);
        console.log(logindata);
      // }

    }
  
    function handleChangeYear(event){
      setYear(event.target.value)
    }
    function handleChangeBranch(event){
      setBranch(event.target.value)
    }
  
  
      
    
    return(
      <div className="Backbody">
      <div class="rgform">
        <div class="title">Registration</div>
        <form action="POST" onSubmit = {submitForm}>
          <div className="user-details">
            <div className="input-box">
              <span className="details">First Name</span>
              <input type="text" placeholder="Enter First Name" required 
               value={FirstName} 
               onChange={(e)=> setFirstName(e.target.value)}/>
            </div>
            <div className="input-box">
              <span className="details">Last Name</span>
              <input type="text" placeholder="Enter Last Name" 
               value={LastName} 
               onChange={(e)=> setLastName(e.target.value)}/>
            </div>
            <div className="input-box"> 
                <label htmlFor="Year" className="Details">Year</label>
                
                <select id="year" name="year" onChange={handleChangeYear} required>
                    <option>Select Graduation Year</option>
                    <option value="3rd year" >Third Year</option>
                    <option value="4th year">Fourth Year</option>
                </select>
            </div> 
            <div className="input-box"> 
                <label htmlFor="Branch" className="Details">Branch</label>
                
                <select id="branch" name="branch" onChange={handleChangeBranch} required>
                    <option placeholder="yolo">Select Branch</option>
                    <option value="COMP" >Computer Engineering</option>
                    <option value="IT">Information Technology</option>
                    <option value="ENTC" >Electronics and Telecommunication</option>
                    <option value="MECH">Mechnical</option>
                    <option value="ME">ME</option>
                </select>
            </div> 
            <div className="input-box">
              <span className="details">Email Id</span>
              <input type="text" placeholder="Enter EmailId" required 
               value={Email} 
               onChange={(e)=> setEmail(e.target.value)}/>
            </div>
            <div className="input-box">
              <span className="details">RegistrationID</span>
              <input type="text" placeholder="Enter RegistrationID" required 
               value={RegistrationID} 
               onChange={(e)=> setRegistrationID(e.target.value)}/>
            </div>
            <div className="input-box">
              <span className="details">Password</span>
              <input type="password" placeholder="Enter Password" required 
               value={password} 
               onChange={(e)=> setPassword(e.target.value)}/>
            </div>
            <div className="input-box">
              <span className="details">Confirm Password</span>
              <input type="password" placeholder="Confirm Password" required 
               value={ConfirmPassword} 
               onChange={(e)=> setConfirmPassword(e.target.value)}/>
            </div>
            

          </div>

          <div className="Button">
              <button type="submit">Register</button>
          </div>

        </form>


        

      </div>
      </div>


        


        
            

            
            
          
        
    )
    
  }
  
  
  
  
  
  
  
  
      
     
  
  
  export default Register; 
  
  
