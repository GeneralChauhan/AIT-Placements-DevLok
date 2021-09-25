import React, {useState} from 'react';
import PreviewBar from '../previewSection/previewBar.js';
import './companyPage.css';
import Data from "./companiesData.json";


const CompList =()=> {
    const [selectedcompany,setSelectedcompany]=useState();
    return(
        <div className="CompList">
            <div className="mid">
                {Data.map(el => (
                        <div className="cards" onClick={() => setSelectedcompany(el)}>
                            <div className="col1">
                                <div className="heading">{el.company}</div>
                                <div className="heading">{el.date}</div>
                            </div>
                            <div className="col2">
                                <div className="sub">{el.type}</div>
                                <div className="sub">{el.ctc}</div>
                            </div>
                        </div>                    
                    ))}           
                </div>
            <PreviewBar number={1} comp={selectedcompany}/>
        </div>

    )


}
export default CompList;
