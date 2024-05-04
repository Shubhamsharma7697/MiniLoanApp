
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// import { login } from "../Stuslice";
const Adminseecomplain = () => {
    const [data, setData] = useState([]);
    const [newdata, setNewData] = useState([]);


    

        
   

    let Serial_Number = 0
    const myloadData = () => {
        let url = "http://localhost:8000/customers/";
        axios.get(url).then((res) => {

            setNewData(res.data);
            // console.log(res.data);
            
            
        })
    }
    console.log(data);
    

    const loaddata = () => {

        let url = "http://localhost:8000/customerloan/";
        axios.get(url).then((res) => {
            setData(res.data)
          
        })
    }


    useEffect(() => {

        loaddata()
        myloadData()

    }, [])




    
    const myData = data.map((key) => {
     
        let status="pending...";
        console.log(status);

        console.log(key.name);
        
   
        
        let name= ""
        let email = ""
        Serial_Number++;
        for (let i = 0; i < newdata.length; i++) {
            if (key.name === newdata[i].name) {
                name = newdata[i].name;
                email = newdata[i].email;
                // console.log(name);
                // console.log(email);
               
               
           
                
            }

        }
       
      
        
        
        return (
            <>
                <tr>
                    <td>{Serial_Number}</td>
                    <td>{name}</td>
                    <td>{email}</td>
 
                    <td>{key.loan}</td>
                    <td>{key.time}</td>
                {status==key.ans?
                 <Link to={"/admindeshboard/adminreply/"+key.stu_id } ><td>Reply</td></Link>: <td>Reply succesfully</td>
                }


                   

                 
                    
                </tr>
            </>
        )

    })

    return (
        <>
           


            
        <center>
                <div className="admintable">
                    <div className="tabular">
                        <h3 className="main-title">Responses <span>received</span></h3>
                        <div className="tablecontainer">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Serial Number</th>
                                        <th>Student Complain Name</th>
                                        <th>Student Email</th>  
                                        <th>Student Complain</th>
                                        <th>Date & Time</th> 
                                        <th>Action</th>
                                    </tr>

                                </thead>
                                {myData}


                            </table>
                        </div>

                    </div>
                </div>

        </center>







        </>
    )
}
export default Adminseecomplain;