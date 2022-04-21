import { Container, Row, Col, Button } from "reactstrap";
import aboutMeImg from '../../assets/img/about.jpg'
import uxIcon from '../../assets/img/about/ux.png';
import uxIdea from '../../assets/img/about/idea.png';
import focus from '../../assets/img/about/focus.png';
import fast from '../../assets/img/about/fast.png';
import hierarchy from '../../assets/img/about/hierarchy.png';
import responsive from '../../assets/img/about/responsive.png';
import comfortable from '../../assets/img/about/comfortable.png';
import simplicity from '../../assets/img/about/simplicity.png';
const AboutMe = () => {
    return(
        <section className="about-me-section">
            <Container>
                <Row>
                    <Col md={12}>
                        <h4 className="section-sub-heading mt-2 text-center"> Welcome </h4>
                        <h1 className="section-heading text-center mb-2"> About Me </h1>
                    </Col>
                    <Col md={6} className="about-left-col">
                        <div className="about-img-holder">
                            <img src={aboutMeImg} alt="aboutMe"/>
                        </div>
                    </Col>
                    <Col md={6} className="about-right-col">
                        <p className="about-info-text">
                            Hi My Name Is Reasat. I Am A Web Developer."Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        </p>
                        <Row className="about-icon-row">
                            <Col md={4} className="followed-principles-col">
                                <div className="icon-wrapper">
                                    <img src={focus} alt="web-design-icon" />
                                </div>
                                <p className="icon-text"> Purpose Focused </p>
                            </Col>
                            <Col md={4} className="followed-principles-col">
                                <div className="icon-wrapper">
                                    <img src={simplicity} alt="web-design-icon" />
                                </div>
                                <p className="icon-text"> Simplicity </p>
                            </Col>
                            <Col md={4} className="followed-principles-col">
                                <div className="icon-wrapper">
                                    <img src={comfortable} alt="web-design-icon" />
                                </div>
                                <p className="icon-text"> Comfortable UI/UX </p>
                            </Col>
                            <Col md={4} className="followed-principles-col">
                                <div className="icon-wrapper">
                                    <img src={hierarchy} alt="web-design-icon" />
                                </div>
                                <p className="icon-text"> Visual Hierarchy </p>
                            </Col>
                            <Col md={4} className="followed-principles-col">
                                <div className="icon-wrapper">
                                    <img src={fast} alt="web-design-icon" />
                                </div>
                                <p className="icon-text"> Fast Loading Time </p>
                            </Col>
                            <Col md={4} className="followed-principles-col">
                                <div className="icon-wrapper">
                                    <img src={responsive} alt="web-design-icon" />
                                </div>
                                <p className="icon-text"> Responsive Design </p>
                            </Col>
                        </Row>
                        <div className="about-btn-holder">
                            <Button className="mr-4">
                                Download Resume 
                            </Button>
                            <Button className="ml-4"> Contact Me </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default AboutMe;