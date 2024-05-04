import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Stucomplain=()=>{
    const[input,setinput]=useState("");
    const[input1,setinput1]=useState("");
    const myselector=useSelector(state=>state.stuUser.stuid);
    const mysel=useSelector(state=>state.stuUser.user);
    const dateNow = Date.now();
    const myUse=useNavigate()
  
    
    
    const date = new Date(dateNow); 
    // console.log(dateNow); 
    //  console.log(date);
    const currentdatetime= date.toLocaleString('en' ,{ timeZone: 'IST' })
 
    console.log(currentdatetime);
    
    
    
  
    
    

    const handleSubmit=()=>{
        
        let url="http://127.0.0.1:8000/customerloan/";
        axios.post(url,{"stu_id":myselector,"loan":input,"ans":"pending...","time":currentdatetime,"admintime":"wait...","name":mysel,"term":input1,"pay":""}).then(()=>{
            alert("your loan request send succesfully!!!")    
        })
        setinput("")
        setinput1("")
        myUse("/deshboard")

      

    }

    return(
        <>
       

    

  <div className="container1">
   <form action="#">

   <div className="stubox1">
   <label for="subject">Loan Term (in Weeks)*</label>
    <input type="number" id="lname" name="lastname" placeholder="Enter Loan term" value={input1}  onChange={(e)=>setinput1(e.target.value)}/>
   </div>

    <div className="stubox">
    <label for="">Loan Amount (in Rupees)*</label>
    <textarea id="subject" name="subject" value={input} onChange={(e)=>setinput(e.target.value)} placeholder="Enter the Loan Amount" />
    </div>
    <div className="stubox2">
    <input type="submit" onClick={handleSubmit} value="submit"/>
    </div>
    

   




 
  
     </form>
   </div>
 


        </>
    )
}
export default Stucomplain;