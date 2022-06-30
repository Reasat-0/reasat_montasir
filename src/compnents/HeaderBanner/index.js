
import {Row, Col, Button, Container} from 'reactstrap'
import headerBannerImg from '../../assets/img/apatoto.png'

import {useState, useEffect} from 'react'


const HeaderBanner = () => {

    const [typingContents, setTypingContents] = useState({
        text: '',
        isDeleting: false,
        loopNum: 0,
        typingSpeed: 150
    })

    const [letter_iteration, setLetterIteration] = useState(0)
    const [text, setText] = useState('')

    const typingTexts = [
        'Frontend Developer',
        'React Developer',
        'Web UI/UX Designer',
        'Wireframe Maker'
    ]
    
    useEffect(()=>{
        handleType();
    },[])

    useEffect(()=>{
        console.log(text)
    },[letter_iteration, text])
    
    const  handleType = () => {
        const { isDeleting, loopNum, text, typingSpeed } = typingContents;
        // const i = loopNum % typingTexts.length;
        // const fullText = typingTexts[i];

        // setTypingContents((prev) => {
        //     ...prev,
        //     letter_iteration : prev.letter_iteration + 1
        // })

        setLetterIteration( (c) => c + 1 )

        

        
        setText('He6 df dd d dfasfd'.substring(0, letter_iteration))



        // setTypingContents({
        //     text : isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0 , text.length + 1 ),
        //     typingSpeed : isDeleting ? 50 : 150
        // })
        
    
        // if (!isDeleting && text === fullText) {     
        //   setTimeout(() => this.setState({ isDeleting: true }), 500);   
        // } else if (isDeleting && text === '') {
        //   this.setState({
        //     isDeleting: false,
        //     loopNum: loopNum + 1
        //   });      
        // }
    
        setTimeout(handleType, 1500);

        // console.log(typingContents)
      };
      
    return(
        <section className="header-banner-section" id="home">
            <div className='header-banner-overlay'></div>
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
                        <h4 
                        data-aos="fade-right"
                        data-aos-duration="3000"
                        className='header-banner-designation'> {typingContents.text} </h4>

                        <Button 
                        data-aos="fade-up"
                        data-aos-duration="3000"
                        className='header-banner-btn'>
                            More About Me
                        </Button>
                    </Col>
                    <Col md={6} className='header-banner-right-col'>
                        <div className='header-banner-img'>
                            <img 
                                data-aos="fade-left"
                                data-aos-duration="3000"
                                data-aos-offset="500"
                                src={headerBannerImg} 
                                alt="header-image"/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
// #a2bdff
export default HeaderBanner;