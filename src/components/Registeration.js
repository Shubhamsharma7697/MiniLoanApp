import user_icon from './Assets/person.png';
import user_password from './Assets/password.png';
import user_email from './Assets/email.png';
import { useState } from 'react';
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';


const Registeration = () => {
    const [input, setInput] = useState({});

    const myNav = useNavigate();
    const handleInput = (e) => {

        let name = e.target.name;
        let value = e.target.value;
        setInput(values => ({ ...values, [name]: value }))

 

    }
    console.log(input);

    
  
    
const submithandle = () => {
       
    //    let url = "http://localhost:4000/students"
    let url="http://127.0.0.1:8000/customers/"
    
    

            axios.post(url, input).then((res) => {
                console.log(res.data);
                // console.log(res.data.email);
                // console.log(res.data.password);
                
                
       
            if(res.data.name===undefined){
                alert("please enter name")
                
            }
            else if(res.data.name==="")
            {
                alert("name must not be blank")
            }
            else if(res.data.email===undefined){
                alert("please fill email")

            }
            else if(res.data.email==="")
            {
                alert("email must not be blank")
            }
            else if(res.data.password===undefined){
                alert("please fill password")

            }
            else if(res.data.password=="")
            {
                alert("password must not be blank")
            }
            else if(res.data.fname===undefined){
                alert("please fill father name")

            }
            else if(res.data.fname=="")
            {
                alert("father name must be required")
            }
            else if(res.data.mname===undefined){
                alert("please fill mother name")

            }
            else if(res.data.mname=="")
            {
                alert("mother name must be required")
            }
            else if(res.data.age===undefined){
                alert("please fill the age")

            }
            else if(res.data.age=="")
            {
                alert("age must be required")
            }
            else{
                alert("succesfully submit")
                
                myNav('/login')

            }
            

                
              
    
            }).catch(error=>{
                console.error("Error during authentication",error);
                alert("An error occurred during authentication.Please fill all the fields.")
                
            })

        
       
    }


    return (
        <>
            <section id='registeration'>
                <div className='container'>
                    <div className='header1'>
                        <div className='text'>
                            Sign <span>Up</span>
                        </div>
                        <div className='underline'></div>
                    </div>
                <div className='inputsall'>
                    <div className='inputs'>
                    <div className='input'>
                            <img src={user_icon} />
                            <input type='text' placeholder='Full Name' name='name' onChange={handleInput} value={input.name} required/>
                        </div>

                        <div className='input'>
                            <img src={user_email} />
                            <input type='email' placeholder='Email' name='email' onChange={handleInput} value={input.email} required/>

                        </div>
                        <div className='input'>
                            <img src={user_password} />
                            <input type='password' placeholder='Password'
                                name="password" onChange={handleInput} value={input.password} required/>

                        </div>
                    </div>
                    <div className='inputs'>
                        <div className='input'>
                            <img src={user_password} />
                            <input type='number' placeholder='Age'
                                name="age" onChange={handleInput} required/>

                        </div>
                        <div className='input'>
                            <img src={user_password} />
                            <input type='text' placeholder='Father Name'
                                name="fname"  onChange={handleInput} required/>

                        </div>
                        <div className='input'>
                            <img src={user_password} />
                            <input type='text' placeholder='Mother Name'
                                name="mname" onChange={handleInput} required/>

                        </div>
                        
                    </div>





                    </div>
                  
                    <div className='submit-container'>
                        <div className='submit' onClick={submithandle}>Sign-Up</div>
                       

                    </div>
                </div>


            </section>


        </>
    )
}
export default Registeration;