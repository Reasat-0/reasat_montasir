
import {Row, Col, Button, Container} from 'reactstrap'
import headerBannerImg from '../../assets/img/apatoto.png'

import {useState, useEffect} from 'react'
import TypeAnimation from 'react-type-animation';


import Typed from 'react-typed';

import bgImage from '../../assets/img/bg.png'

const HeaderBanner = () => {
        // const designations = 
        //     [
        //     'Frontend Developer',
        //     1000,
        //     'React Developer',
        //     1000,
        //     'Web UI/UX Designer',
        //     1000,
        //     'Wireframe/Prototype maker',
        //     1000
        // ]
            const type_texts = 
            [
              'Frontend Developer',
              'React Developer',
              'Web UI/UX Designer',
              'Wireframe/Prototype maker'
            ]
    return(
        <section className="header-banner-section" id="home" style={{backgroundImage : `url(${ bgImage })` }}>
            {/* <div className='header-banner-overlay'></div> */}
            <Container>
                <Row>
                    <Col 
                        md={6} 
                        className='header-banner-left-col'
                        data-aos="fade-right"
                        data-aos-duration="3000"
                        >
                        <p 
                        
                            className='header-banner-greeting'
                            data-aos="fade-right"
                            data-aos-duration="3000"
                        > Hi, There !!!  </p>
                        <h1 
                        
                            className='header-banner-intro'
                            data-aos="fade-down"
                            data-aos-duration="3000"
                            
                            > This is  <span> Md Reasat Montasir Chowdhury </span></h1>
                        {/* <h4 
                        data-aos="fade-right"
                        data-aos-duration="3000"
                        className='header-banner-designation'> {typingContents.text} </h4> */}
                        {/* <span className='asdfd'>A</span> */}
                        {/* <TypeAnimation
                            cursor={true}
                            sequence={designations}
                            wrapper="h4"
                            repeat={Infinity}
                            data-aos="fade-right"
                            data-aos-duration="3000"
                            className='header-banner-designation'
                            /> */}

                <Typed
                    strings={type_texts}
                        typeSpeed={40}
                        backSpeed={50}
                        data-aos="fade-right"
                        data-aos-duration="3000"
                        className='header-banner-designation'
                        loop >
                        
                </Typed>

                        <Button 
                        data-aos="fade-up"
                        data-aos-duration="3000"
                        className='header-banner-btn'>
                            More About Me
                        </Button>
                    </Col>
                    {/* <Col md={6} className='header-banner-right-col'>
                        <div className='header-banner-img'>
                            <img 
                                data-aos="fade-left"
                                data-aos-duration="3000"
                                data-aos-offset="500"
                                src={headerBannerImg} 
                                alt="header-image"/>
                        </div>
                    </Col> */}
                </Row>
            </Container>
        </section>
    )
}
// #a2bdff
export default HeaderBanner;