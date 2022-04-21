import { Collapse, Container, Nav, Navbar, NavbarBrand, NavItem, NavLink } from "reactstrap"
import RLogo from '../../assets/img/reasat_logo.png'

const CustomNav = () => {
    return (
        <>
            <Navbar
                expand="md"
                className="custom-nav-main">
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
                            <NavItem>
                                <NavLink href="/">
                                    Home
                                </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink href="/">
                                    About
                                </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink href="/">
                                    Contact
                                </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink href="/">
                                    More
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