
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
// import emailjs from '@emailjs/browser';
import sendingLoader from '../../assets/img/loader/loader3.gif'
import contactImage from '../../assets/img/contact.png'
import {Row, Col, Form, Button, Container} from 'reactstrap'
import { useRef, useState } from 'react';

import emailJs from 'emailjs-com'

import { ToastContainer, toast } from 'react-toastify';
const ContactForm = () => {

    const [formFields,setFormFields] = useState({
        name: '',
        email : '',
        message: ''
    })
    const [loading,setLoading] = useState(false);

    const [notiMsg, setNotiMsg] = useState({
        content : '',
        status : '',
        dismiss : true
    })


    const showNoti = (notiObj) => {
        const {content,status, dismiss} = notiObj;

        // return addToast(content, {
        //     appearance: status,
        //     autoDismiss: dismiss,
        // })
    }

    const notify = (message, type) => {
        switch (type.toLowerCase()){
            case "error":
                toast.error(message, {
                    position: toast.POSITION.TOP_RIGHT
                });
                break;
            case "success":
                toast.success(message, {
                    position: toast.POSITION.TOP_RIGHT
                });
            break;

        }
        
    }
    
    const {name,email,message} = formFields;
    const form = useRef()
    const handleChange = (e) => {
        let {name,value} = e.target;

        setFormFields( (prev) => ({
            ...prev,
            [name] : value
        }) )
    }

    const sendEmail = (e) => {
        e.preventDefault();

        
        // emailJs.sendForm('service_s8obf0w', 'template_6snav0d', e.target, 'rGPUnta1Oj8tU5Q0e')
        if(name && email && message){
            setLoading(!loading)

            emailJs.sendForm('service_s8obf0w', 'template_6snav0d', e.target, 'rGPUnta1Oj8tU5Q0e')
            .then((result) => {
                if(result.status === 200){
                    
                    notify('Your mail has been sent successfully', "Success");
                    setFormFields( (prev) => ({
                        ...prev,
                        name: "",
                        email: "",
                        message : ""
                    }))
                    setLoading(false);
                }
                
            }, (error) => {
                notify('Something went wrong. Please Try Again', "Error");
            });
            
        }
        else{
            notify('Please check and fill up all the required fields', "Error");
        }
        
    };

    return (
                            <Form ref={form} onSubmit={sendEmail} className="contact-form">
                                <ToastContainer autoClose={5000} theme="colored"/>
                                {
                                    loading && 

                                    <div className='sending-loader'>
                                        <img src={sendingLoader} alt="gif"/>
                                    </div>

                                }
                                <Row>
                                    <Col md={12}>
                                        <h3 className="contact-me-heading"> Send me a message... </h3>
                                    </Col>
                                    <Col md={12}>
                                    
                                        <FormControl fullWidth>
                                            {/* <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel> */}
                                            <OutlinedInput
                                                id="name-field"
                                                value={name}
                                                name='name'
                                                onChange={handleChange}
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
                                                id="email-field"
                                                type="email"
                                                onChange={handleChange}
                                                value={email}
                                                name='email'
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
                                            onChange={handleChange}
                                            value={message}
                                            name='message'
                                            placeholder='Write your message here'
                                            variant="outlined"
                                            className="custom-contact-textfield multilined"
                                            multiline
                                            rows={4} 
                                            fullWidth
                                        />
                                    </Col>

                                    {/* <label>Name</label>
                                    <input type="text" name="user_name" /> */}

                                    <Col md={12}>

                                        {/* <input type={"submit"} value="SUBMIT"/> */}
                                        <Button type="submit" className='btn btn-success btn-lg contact-send-btn'>
                                            Send
                                        </Button>
                                    </Col>
                                    
                                </Row>

                                

                            </Form>
    )
}

export default ContactForm;