import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminReply = () => {
    const { stu_id } = useParams();

    console.log(stu_id); 
    
    const [mydata, setMydata] = useState("")
  
    const mynav = useNavigate()
    const dateNow = Date.now();
    const date = new Date(dateNow);
    const currentdatetime1 = date.toLocaleString('en', { timeZone: 'IST' })

    console.log(currentdatetime1);



    const handleSubmit = () => {
        let url = `http://127.0.0.1:8000/customerloan/${stu_id}/`


        axios.patch(url, { ans: mydata, admintime: currentdatetime1 }).then((res) => {
            
            


            console.log(res.data);
            


           
            


            alert("Answer reply succesfully")



        }).catch(error=>{
            console.error("Error during authentication",error);
            alert("An error occurred during authentication.Please try again later.")
            
        })
        setMydata("")

        mynav("/admindeshboard/seecomplain")

    }


    return (
    <>

            <center>
             
                <div className="container1">
                    <form action="#">
                        <div className="stubox1">
                        </div>
                        <div className="stubox">
                            <label for="">Loan Request</label>
                            {/* <textarea id="subject" name="subject" value={mydata} onChange={(e) => { setMydata(e.target.value) }} placeholder="Write something." /> */}
                            <select value={mydata} onChange={(e)=>setMydata(e.target.value)}>
                            <option value="default">Default</option>
                            <option value="Reject" style={{color:"red"}}>Reject</option>
                            <option value="Approved" style={{color:"green"}}>Approved</option>

                            </select>
                        </div>
                        <div className="stubox2">
                            <input type="submit" onClick={handleSubmit} value="submit" />
                        </div>
            </form>
        </div>


                    </center>


    </>
                )
}
export default AdminReply;