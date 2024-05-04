
import { useSelector, useDispatch } from "react-redux";

import { logout } from "../Stuslice";
import { Link, Outlet, useNavigate } from "react-router-dom";

import { FaBriefcase, FaChartBar, FaCog, FaPassport, FaSearch, FaSign, FaSignOutAlt, FaTachometerAlt, FaUser, FaUserAlt } from "react-icons/fa";
import { FaEmpire } from "react-icons/fa6";





const Deshboard = () => {

 

  
  
  
  

  




    const myUse = useSelector((state) => state.stuUser.user);
  const myDispatch = useDispatch();
  const myNav=useNavigate();
  const handlelogout = (e) => {
    e.preventDefault();
    myDispatch(logout());
    myNav('/')
    
  };
  return (
    <>
      <section className="StudentDesh">
    
        <div className="sidenav">
      
          <div className="logo">
            <ul className="main">
            
              <li className="active">
                <Link to={"/deshboard"}>
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
                <Link to={"complain"}>
                  <FaChartBar className="font-icon" />
                 <span>Request Loan</span>
                </Link>
              </li>
              <li>
                <Link to={"forget"}>
                  <FaPassport className="font-icon" />
                  <span>Change Password</span>
                </Link>
              </li>

              
              <li>

                <Link to={"response"}>
                  <FaBriefcase className="font-icon" />
                  <span>Status</span>
                </Link>
              </li>
              <li>
                <Link to={"custompay"}>
                  <FaEmpire className="font-icon" />
                  <span>Pay EMI</span>
                </Link>
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
               <h1>Welcome <span>{myUse}</span></h1>
               <h2>Deshboard</h2>
            </div>
            <div className="user-info">
              <div className="search-box">
                  <FaSearch className="font-icon" />
                  <input type="text" placeholder="Search" />
                 
              </div>
              <div className="icon-part">
                   <FaUserAlt className="icon"></FaUserAlt>

               
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
export default Deshboard;