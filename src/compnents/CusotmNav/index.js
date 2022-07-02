import { useEffect, useState } from "react"
import { Collapse, Nav, Navbar, NavbarBrand, NavItem, NavLink, NavbarToggler } from "reactstrap"
import RLogo from '../../assets/img/reasat_logo.png'
import SmoothScrolling from "../../utils/smooth_scroll"
const CustomNav = () => {

    const [navbar_color,setNavbarColor] = useState('transparent')
    const [active_nav,setActiveNav] = useState(null)
    const [navbarToggleOpen,setNavbarToggleOpen] = useState(false)

    useEffect( () => {
        window.addEventListener("scroll", changeNavbarColor)
    })

    const toggle = () => {
        setNavbarToggleOpen((prev) => !prev)
    }


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
                className={`fixed-top custom-navbar ${navbar_color} ${navbarToggleOpen ? 'toggle-opened' : ""}`}
                onClick={changeNavbarColor}
                // color="light" 
                light 
                expand="md"
            >
                {/* <div className="custom-nav-container"> */}
                    <NavbarBrand>
                        <div className="logo-section">
                            <img src={RLogo} alt="logo"/>
                        </div>

                    </NavbarBrand>

                    <NavbarToggler onClick={toggle} className="custom-nav-toggler"/>
                    <Collapse isOpen={navbarToggleOpen} navbar className="custom-nav-collapse">
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

                        {/* <NavbarToggler onClick={'this.toggle'}>
                            <span className="navbar-toggler-bar bar1"></span>
                            <span className="navbar-toggler-bar bar2"></span>
                            <span className="navbar-toggler-bar bar3"></span>
                        </NavbarToggler> */}
                {/* </div> */}
            </Navbar>

            
        </>
    )
}


export default CustomNav