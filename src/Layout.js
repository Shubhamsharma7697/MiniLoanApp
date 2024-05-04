import { Link, Outlet } from "react-router-dom"
import cms from './components/Assets/cms-img.jpg';
const Layout = () => {

    return (
        <>
            <section id="header">
                <div className="navigation">
                    <div className="navbar">
                        <div className="left">
                            <img src={cms} alt=""/>
                            
                        </div>
                        <div className="right">
                            <ul>

                                Mini <span style={{color:"yellow"}}> Loan </span> App

                            </ul>

                        </div>
                        <div className="login">
                            <Link to={'register'}><button>Sign-Up</button></Link>
                            <Link to={'login'}><button>Login</button></Link>

                        </div>
                    </div>

                </div>
                <Outlet />
              
            </section>
          
          
     




        </>
    )
}
export default Layout;