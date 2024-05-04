import axios from "axios";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Stuforget=()=>{
    const[prepass,setPrepass]=useState("");
    const[newpass,setNewpass]=useState("");
    const[confirmpass,setConfirmpass]=useState("");
    
    const myUse=useNavigate();
    
    
    

    const stuid=useSelector((state)=>state.stuUser.stuid)
    // console.log(stuid);
    
 
    
   

    const handleSubmit=(e)=>{
        e.preventDefault()


        if(!prepass || !newpass || !confirmpass)
        {
          alert("Please fill all the fields")
          return;
        }
        else if(newpass!=confirmpass)
        {
          alert("your password and confirm password do not match")
          return;
        }

        let url=`http://127.0.0.1:8000/customers/${stuid}/`
        axios.get(url).then((res)=>{
       

            if(res.data.password===prepass){
                if(newpass===confirmpass)
                {
                    axios.patch(url, {password:confirmpass}).then(()=>{
                        console.log(res.data);
                        alert("Your password succesfully Changed")
                        myUse("/login")
                        
                    }).catch(error=>{
                      console.error('Error updating password:',error);
                      alert("An error occurred while changing the password.Please try again.")
                    })

                    
                }
               
                
            }
            else{
              alert("Please enter the valid old password")

          }
           
        }).catch(error=>{
          console.error("Error fatching student data:",error);
          alert("An error occurred while fetching student data.Please try again.")
        })
    
        

    }
   

    return(
        <>
        <center>
      

<div className="mainDiv">
  <div className="cardStyle">
    <form action="" name="signupForm" id="signupForm">
      
      <img src="" id="signupLogo"/>
      
      <h2 className="formTitle">
        Change Your Password
       
      </h2>
    <div className="inputDiv">
      <label className="inputLabel" for="password">Old Password</label>
      <input type="password" id="password" name="password"
      value={prepass} onChange={(e)=>setPrepass(e.target.value)} required/>
    </div>
      
      
    <div className="inputDiv">
      <label className="inputLabel" for="password">New Password</label>
      <input type="password" id="password" name="password" value={newpass} onChange={(e)=>setNewpass(e.target.value)} required/>
    </div>
      
    <div class="inputDiv">
      <label className="inputLabel" for="confirmPassword">Confirm Password</label>
      <input type="password" id="confirmPassword" name="confirmPassword" value={confirmpass} onChange={(e)=>setConfirmpass(e.target.value)} required/>
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
export default Stuforget;