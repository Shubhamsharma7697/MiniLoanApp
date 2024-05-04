import Loader from "./Loader";
import Deshboard from "./Deshboard";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


const Deshloader=()=>{
    const myuse=useNavigate();
    const stuName=useSelector((state)=>state.stuUser.user)
      
    const[loading,setLoading]=useState(false)
    useEffect(()=>{
      setLoading(true)
      setTimeout(()=>{
        setLoading(false)
  
      },2000)
    },[])

    useEffect(()=>{
      if(stuName==null)
      {
       
        myuse('/')
      }

    },[])
    return(
        <>
        <div>
            {<Deshboard/>}
            {loading && <Loader/>}
        </div>

        
        </>
    )
}
export default Deshloader;