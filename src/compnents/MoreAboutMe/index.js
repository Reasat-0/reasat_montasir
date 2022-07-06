import {Container} from 'reactstrap';
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CustomTabContent from './CustomTabContent';



import htmlLogo from '../../assets/img/skill_logos/html.png'
import cssLogo from '../../assets/img/skill_logos/css.png'
import jsLogo from '../../assets/img/skill_logos/js.png'
import bootstrapLogo from '../../assets/img/skill_logos/bootstrap.png'
import figmaLogo from '../../assets/img/skill_logos/figma.png'
import jqueryLogo from '../../assets/img/skill_logos/jquery.png'
import reactLogo from '../../assets/img/skill_logos/react.png'
import wordpressLogo from '../../assets/img/skill_logos/wordpress.png'

function TabPanel(props) {
    const { children, value, index, ...other } = props;


  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            {children}
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function tabMenuProps(index) {
    return {
      id: `vertical-tab-${index}`,
      className: 'vertical-tab-menus',
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }
  
  const moreAboutInfo = {
    education : [
        {
            id: 0,
            logo: 'fa-graduation-cap',
            year: '2014 - 2019',
            degree: 'Bachelor of Computer Science & Engineering',
            institution: "International Islamic University Chittagong",
            description: "It was a 4+ year's journey where I got the foundation of my future path way. I would show my honour and gratitude to all of the honorary faculties who allways helped me to give me the proper guidance. During this journey I was connected and accomplished with several projects."
        },
        {
            id: 1,
            logo: 'fa-graduation-cap',
            year: '2011 - 2013',
            degree: 'Higher Secondary School Certificate',
            institution: "Hazi Mohammed Mohsin College",
            description: "I completed my Higher Secondary degree from the background of Science. During these years I had involvement with several co-curricular activities and was focused in preparing myself for higher studies. I obtained a GPA of 4.90 out of 5.00 on this exam."
        },
        {
            id: 2,
            logo: 'fa-graduation-cap',
            year: '2009 - 2011',
            degree: 'Secondary School Certificate',
            institution: "Mirza Ahmed Ispahani Smriti Biddalaya",
            description: "These years were the best and most memorable years of my life. I obtained a GPA of 5.00 out of 5.00 in Secondary School Certification from the background of Science and I had my basic schooling and grooming here"
        }
    ],
    experience : [
        {
            id: 0,
            logo: 'fa-laptop-code',
            year: '2020 - 2022',
            degree: 'Consultant (Associate Development)',
            institution: "ASCII System Ltd.",
            description: "I started my professional journey here. I had my great times with them and completed and accomplished several projects with success which added a greate revenue for the company."
        },
        {
            id: 1,
            logo: 'fa-laptop-code',
            year: '2019 - 2020',
            degree: 'Internship(Web Development)',
            institution: "ASCII System Ltd.",
            description: "On this time I was involved mainly in self learning with ASCII. Where I build several apps using HTML, CSS, Bootstrap, JS and WordPress under the supervision and started to work on a live project named EV Oilfield services."
        }
    ],
    expertise : [
      {
        id: 0,
        logo: htmlLogo,
        name : 'HTML5'
      },
      {
        id: 1,
        logo: cssLogo,
        name : 'CSS'
      },
      {
        id: 2,
        logo: jsLogo,
        name : 'Javascript'
      },
      {
        id: 3,
        logo: bootstrapLogo,
        name : 'Bootstrap'
      },
      {
        id: 4,
        logo: jqueryLogo,
        name : 'Jquery'
      },
      {
        id: 5,
        logo: reactLogo,
        name : 'React & Redux'
      },
      {
        id: 6,
        logo: figmaLogo,
        name : 'Figma'
      },
      {
        id: 7,
        logo: wordpressLogo,
        name : 'WordPress & PHP'
      }
    ]
}
export default function MoreAboutMe(){

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };


    return (
        <section className='more-about-me-section'>
            <Container>
                <Box
                    sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex'}}
                    className={'more-about-me-tab'}
                >
                    <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    className='more-about-tabs-menu'
                    sx={{ }}
                    data-aos="fade-up"
                    data-aos-duration="3000"
                    data-aos-once="true" 
                    >
                    <Tab label="Experience" {...tabMenuProps(0)} />
                    {/* <Tab label="Expertise" {...tabMenuProps(1)} /> */}
                    <Tab label="Education" {...tabMenuProps(1)} />
                    </Tabs>
                    <TabPanel value={value} index={0} className='more-about-tabs-panel'
                      data-aos="fade-up"
                      data-aos-duration="3000"
                      data-aos-once="true" 
                    >
                        <CustomTabContent tabTitle="Experience" contents={moreAboutInfo['experience']}/>
                    </TabPanel>
                    {/* <TabPanel value={value} index={1} className='more-about-tabs-panel'>
                        <CustomTabContent tabTitle="A Few Technologies I've Been Working On" contents={moreAboutInfo['expertise']}/>
                    </TabPanel> */}
                    <TabPanel value={value} index={1} className='more-about-tabs-panel'
                              >
                        <CustomTabContent 
                          tabTitle="Education" 
                          contents={moreAboutInfo['education']}
                               
                        />
                    </TabPanel>
                </Box>
            </Container>
        </section>
    )
}