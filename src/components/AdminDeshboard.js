
import { useDispatch, useSelector } from "react-redux";
import { logoutadmin } from "../AdminSlice";
import { Link,Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import admin from "./Assets/admin.jpg"
import { FaBriefcase, FaChartBar, FaCog, FaPassport, FaSearch,  FaSignOutAlt, FaTachometerAlt, FaUser, FaUserAlt } from "react-icons/fa";


const AdminDeshboard = () => {
    const mynav=useNavigate();
    const myselector=useSelector((state)=>state.admin.adminname);
    const myDispatch=useDispatch();
    const handlelogout=(e)=>
    {
        e.preventDefault();
        myDispatch(logoutadmin());
        mynav('/')

    }
    
   
  return (
    <>
      <section className="StudentDesh">
    
        <div className="sidenav">
      
          <div className="logo">
            <ul className="main">
            
              <li className="active">
                <Link to={"/admindeshboard"}>
                  <FaTachometerAlt className="font-icon" />
                  <span>Deshboard</span>
                </Link>
              </li>
              <li>
                <Link to={"profile"}>
                  <FaUser className="font-icon" />
                  <span>Profile</span>
                </Link>
              </li>
              <li>
                <Link to={'seecomplain'}>
                  <FaChartBar className="font-icon" />
                 <span>Loan Request</span>
                </Link>
              </li>
              <li>
                <Link to={"adminforget"}>
                  <FaPassport className="font-icon" />
                  <span>Change Password</span>
                </Link>
              </li>
             
              <li>
                <a href="#">
                  <FaCog className="font-icon" />
                  <span>Settings</span>
                </a>
              </li>
              <li className="logout">
              <Link>
              <FaSignOutAlt className="font-icon" />
                 <span  onClick={(e) => {handlelogout(e) }}>Logout</span>
              </Link>
               
               
              </li>
            </ul>
          </div>
      

        </div>
        <div className="main-content">
          <div className="header-wrapper">
            <div className="header-title">
               <h1>Welcome <span>{myselector}</span></h1>
               <h2>Admin Deshboard</h2>
            </div>
            <div className="user-info">
              <div className="search-box">
                  <FaSearch className="font-icon" />
                  <input type="text" placeholder="Search" />
                 
              </div>
              <div className="icon-part">
                   <img src={admin} style={{width:"50px",height:"50px", borderRadius:"100px", backgroundPosition:"center"}}/>

               
              </div>


            </div>

               
                
          

          </div>
        </div>
        <div>
        <Outlet/>
        </div>
   
   
    
  
      </section>




    </>


  );
}
export default AdminDeshboard;