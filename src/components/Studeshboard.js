
import axios from "axios";
import { useState,useEffect } from "react";
import { useSelector } from "react-redux";


const Studeshboard = () => {
    const myUse = useSelector((state) => state.stuUser.user);
    // console.log(myUse);

    
    
    
    const[name,setName]=useState()
    const[email,setemail]=useState()
    const[age,setAge]=useState()
    const[fname,setFname]=useState()
    const[lname,setLname]=useState()
  
    
    const loadData=()=>{
        axios.get(`http://127.0.0.1:8000/customers/?student_id=${encodeURIComponent(myUse)}`).then((res)=>{

           let data1=res.data.find((key)=>key.name===myUse)
            setName(data1.name)
            setemail(data1.email)
            setAge(data1.age)
            setFname(data1.fname)
            setLname(data1.mname)
            
            
        

         

           
            
            
            
            
            
        })
    }

    useEffect(()=>{
        loadData()
    },[])
    return (
        <>




        <div className="stuprofile">
            <div className="mainDiv">
                <div className="cardStyle">
                    <form action="" name="" id="signupForm">

                        <img src="" id="signupLogo" />

                        <h2 className="formTitle">
                        Customer Profile
                           
                        </h2>
                        <div className="inputrow">
                            <div className="inputcol1">
                                <div className="inputDiv">
                                    <label className="inputLabel" for="password">Customer Name</label>
                                    <input type="text" id="password" name="password"
                                        value={name} required />
                                </div>


                                <div className="inputDiv">
                                    <label className="inputLabel" for="password">Customer Email</label>
                                    <input type="text"  name="email" value={email} required />
                                </div>

                                <div class="inputDiv">
                                    <label className="inputLabel" for="confirmPassword">Customer Age</label>
                                    <input type="text" value={age} required />
                                </div>
                            </div>
                            <div className="inputcol2">
                                <div className="inputDiv">
                                    <label className="inputLabel" for="password">Customer Father Name</label>
                                    <input type="text" value={fname}
                                        required />
                                </div>


                                <div className="inputDiv">
                                    <label className="inputLabel" for="password">Customer Mother Name</label>
                                    <input type="text" value={lname}  name="password" required />
                                </div>

                              
                        </div>

                            </div>

                            


                    </form>
                </div>
            </div>
            </div>

        </>
    )
}
export default Studeshboard;