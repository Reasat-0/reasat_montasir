
// import TextField from '@mui/material/TextField';
import {Row, Col, Form, Button, Container} from 'reactstrap'



import { useRef, useState } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
// import emailjs from '@emailjs/browser';
import sendingLoader from '../../assets/img/loader/loader3.gif'
import contactImage from '../../assets/img/contact.png'
import ContactForm from './ContactForm';

import emailJs from 'emailjs-com'
// import { useToasts } from 'react-toast-notifications';

const Contact = () => {

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
                    console.log("Mail Send Successfully")
                    setFormFields( (prev) => ({
                        ...prev,
                        name: "",
                        email: "",
                        message : ""
                    }))
                    setLoading(false);
                }
                console.log(result);
            }, (error) => {
                console.log("Something is wrong");
            });
            
        }
        else{
            // alert("Plese fill up all the fields...")

            // setNotiMsg((prev) => ({
            //     ...prev,
            //     content : 'Please fill up all the fields',
            //     status : 'error'
            // }))

            // showNoti(notiMsg)

           

            // addToast(content, {
            //     appearance: 'error',
            //     autoDismiss: true,
            // })
        }
        
    };
    return (
        <section className="contact-section">
            <div className="contact-container">
                
                <Row>
                    <Col md={6} className="contact-left-sec">
                        <img src={contactImage} alt="contact"/>
                    </Col>

                    <Col md={6} className="contact-right-sec">
                        <ContactForm />
                        
                    </Col>

                </Row>
            </div>
        </section>
    )
}


export default Contact;