
// import TextField from '@mui/material/TextField';
import {Row, Col, Form, Button, Container} from 'reactstrap'



import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';


import contactImage from '../../assets/img/contact.png'


const Contact = () => {
    return (
        <section className="contact-section">
            <div className="contact-container">
                <Row>
                    <Col md={6} className="contact-left-sec">
                        <img src={contactImage} alt="contact"/>
                    </Col>

                    <Col md={6} className="contact-right-sec">
                        <Form>

                            <Row>
                                <Col md={12}>
                                    <h3 className="contact-me-heading"> Send me a message... </h3>
                                </Col>
                                <Col md={12}>
                                
                                    <FormControl fullWidth>
                                        {/* <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel> */}
                                        <OutlinedInput
                                            id="outlined-adornment-amount"
                                            value={null}
                                            onChange={null}
                                            className="custom-contact-textfield"
                                            startAdornment={
                                            <InputAdornment position="start" className="icon-container">
                                                <PersonIcon />
                                            </InputAdornment>}
                                            label="Amount"
                                            placeholder='Enter Name'
                                        />
                                    </FormControl>
                                </Col>

                                <Col md={12}>
                                
                                    <FormControl fullWidth>
                                        {/* <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel> */}
                                        <OutlinedInput
                                            id="outlined-adornment-amount"
                                            value={null}
                                            onChange={null}
                                            className="custom-contact-textfield"
                                            startAdornment={
                                            <InputAdornment position="start" className="icon-container">
                                                <EmailIcon />
                                            </InputAdornment>}
                                            placeholder='Enter Email'
                                        />
                                    </FormControl>
                                </Col>

                                
                                <Col md={12}>
                                    <TextField 
                                        id="email" 
                                        placeholder='Write your message here'
                                        variant="outlined"
                                        className="custom-contact-textfield multilined"
                                        multiline
                                        rows={4} 
                                        fullWidth
                                    />
                                </Col>

                                <Col md={12}>
                                    <Button className='btn btn-success btn-lg contact-send-btn'>
                                        Send
                                    </Button>
                                </Col>
                                
                            </Row>

                            

                        </Form>
                    </Col>

                </Row>
            </div>
        </section>
    )
}


export default Contact;