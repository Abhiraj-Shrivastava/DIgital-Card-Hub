import { Box, Container, Divider } from '@mui/material';
import React from 'react';
import Navbar from "../Components/Navbar";
import Hero from '../Components/Hero';
import Freedom from '../Components/Freedom';
import HowItWorks from '../Components/HowItWorks';
import DigCardECom from '../Components/DigCardECom';
import SampleDCard from '../Components/SampleDCard';
import Footer from '../Components/Footer';
import bg from "../../Digital Card Assets/footer.png";
import ServiceWeOffer from '../Components/ServiceWeOffer';
import Features from '../Components/Features';
import DCSlider from '../Components/DCSlider';
import WhyChooseDCH from '../Components/WhyChooseDCH';
import Categories from '../Components/Categories';
import Varieties from '../Components/Varieties';
import { useEffect } from 'react';
export default function Home() {
    
  useEffect(()=>{
    window.scroll({
        top: 0,
        left: 0,
        behavior:'instant',
      });
  },[])
    return (
        <Box sx={{ background: "#001E3C", overflowX: "hidden" }}>
            <Navbar />
            <Container maxWidth={"xl"}>
                <Hero />
                <Freedom />
                <DigCardECom />
                <WhyChooseDCH/>
                <Categories/>
                <DCSlider/>
                <br /><br /><br />
                <ServiceWeOffer/>
                <br />
                <HowItWorks />
                <br />
                <Features/>
                <br /><br />
            <Varieties/>
            </Container>
            <Divider sx={{backgroundColor:"#ffffff",width:"100%"}} />
            <Box sx={{backgroundImage:`url('${bg}')`,backgroundSize:"cover"}}>
                <Footer />
            </Box>
        </Box>
    )
}
