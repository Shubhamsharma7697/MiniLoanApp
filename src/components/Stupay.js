import { useState,useEffect } from "react";
import axios from "axios";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Stupay=()=>{

    var date = new Date();
    date.setDate(date.getDate() + 8);

    var finalDate = date.getDate()+'/'+ (date.getMonth()+1) +'/'+date.getFullYear();

    
    // date.setDate(date.getDate() + 7);
    // let finalDate1=date.getDate()+'/'+ (date.getMonth()+1) +'/'+date.getFullYear();


    console.log(finalDate);
    
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
        let status=""
        return(
            <>
            <tr>
                <td>{sno}</td>
               <td>{key.loan}</td>
               <td>{key.loan-key.pay}</td>
               <td>{key.term } weeks</td>
               <td>{key.loan/key.term}</td>
               
                <td>{finalDate}</td>
              
                <td> {status==key.pay?
                 <Link to={"/deshboard/pay/"+key.stu_id } ><td>UnPaid</td></Link>: <td>Paid</td>
                }
                </td>
                
               
               
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
                            <th>Customer Loan After Paid</th>
                            <th>Term </th>
                            <th>Loan Amount in each week</th>
                
                      
                            <th>EMI Date</th>
                           
                            <th>Action</th>
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
export default Stupay;