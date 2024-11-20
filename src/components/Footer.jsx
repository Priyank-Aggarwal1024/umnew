import '../styles/Footer.css'
import glinkedin from '../assets/glinkedin.svg'
import ginstagram from '../assets/ginstagram.svg'
import gfacebook from '../assets/gfacebook.svg'
import gyoutube from '../assets/gyoutube.svg'
import logo from '../assets/logo.svg'
function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="footer-top">
                    <div className="footer-top-logo-col">
                        <img src={logo} alt="Logo" className="" />
                    </div>
                    <div className="footer-top-col">
                        <p className="footer-link">Course and Curriculum</p>
                        <p className="footer-link">Bridging the gap</p>
                        <p className="footer-link">Clubs</p>
                        <p className="footer-link">Certification</p>
                        <p className="footer-link">Hackathons</p>
                    </div>
                    <div className="footer-top-col">
                        <p className="footer-link">About us</p>
                        <p className="footer-link">Terms of use</p>
                        <p className="footer-link">Privacy Policy</p>
                        <p className="footer-link">Shipping Policy</p>
                        <p className="footer-link">Refund Policy</p>
                    </div>
                    <div className="footer-top-col-last">
                        <div className="footer-top-col-last-top">
                            <p className="footer-link-head">Contact us at</p>
                            <p className="footer-link">+91 74043 18177</p>
                            <p className="footer-link">support@upskillmafia.com</p>
                        </div>
                        <div className="footer-col-last-icons">
                            <img src={glinkedin} alt="Linkedin" />
                            <img src={ginstagram} alt="Instagram" />
                            <img src={gfacebook} alt="FaceBook" />
                            <img src={gyoutube} alt="Youtube" />
                        </div>
                    </div>
                </div>
                <div className="footer-line"></div>
                <div className="footer-bottom">
                    <img src={logo} alt="Logo" className="footer-bottom-logo" />
                    <p className="footer-link">Copyright © 2024 upskillmafia. All rights reserved</p>
                </div>
            </footer>
        </>
    );
}

export default Footer;