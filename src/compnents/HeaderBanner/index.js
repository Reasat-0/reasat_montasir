
import {Row, Col, Button, Container} from 'reactstrap'
import headerBannerImg from '../../assets/img/apatoto.png'
const HeaderBanner = () => {
    return(
        <section className="header-banner-section">
            <div className='header-banner-overlay'></div>
            <Container>
                <Row>
                    <Col md={6} className='header-banner-left-col'>
                        <p className='header-banner-greeting'> Hello ... </p>
                        <h1 className='header-banner-intro'> This is  <span> Md Reasat Montasir Chowdhury </span></h1>
                        <h4 className='header-banner-designation'> Web Designer</h4>

                        <Button className='header-banner-btn'>
                            More About Me
                        </Button>
                    </Col>
                    <Col md={6} className='header-banner-right-col'>
                        <div className='header-banner-img'>
                            <img className='' src={headerBannerImg} alt="header-image"/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
// #a2bdff
export default HeaderBanner;