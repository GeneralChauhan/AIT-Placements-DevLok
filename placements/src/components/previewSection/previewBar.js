import React from 'react';
import './previewBar.css';
import user_icon from '../../assets/user.png';
import Profile from '../Profile/Profile';



const PreviewBar = (props) => {
    return (
        <div class="previewBar">
            <div>
            <div class='userSection'>
                <img src={user_icon} alt='User' />
                
                <div >
                    <p class='bold'>Anandi Bahu</p>
                    <div className="user">
                        <p class='roll'>4101 </p>
                        <p class='roll'>EnTC A</p>
                    </div>                    
                </div>
                
            </div>
            </div>
            <br/>
            
                {props.comp?<div className="mainly">
                    <p class="bold">{props.comp.company}</p>
                    <p class="type">{props.comp.type}</p>
                    <p class="ctc">{props.comp.ctc}</p>
                    <p class="description">{props.comp.description}</p>
                    <p class="description">{props.comp.contact}
                    <br/>
                    <br/>
                    Email:
                    </p>
                    <p class="email">{props.comp.Email}</p>
                    <br/>
                    <p class="heading">CTC Break Points</p>
                    <p class="description semibold data"><div>Total :</div> <div>{props.comp.ctc}</div></p>
                    <p class="description  data"><div>Basic :</div> <div>{props.comp.basic}</div></p>
                    <p class="description  data"><div>Gross :</div> <div>{props.comp.gross}</div></p>
                    <p class="description  data"><div>Accomadation :</div> <div>{props.comp.accomadation}</div></p>
                    <br/>
                    <br/>
                    <br/>
                    <p class="description semibold data">Test Details:</p>
                    <p class="description  data"><div>Duration :</div> <div>{props.comp.duration}</div></p>
                    <p class="description  data"><div>Max. Marks :</div> <div>{props.comp.markx}</div></p>
                    <p class="description  data"><div>Cut-Off :</div> <div>{props.comp.cut}</div></p>
                </div>:<div className="nully">
                    Please select a company.
                    </div>}
            
        </div>
    )    

}

export default PreviewBar;

