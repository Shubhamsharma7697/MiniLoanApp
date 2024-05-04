
import axios from "axios";
import { useState,useEffect } from "react";
import { useSelector } from "react-redux";


const AdminProfile = () => {
    const myUse = useSelector((state) => state.admin.adminname);
    console.log(myUse);
    
    const[name,setName]=useState()
    const[email,setemail]=useState()
    const[password,setPassword]=useState()
    
    
  

    const loadData=()=>{
        axios.get(`http://localhost:8000/adminlogin/?admin_id=${encodeURIComponent(myUse)}`).then((res)=>{
            let data1=res.data.find((key)=>key.adminname===myUse)

            // console.log(data1.adminname);
            


            setName(data1.adminname)
            setemail(data1.adminemail)
            setPassword(data1.adminpassword)
            console.log(data1.data);
            
           
            
            
            
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
                            Student Profile
                        </h2>
                            <div className="inputcol1">
                                <div className="inputDiv">
                                    <label className="inputLabel" for="password">Admin Name</label>
                                    <input type="text" id="password" name="password"
                                        value={name} required />
                                </div>


                                <div className="inputDiv">
                                    <label className="inputLabel" for="password">Admin Email</label>
                                    <input type="text"  name="email" value={email} required />
                                </div>

                                <div class="inputDiv">
                                    <label className="inputLabel" for="confirmPassword">Admin Password</label>
                                    <input type="text" value={password} required />
                                </div>
                            </div>
                           

                            


                    </form>
                </div>
            </div>
            </div>

        </>
    )
}
export default AdminProfile;