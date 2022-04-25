import { Container, Row, Col } from "reactstrap";
import MyProjectCard from './MyProjectCard'
import project1 from '../../assets/img/projects/ss.png'


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
    }
]

const MyProjects = () => {
    return (
        <section className="my-projects-section" id="my_projects">
            <Container>
                <Row>
                    <Col md={12} className="mb-5">
                        <h1 className="section-heading text-center mb-2"> Projects </h1>
                        <h4 className="section-sub-heading mt-2 text-center"> Here is a glimpse of something I've already built </h4>
                    </Col>
                    {
                        myProjects.map( (item,i) => 

                                <MyProjectCard project={item} key={i} id={i}/>

                            
                        )
                    }
                </Row>
            </Container>
        </section>
    )
}

export default MyProjects;