import { Container, Row, Col } from "reactstrap";
import MyProjectCard from './MyProjectCard'
import project1 from '../../assets/img/projects/ss.png'

import Slider from 'react-slick'

const myProjects = [
    {
        id: 0,
        name: 'Systrm',
        featured: true,
        image: project1,
        url: 'https://systrm.ca',
        subname: 'Systrm CA',
        tagline: 'Branding site for a Civil Construction Firm',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        technology: ['Bootstrap', 'Wordpress', 'Jquery', 'Elementor']
    },
    {
        id: 1,
        name: 'Namaste Ventures',
        tagline: 'Business oriented site with active contact form using Rest API',
        featured: true,
        image: project1,
        url: 'https://namasteventuresllc.com',
        subname: 'Namaste Ventures LLC',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        technology: ['React', 'ReactStrap', 'Material-UI', 'Rest API']
    },
    {
        id: 2,
        name: 'Instant DST',
        tagline: 'Business oriented site with active contact form using Rest API',
        featured: true,
        image: project1,
        url: 'https://instantdst.com',
        subname: 'Namaste Ventures LLC',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        technology: ['React', 'ReactStrap', 'Material-UI', 'Rest API']
    },
    {
        id: 3,
        name: 'Bla BLa',
        tagline: 'Business oriented site with active contact form using Rest API',
        featured: true,
        image: project1,
        url: 'https://instantdst.com',
        subname: 'Namaste Ventures LLC',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        technology: ['React', 'ReactStrap', 'Material-UI', 'Rest API']
    }
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