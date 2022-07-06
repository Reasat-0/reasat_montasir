import { Container, Row, Col } from "reactstrap";
import MyProjectCard from './MyProjectCard'
import project1 from '../../assets/img/projects/systrm.png'
import project2 from '../../assets/img/projects/namaste.png'
import project3 from '../../assets/img/projects/idst.png'
import project4 from '../../assets/img/projects/portfolio.png'

import Slider from 'react-slick'

const myProjects = [
    {
        id: 0,
        name: 'Systrm',
        featured: true,
        image: project1,
        git: '',
        url: 'https://systrm.ca',
        subname: 'Systrm CA',
        tagline: 'Branding site for a Civil Construction Firm',
        description: "A multipage web application for a civil construction firm with active contact form built using Contact Form plugin of wordpress. The site is fully device responsive with a career page which includes the resume upload functionality and more...",
        technology: ['Bootstrap', 'Wordpress', 'Jquery', 'Elementor']
    },
    {
        id: 1,
        name: 'Namaste Ventures',
        tagline: 'Business oriented site with active contact form using Rest API',
        featured: true,
        image: project2,
        git: null,
        url: 'https://namasteventuresllc.com',
        subname: 'Namaste Ventures LLC',
        description: "A single page branding application using React. Used Rest API and its integration for contact page functionality. Used Reactstrap and Materail-UI packages for more integrity of the site and for the flexibility with any device",
        technology: ['React', 'ReactStrap', 'Material-UI', 'Rest API']
    },
    {
        id: 2,
        name: 'Instant DST',
        tagline: 'DST file conversion and generation site with package plan and so on',
        featured: true,
        image: project3,
        git: null,
        url: 'https://instantdst.com',
        subname: 'Instant DST Generator',
        description: "DST conversion app from any uploaded artwork. Used Rest API's to make different functionalities such as - package fetching, plan purchasing, merging images, draft mode, dst conversions and so many. Fully device responsive with browser compatibility",
        technology: ['React', 'ReactStrap', 'Material-UI', 'Rest API']
    },
    {
        id: 3,
        name: 'Portfolio',
        tagline: 'Personal portfolio based on my hands on experience and works',
        featured: true,
        image: project4,
        git: '',
        url: 'https://reasat-montasir.netlify.app',
        subname: 'Personal Portfolio',
        description: "A single page personal portfolio website to showcase my expertise and my works with hands on experience. Used a react package EmailJS to make the mailing functionality active from the contact section.",
        technology: ['React', 'ReactStrap', 'Material-UI', 'EmailJS']
    },
]

const MyProjects = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <section className="my-projects-section" id="my_projects">
            <Container>
                <Row>
                    <Col md={12} className="mb-5">
                        <h1 
                            className="section-heading text-center mb-2"
                            data-aos="fade-up"
                            data-aos-duration="3000"
                            data-aos-once="true" 
                        > Projects </h1>
                        <h4 className="section-sub-heading mt-2 text-center"
                            data-aos="fade-up"
                            data-aos-duration="3000"
                            data-aos-once="true" 
                        > Here is a glimpse of something I've already built </h4>
                    </Col>

                    <Slider className="project-slick-slider" {...settings}>
                        {
                            myProjects.map( (item,i) => 
                                
                                    <MyProjectCard project={item} key={i} id={i}/>

                                
                            )
                        }
                    </Slider>


                    
                </Row>
            </Container>
        </section>
    )
}

export default MyProjects;