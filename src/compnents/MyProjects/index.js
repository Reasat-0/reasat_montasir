import { Container, Row, Col } from "reactstrap";
import project1 from '../../assets/img/projects/ss.png'

const MyProjects = () => {
    return (
        <section className="my-projects-section">
            <Container>
                <Row>
                    <Col md={12} className="mb-5">
                        <h1 className="section-heading text-center mb-2"> Projects </h1>
                        <h4 className="section-sub-heading mt-2 text-center"> Here is a glimpse of something I've already built </h4>
                    </Col>
                    <div className="my-project-left-section">
                        <div className="projects-img-container">
                            <div className="projects-img-content">
                                <h3 className="project-img-title"> Instant DST </h3>
                                <p className="project-img-tag-line"> A instant DST conversion app of your any selected artwork. </p>
                                <img src={project1} className="project-img" alt="snap"/>

                            </div>
                        </div>
                    </div>
                    <div className="my-project-right-section">
                        <div className="my-project-right-section-content">
                            <p className="featured-project"> Featured Project </p>
                            <h3 className="project-title"> Instant DST </h3>
                            <p className="project-description"> 
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                            <ul className="project-tech-used">
                                <li> HTML </li>
                                <li> CSS </li>
                                <li> Javascript </li>
                                <li> Wordpress </li>
                            </ul>
                        </div>
                    </div>
                </Row>
            </Container>
        </section>
    )
}

export default MyProjects;