import React from 'react';
import { Grid, Card, CardContent, Typography, CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

const services = [
  { title: 'AI Bot Calling', description: 'Automated calls for appointment reminders and health tips.', link: '/ai-bot-calling' },
  { title: 'Check-up Scheduling', description: 'Easy online scheduling for your medical appointments.', link: '/check-up-scheduling' },
  { title: 'Data Analysis', description: 'In-depth health data analysis for personalized care plans.', link:'/dashboard' },
];

const ServicesSection = () => {
  return (<div style={{paddingTop:"4rem", paddingBottom:'3.6rem'}}>
    <Grid  spacing={2}  style={{display:"flex", justifyContent:"center",alignItems:"center"}}>
      {services.map((service, index) => (
        <Grid item xs={12} sm={4} key={index} style={{paddingRight:'2rem'}}>
          <Card sx={{ 
            maxWidth: 345, 
            minHeight: 140,
            height:'20vh', // Adjust card size
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'space-between', 
            backgroundColor:"#e3e3ff",
            backdropFilter:"blur(100px)",
            // boxShadow:" rgba(0,0,0,0.2) 2px 1px"
          }}>
            <CardActionArea component={Link} to={service.link || '#'} sx={{ 
              p: 1, // Reduce padding
            }}>
              <CardContent sx={{ 
                "&:last-child": { 
                  pb: 1 // Reduce padding on the last child
                } 
              }}>
                <Typography gutterBottom variant="h6" component="div" sx={{ 
                  fontSize: '1rem',
                   // Adjust title font size
                }}>
                  {service.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ 
                  fontSize: '0.8rem', // Adjust body font size
                }}>
                  {service.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
    </div>
  );
};

export default ServicesSection;
