import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const HeroSection = () => {
  return (
    <Box textAlign="center" p={10}>
      <Typography variant="h2" gutterBottom>
        Automate Your Medical Services
      </Typography>
      <Typography variant="h5" gutterBottom>
        Empowering healthcare with AI-driven solutions.
      </Typography>
      <Button variant="contained" color="primary">
        Learn More
      </Button>
    </Box>
  );
};

export default HeroSection;
