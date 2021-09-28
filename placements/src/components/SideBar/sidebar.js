import React, { Component } from "react";
import './sidebar.css';
import logo from '../../assets/Logo.png';
// import { NavLink } from "react-router-dom";
import menu_icon from '../../assets/icons8-menu.svg';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import PieChartIcon from '@material-ui/icons/PieChart';
import Backdrop from '../../utils/Backdrop/Backdrop';
import { Link } from "react-router-dom";
import Form from '../Login/AdminLogin'


class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
        sideDrawerOpen: false,
        role:'admin'
    };
  }

  toLoginPage=()=>{
    debugger;
    <Link to='/Form'></Link>
   
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen}; 
    })
  };
  render() {
    const sidebarData = [
      {
        title: "Latest",
        icon: <HomeWorkIcon />,
        link: "/latest"
      },
      {
        title: "Past Stats",
        icon: <PieChartIcon />,
        link: "/stats"
      }

    ];

    let sideDrawer = "Navbar";
    let backDrop = false;
    let NavbarLink;

    if(this.state.sideDrawerOpen){
      sideDrawer = "NavBar open"
      backDrop = true
      NavbarLink = this.drawerToggleClickHandler
    }


    

return (
 <div className="sidebar">
   
   <button className="toggle-button" onClick={this.drawerToggleClickHandler}>
          <img whileHover={{ scale: 1.2,transition: { duration: 0.2 }, }} className="burgermenu" src={menu_icon} alt="oss sidebar"/>
    </button>
  <div className="sideitems">
    <img src={logo} alt="logo" className="image"/>
      
    <ul className="sidebarList">
      {sidebarData.map((val,key)=> {
        
          return(
            <>


              <Link to={val.link}>
            <li className="row" key={key} >
              {" "}
            {val.icon}{" "}
            <div>
                {val.title}
            </div>
            
          </li>

          
          </Link>

            
        </>
          
          
          );
      

      })}
    </ul>

    <div className="button-option lower">
            <div id="button" class="rowl">
              <button type="button" ><Link to='/x'>LOGOUT</Link></button>
              
            </div>
            {this.state.role === "user" ? (
            <div id="button" class="rowl">
              <button type="button"><Link to='/addNotice'>ADD</Link> </button>
            </div>
             ) : (
              <div></div>
            )}
    </div>
    
  </div>
  {/* < Backdrop /> */}
  {/* <Backdrop show={backDrop} clicked={this.drawerToggleClickHandler}/> */}
  </div>
);

 }}

export default Sidebar