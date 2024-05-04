import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";

import Registeration from "./components/Registeration";
import Login from "./components/Login";

import Stucomplain from "./components/Stucomplain";
import Sturesponse from "./components/Sturesponse";
import Deshloader from "./components/Deshloader";
import AdminDeshboard from "./components/AdminDeshboard";
import Adminseecomplain from "./components/Adminseecomplain";
import AdminDeshLoader from "./components/AdminDeshLoader";
import AdminReply from "./components/AdminReply";
import Stuforget from "./components/Stuforget";

import Studeshboard from "./components/Studeshboard"; 
import AdminChangepass from "./components/AdminChangepass";
import AdminProfile from "./components/AdminProfile";
import Pay from "./components/Pay";
import Stupay from "./components/Stupay";



// import { useSelector } from "react-redux";

// import { selectUser } from "./Stuslice";


const App = () => {


  return (


    <>







      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Layout />}>

            {/* <Route index element={<Home />} /> */}
            {/* <Route path="/home" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/service" element={<Service />} />
            <Route path="/contact" element={<Contact />} /> */}
            <Route index element={<Registeration />} />
            <Route path="register" element={<Registeration />} />
            <Route path="/login" element={<Login />} />
            <Route>
            <Route path="deshboard/" element={<Deshloader />}>

                <Route exact path="complain" element={<Stucomplain />} />
                <Route exact path="profile" element={<Studeshboard/>} />
                <Route exact path="response" element={<Sturesponse/>} />


                
                    <Route exact path="custompay" element={<Stupay/>} />
                    <Route exact path="pay/:stu_id" element={<Pay />} />

              
                <Route exact path="/deshboard/forget" element={<Stuforget />} />


              </Route>



            </Route>
            <Route path="/admindeshboard/" element={<AdminDeshLoader />}>
            
              <Route exact path="seecomplain" element={<Adminseecomplain />} />
              <Route exact path="admindeshboard" element={<AdminDeshboard />} />
              <Route exact path="profile" element={<AdminProfile />} /> 
              <Route exact path="adminforget" element={<AdminChangepass />}/>
              <Route path="adminreply/:stu_id" element={<AdminReply />} />
            



            </Route>





















          </Route>

        </Routes>






      </BrowserRouter>

    </>
  )
}
export default App;