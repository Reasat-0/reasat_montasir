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
        <section 
            className="about-me-section" 
            id="about">
            <Container>
                <Row>
                    <Col md={12}>
                        <h4 
                            className="section-sub-heading mt-2 text-center"
                            data-aos="fade-up"
                            data-aos-duration="3000"
                            data-aos-once="true"
                            > Welcome </h4>
                        <h1 
                            className="section-heading text-center mb-2"
                            data-aos="fade-up"
                            data-aos-duration="3000"
                            data-aos-once="true"
                        > About Me </h1>
                    </Col>
                    <Col 
                        md={6} 
                        className="about-left-col"
                        data-aos="fade-up"
                        data-aos-duration="3000"
                        data-aos-once="true"
                        >
                        <div className="about-img-holder">
                            <img src={aboutMeImg} alt="aboutMe"/>
                        </div>
                    </Col>
                    <Col md={6} 
                         className="about-right-col"
                         data-aos="fade-up"
                         data-aos-duration="3000"
                         data-aos-once="true"    
                        >
                        <p 
                            className="about-info-text"
                        >
                            Hi there!!! It's me, Reasat. I Am A Frontend Developer and Web UI UX designer with 3+ years of experience. I have always been someone who loves to make creative things with pen and papers as well as getting hands dirty on keyboard or mouse to make them dirty may be with colors or shapes. I provide services like determining the structure/wirefreames, prototypes and design of web pages, building reusable codes, optimizing page loading times, browser compatibility with device responsiveness.
                        </p>
                        <Row className="about-icon-row">
                            <Col md={12}>
                                <h5 className="design-principle-subtitle"> The principles I usually follow during the designing phase of a web site or web page : </h5>
                            </Col>
                            <Col 
                                md={4} 
                                className="followed-principles-col"
                                >
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