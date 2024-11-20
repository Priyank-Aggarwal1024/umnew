import '../styles/Navbar.css'
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <>
            <div className="navbar">
                <div className="inner-navbar">
                    <img src={logo} className="nav-logo" alt="Logo Upskill Mafia" />
                    <Link to={"/checkout"} className="btn green-btn">Get Started</Link>
                </div>
            </div>
        </>
    );
}

export default Navbar;