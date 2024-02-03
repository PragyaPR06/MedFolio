import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" textAlign="center" p={1} style={{backgroundColor:"#90E0EF"}}>
      <Typography variant="body1">
        © 2024 Medical Automation Services
      </Typography>
    </Box>
  );
};

export default Footer;
