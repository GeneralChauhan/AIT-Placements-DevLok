import React, { useState }  from "react";
import '../Profile/Profile.css';
import ProfileData from '../Profile/ProfileData.json';
import userpic from '../../assets/user.png';
import logo from '../../assets/Logo.png';



const Profile = (props) => {
    return(
        
        <div className="containe ">
        {/* <Sidebar/> */}
            <form method="" className="emp-profile">
                
                <div className="userdata ">
                    <div className="userimage">
                        <img src={userpic} alt="Userpic" className="userimg"/>

                    </div>
                    <div className="aboutuser">
                        
                        <h1>{ProfileData[0].FirstName}</h1>
                        <h1>{ProfileData[0].LastName}</h1>
                        <hr></hr>
                        <div className="userdetails">
                            <h3>{ProfileData[0].RegistrationId}</h3>
                            <h3>{ProfileData[0].Branch}</h3>
                        </div>
                        
                        

                    </div>
                </div>




               

            </form>

        </div>

    )



}

export default Profile;
