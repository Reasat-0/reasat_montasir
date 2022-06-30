
import { Row, Col } from 'reactstrap';
import { Link } from "react-router-dom";
// import {link} from 'react-router-dom'
const Footer = () => {
    return (
        <footer className="footer">
            <Row>

                <Col md={3} className="footer-cols">
                    <h4> Services </h4>
                    <ul className='footer-nav'>
                        <li className='footer-nav-item'> 
                            <i className="fas fa-angle-double-right mr-2"></i> 
                            Front End Developement 
                        </li>
                        <li className='footer-nav-item'> 
                            <i className="fas fa-angle-double-right mr-2"></i> 
                            Web UI/UX Design
                        </li>
                        <li className='footer-nav-item'> 
                            <i className="fas fa-angle-double-right mr-2"></i> 
                            Device Responsiveness 
                        </li>
                        <li className='footer-nav-item'> 
                            <i className="fas fa-angle-double-right mr-2"></i> 
                            Cross Browser Compatibility 
                        </li>
                    </ul>
                </Col>
                <Col md={3} className="footer-cols">
                    <h4> Useful Links </h4>
                    <ul className='footer-nav'>
                        <li className='footer-nav-item'> 
                            <i className="fas fa-angle-double-right mr-2"></i> 
                            {/* <Link to={{ pathname: 'facebook.com'}}>Home</Link>  */}
                            Home
                        </li>
                        <li className='footer-nav-item'> 
                            <i className="fas fa-angle-double-right mr-2"></i> 
                            {/* <Link to="/invoices">About</Link>  */}
                            About
                        </li>
                        <li className='footer-nav-item'> 
                            <i className="fas fa-angle-double-right mr-2"></i> 
                            Contact 
                        </li>
                        <li className='footer-nav-item'> 
                            <i className="fas fa-angle-double-right mr-2"></i> 
                            Skills 
                        </li>
                    </ul>
                </Col>
                <Col md={3} className="footer-cols">
                    <h4> Contact Details </h4>
                    <ul className='footer-nav'>
                        <li className='footer-nav-item'> 
                            <i className="fas fa-map-marker-alt"></i>
                            Ambia Bhaban, House-203, Moulovi Purkur Paar, Chandgaon, Chattogram
                        </li>
                        <li className='footer-nav-item'> 
                            <i className="fas fa-phone-alt"></i>
                            +880-1521484206 
                        </li>
                        <li className='footer-nav-item'> 
                            <i className="fas fa-envelope-open"></i>
                            reasat.g8@gmail.com
                        </li>
                    </ul>
                </Col>
                <Col md={3} className="footer-cols social-col">
                    <h4> Follow Me Here </h4>
                    <ul className='footer-nav'>
                        <li className='footer-nav-item'> 
                            <i className="fas fa-angle-double-right mr-2"></i> 
                        </li>
                        <li className='footer-nav-item'> 
                            <i className="fas fa-angle-double-right mr-2"></i> 
                        </li>
                        <li className='footer-nav-item'> 
                            <i className="fas fa-angle-double-right mr-2"></i> 
                        </li>
                        <li className='footer-nav-item'> 
                            <i className="fas fa-angle-double-right mr-2"></i> 
                        </li>
                        <li className='footer-nav-item'> 
                            <i className="fas fa-angle-double-right mr-2"></i> 
                        </li>
                    </ul>
                </Col>
            </Row>
        </footer>
    )
}

export default Footer;