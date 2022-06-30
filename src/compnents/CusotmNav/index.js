import { useEffect, useState } from "react"
import { Collapse, Container, Nav, Navbar, NavbarBrand, NavItem, NavLink } from "reactstrap"
import RLogo from '../../assets/img/reasat_logo.png'
import SmoothScrolling from "../../utils/smooth_scroll"
const CustomNav = () => {

    const [navbar_color,setNavbarColor] = useState('transparent')
    const [active_nav,setActiveNav] = useState(null)

    useEffect( () => {
        window.addEventListener("scroll", changeNavbarColor)
    })



    const changeNavbarColor = () => {
        if( document.documentElement.scrollTop > 10 || document.body.scrollTop > 10) {
            setNavbarColor('colored')
        }
        else{
            setNavbarColor('transparent')
        }
    }

    const onNavClick = (active_nav) => {
        setActiveNav(active_nav)
        scrollUp(active_nav)
    }

    const scrollUp = (id) => {
        SmoothScrolling.scrollTo(id);
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    return (
        <>
            <Navbar
                expand="md"
                className={`fixed-top custom-nav-main ${navbar_color}`}
                onClick={changeNavbarColor}
            >
                <Container className="custom-nav-container">
                    <NavbarBrand>
                        <div className="logo-section">
                            <img src={RLogo} alt="logo"/>
                        </div>

                    </NavbarBrand>

                    <Collapse navbar className="custom-nav-collapse">
                        <Nav
                            navbar
                            className="custom-nav-item-container"
                        >
                            <NavItem className={ active_nav === null ? 'active' : ""}>
                                <NavLink href="/" >
                                    Home
                                </NavLink>
                            </NavItem>

                            <NavItem className={ active_nav === 'about' ? 'active' : ""}>
                                <NavLink onClick={ () => { onNavClick('about') } }>
                                    About
                                </NavLink>
                            </NavItem>

                            <NavItem className={ active_nav === 'contact' ? 'active' : ""}>
                                <NavLink onClick={ () => { onNavClick('contact') } }>
                                    Contact
                                </NavLink>
                            </NavItem>

                            <NavItem className={ active_nav === 'my_projects' ? 'active' : ""}>
                                <NavLink onClick={ () => { onNavClick('my_projects') } }>
                                    My Works
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>

            
        </>
    )
}


export default CustomNav