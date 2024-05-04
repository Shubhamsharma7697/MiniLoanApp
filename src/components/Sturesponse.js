import { useState,useEffect } from "react";
import axios from "axios";

import { useSelector } from "react-redux";
const Sturesponse=()=>{
    let sno=0
    const[data,setData]=useState([]);
    let Stuid=useSelector((state)=>state.stuUser.stuid)
    let stuuser=useSelector((state)=>state.stuUser.user)

    let loaddata=()=>{
        let url=`http://127.0.0.1:8000/customerloan/?name=${encodeURIComponent(stuuser)}`;
        axios.get(url).then((res)=>{
            let data1=res.data.filter((key)=>key.name===stuuser)
            console.log(data1);
            
            setData(data1)
            // console.log(res.data);
                
        })

    }
    useEffect(()=>{
        loaddata()
    },[])
    const Mydata=data.map((key)=>{
        sno++;
        return(
            <>
            <tr>
                <td>{sno}</td>
               <td>{key.loan}</td>
               <td>{key.term } weeks</td>
                <td>{key.ans}</td>
                <td>{key.admintime}</td>
               
               
            </tr>
            
            </>
        )
    })
    return(
        <>
       
   <center>
       <div className="tabular">
            <h3 className="main-title">Responses <span>received</span></h3>
            <div className="tablecontainer">
                <table>
                    <thead>
                        <tr>
                            <th>Serial Number</th>
                            <th>Customer Loan Amount</th>
                            <th>Term </th>
                            <th>Reply By Admin</th>
                            <th>Date and Time of Reply</th>
                        </tr>
                       
                    </thead>
                    {Mydata}
                   
                   
                </table>
            </div>
            
        </div>
        </center>
      

        </>
    )
}
export default Sturesponse;