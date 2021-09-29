import React, {useState, useEffect, useCallback} from 'react';
import axios from 'axios';
import PreviewBar from '../previewSection/previewBar.js';
import './companyPage.css';




const CompList =()=> {
    const [notice,setNotice] = useState([]);
    const [selectedcompany,setSelectedcompany]=useState();
    const [searchTerm,setSearchTerm]=useState('');
    
    

    
    let role = 'student';
    // console.log(match.params);
    const loadNotice = useCallback(()=>{
        const apiUrl_Notice = encodeURI(`http://localhost:3000/api/v1/notice`);
       axios.all([
           axios.get(apiUrl_Notice).then((response)=>{
               setNotice(response.data.notices)
              
               
           })
       ]) 
       
    },[]);
    
    useEffect(()=>{
        loadNotice()
    }, [loadNotice])

    // const parseHTMLTags = (str) => {
    //     str = str.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
    //     return str
    // }

    const parseDate = (str) => {
        let dt = new Date(str);
        return dt.getDate() + "/" + (dt.getMonth() + 1) + "/" + dt.getFullYear();
    }

    return(
        <div className="CompList">
            <div className="mid">
                <div className="dim">
                    <div className="mid-up">
                        <div className="uppercontent">
                            <div className="input-box">
                                
                                <input type="text" placeholder="Search for Companies"
                                //value={FirstName} 
                                onChange={(e)=> setSearchTerm(e.target.value)}
                                />
                                <h2 className="poppins">Companies</h2>
                            </div>
                        </div> 
                    </div>
                </div>
                <div className="mid-bottom">
                {notice.filter((el)=>{
                    if(searchTerm==="")
                        return el;
                    else if(el.title.toLowerCase().includes(searchTerm.toLowerCase())){
                        return el;
                    }

                }).map(el => (
                            <div className='cardi' >
                                <div className="cards" onClick={() => setSelectedcompany(el)}>
                                <div className="col1">
                                    <div className="heading">{el.title}</div>
                                    <div className="heading">{parseDate(el.createdAt)}</div>
                                </div>
                                <div className="col2">
                                    <div className="sub">{el.type}</div>
                                    <div className="sub">{el.ctc}</div>
                                    
                                      {role === "admin" ? (
                                      <div className="wrap-button">
                                      <button className="click cle btn">Edit</button> 
                                      <button className="click cld btn">Delete</button>
                                      </div> 
                                      ) : (
                                        <div></div>
                                      )}
                                     
                                </div>
                            </div> 
                            </div>        
                                     
                        ))}  
                              
                    </div>
            </div>
            <PreviewBar number={1} comp={selectedcompany}/>
        </div>

    )


}
export default CompList;