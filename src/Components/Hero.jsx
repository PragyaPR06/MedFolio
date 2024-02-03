import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import ServicesSection from './Services';
const HeroSection = () => {
  return (
    <Box textAlign="center" p={10} style={{backgroundImage: "url(https://res.cloudinary.com/dfa0k8sry/image/upload/v1706955010/mobile_banner-7-1_jnxmdl.webp)", backgroundSize: "cover"}}>
      <Typography variant="h2" gutterBottom style={{color:"#880085"}}>
        Automate Your Medical Services
      </Typography>
      <Typography variant="h5" gutterBottom>
        Empowering healthcare with AI-driven solutions.
      </Typography>
      <Button variant="contained" style={{backgroundColor:"#00B4D8"}}>
        Learn More
      </Button>
      <ServicesSection/>
    </Box>
  );
};

export default HeroSection;
