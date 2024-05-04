import user_password from './Assets/password.png';
import user_email from './Assets/email.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../Stuslice';
import { loginadmin } from '../AdminSlice';




const  Login=()=>
{
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[userType,setUserType]=useState("")

    const myDispatch=useDispatch();
    const myNav=useNavigate();



const handleSubmit=(e)=>
{
    

        e.preventDefault();
    
            
    if (userType == 'student')
    {
            
       
        // let url=  `http://localhost:4000/students/?email=${email}`;
        
        let url=  `http://127.0.0.1:8000/customers/?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`;

        
        axios.get(url).then((res)=>{
            console.log(res.data);

          const urlData=res.data.find((key)=>key.email===email && key.password===password);
           
          let idwithname = {}
           if (urlData)
            {
               // console.log(urlData);
                const username=urlData.name
                const userid=urlData.student_id;

                idwithname = {
                    "name" : username,
                    "iddd" : userid
                }
                myDispatch(login(idwithname));
                myNav('/deshboard')
            
            }
            else{
            alert("Invalid credentials")
            }
        }).catch(error=>{
            console.error("Error during authentication",error);
            alert("An error occurred during authentication.Please try again later.")
            
        })
    }
          
    
            
 
     
            
  
   
    else{

        e.preventDefault(); 
        
        let url=  `http://127.0.0.1:8000/adminlogin/?adminemail=${encodeURIComponent(email)}&adminpassword=${encodeURIComponent(password)}`;
  
        axios.get(url).then((res)=>{
            console.log(res.data);

          const urlData=res.data.find((key)=>key.adminemail===email && key.adminpassword===password);
           
          let idwithname = {}
           if (urlData)
            {
               // console.log(urlData);
                const username=urlData.adminname;
                const userid=urlData.admin_id;
                console.log(userid);
                

                idwithname = {
                    "name" : username,
                    "id" : userid
                }
                myDispatch(loginadmin(idwithname));
                myNav('/admindeshboard')
            
            }
            else{
            alert("Invalid credentials")
            }
        }).catch(error=>{
            console.error("Error during authentication",error);
            alert("An error occurred during authentication.Please try again later.")
            
        })
    }



   

          
      
}



    
    return(
      <>
      <div className='loginpage'>
      <div className='container'>
        <div className='header1'>
            <div className='text'>
                Sign <span>In</span>
            </div>
            <div className='underline'></div>


        </div>
        <div className='inputs'>
            <div className='input'>
                <img src={user_email}/>
                <input type='email' placeholder='Email' name='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>

            </div>
            <div className='input'>
                <img src={user_password}/>
                <input type='password' placeholder='Password' name='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>

            </div>
        </div>
        <select className='select-option' value={userType} onChange={(e) =>setUserType(e.target.value)} >
            <option value="default">Default</option>
           <option value="student">Customer</option>
            <option value="admin">Admin</option>
          
          
        
        </select>
        <div className='submit-container'>
            <Link to={'/register'}><div className='submit' >Sign-Up</div></Link>
          
            <div className='submit' onClick={handleSubmit}>Login</div>
        
      

        </div>
      </div>
      </div>
     

      
      </>
    )
}
export default Login;



