
import CustomNav from '../CusotmNav';
import HeaderBanner from '../HeaderBanner';
import AboutMe from '../AboutMe';
import MoreAboutMe from '../MoreAboutMe';
import MyProjects from '../MyProjects';
import Contact from '../Contact';
import Footer from '../Footer';


import {useEffect} from 'react'
import AOS from 'aos';


const Home = () => {
    useEffect(()=>{
        AOS.init({
        });
      },[])
    return (
        <>
            <CustomNav />
            <HeaderBanner/>
            <AboutMe/>
            <MoreAboutMe/>
            <MyProjects/>
            <Contact/>
            <Footer/>
        </>
    )
}


export default Home