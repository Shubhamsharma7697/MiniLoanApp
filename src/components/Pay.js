
import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Pay=()=>{
    const { stu_id } = useParams();
    const mynav = useNavigate()
    const [mydata, setMydata] = useState("")
    
    const handleSubmit = () => {
        let url = `http://127.0.0.1:8000/customerloan/${stu_id}/`


        axios.patch(url, { pay: mydata,}).then((res) => {
            
            


            console.log(res.data);
            


           
            


            alert("Loan Pay Succesfully")



        }).catch(error=>{
            console.error("Error during authentication",error);
            alert("An error occurred during authentication.Please try again later.")
            
        })
        setMydata("")

        mynav("/deshboard/custompay")

    }

    return(
        <>




<center>
        

<div className="mainDiv">
  <div className="cardStyle">
    <form action="" name="signupForm" id="signupForm">
      
      <img src="" id="signupLogo"/>
      
      <h2 className="formTitle">
        Pay Your Loan EMI
       
      </h2>
    <div className="inputDiv">
      <label className="inputLabel" for="password">Payment Amount (in Rupees)*</label>
      <input type="number" id="password" name="amount" placeholder="Minimum Rs 2000" value={mydata} onChange={(e)=>setMydata(e.target.value)} required/>
    </div>
      
    
    <div className="buttonWrapper">
      <button className="stuforgetbtn" onClick={handleSubmit}>Submit</button>
    </div>
      
  </form>
  </div>
</div>

        </center>
        
        
 
        
        </>
    )
}
export default Pay;






