import p1 from "../img/logo2.jpg";
import "./css/NavberD.css"
import Home from "../comp/pages/Home"
import { Link } from 'react-router-dom';

const NavberD = () => {
    return(
        <>
        <section className="header">
        <nav className="navb">
            <div className="logo">
            <img className="img" src={p1}/>
            </div>
            <div className="menu">
                <ul className="ul">
                    <li>
                    
                        <a href="/home" >Home</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                    <li>
                        <a href="#">Logout</a>
                    </li>
                    
                </ul>
            </div>
        </nav>
        </section>
       
         
        </>
    );
};

export default NavberD;