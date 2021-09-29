import React from 'react';
import './previewBar.css';
import user_icon from '../../assets/user.png';
import null_icon from '../../assets/null.svg';






const PreviewBar = (props) => {
    return (
        <div className="previewBar">
            <div>
            <div className='userSection'>
                <img src={user_icon} alt='User' />
                
                <div >
                    <p className='bold'>Student Name </p>
                    <div className="user">
                        <p className='roll'>Roll Number </p>
                        <p className='roll'>Branch</p>
                    </div>                    
                </div>
                
            </div>
            </div>
            <br/>
            
                {props.comp?<div className="mainly">
                    <p className="bold">{props.comp.title}</p>
                    <p className="type">Company: {props.comp.companyName}</p>
                    <p className="type">{props.comp.type}</p>
                    <p className="ctc">{props.comp.CTC}</p>
                    <p className="description">{props.comp.description}</p>
                    <p className="description">{props.comp.contact}
                    <br/>
                    <br/>
                    </p>
                    <p className="email">{props.comp.Email}</p>
                    <br/>

                    <p className="description semibold data"> <div>{props.comp.ctc}</div></p>
                    <p className="description  data"> <div>{props.comp.basic}</div></p>
                    <p className="description  data"> <div>{props.comp.gross}</div></p>
                    <p className="description  data"> <div>{props.comp.accomadation}</div></p>
                    <br/>
                    <br/>
                    <br/>

                    <p className="description  data"> <div>{props.comp.duration}</div></p>
                    <p className="description  data"> <div>{props.comp.markx}</div></p>
                    <p className="description  data"><div>{props.comp.cut}</div></p>
                </div>:<div className="nully">
                    <img className="null_image" src={null_icon} alt="Empty"></img>
                    <p>Please select a Company</p>
                    </div>}
            
        </div>
    )    

}

export default PreviewBar;

