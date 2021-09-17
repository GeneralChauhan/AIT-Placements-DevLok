import React, { Component } from 'react'
import '../Login/Login.css'
import logo from '../../assets/Logo.png';

// import 'react-dropdown/style.css';




class Admin extends Component{
    
  render(){
    return(
      <div id="loginform">
        <FormHeader title="Login" />
        <Form />
        
      </div>
    )
  }
}

const options = [
    'Admin', 'Student', 'Staff Member'
  ];
const defaultOption = options[1];

const FormHeader = props => (
    <h2 id="headerTitle">{props.title}</h2>
);


const Form = props => (
    
   <div>
     <img src={logo} alt="logo" className="image"/>
     {/* <FormInput description="Role" placeholder="Enter your Role" type="text"/>
     <Dropdown options={options} onChange={this.} value={defaultOption} placeholder="Select an option" />;
      */}
        <div class="row"> 
            <label >Role</label>
            
            <select id="cars" name="cars" placeholder="Enter Role" className="">
                <option value="Admin">Admin</option>
                <option value="Student">Student</option>
            </select>
        </div> 
     
     <FormInput description="Email ID" placeholder="Enter your email" type="text" />
     <FormInput description="Password" placeholder="Enter your password" type="password" />
     
     <FormButton title="Log in"/>
   </div>
);

const FormButton = props => (
  <div id="button" class="row">
    <button>{props.title}</button>
  </div>
);

const FormInput = props => (
  <div class="row">
    <label>{props.description}</label>
    <input type={props.type} placeholder={props.placeholder}/>
  </div>  
);





export default Admin; 


