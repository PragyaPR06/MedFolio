import React from 'react';
import { Card, CardContent, Typography, Grid, Divider } from '@mui/material';

const Dashboard = () => {
  // Example patient data
  const patientInfo = {
    name: "John Doe",
    age: 32,
    disease: "Hypertension",
    medicalHistory: ["Diabetes - 2018", "Hypertension - 2020"],
    medications: ["Metformin", "Lisinopril"],
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <Typography variant="h4" gutterBottom style={{ textAlign: 'center', color: '#1976d2' }}>
        Patient Dashboard
      </Typography>
      <Card variant="outlined" style={{ marginBottom: '20px' }}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {patientInfo.name}
          </Typography>
          <Typography color="textSecondary">
            Age: {patientInfo.age}
          </Typography>
          <Typography variant="body2" component="p">
            Disease: {patientInfo.disease}
          </Typography>
        </CardContent>
      </Card>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h6" component="h3" style={{ color:'#000'}}>
                Medical History
              </Typography>
              <Divider style={{ margin: '10px 0' }} />
              {patientInfo.medicalHistory.map((item, index) => (
                <Typography key={index} variant="body2" component="p" style={{ color:'#000'}}>
                  {item}
                </Typography>
              ))}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h6" component="h3" style={{ color:'#000'}}>
                Medications
              </Typography>
              <Divider style={{ margin: '10px 0' }} />
              {patientInfo.medications.map((medication, index) => (
                <Typography key={index} variant="body2" component="p">
                  {medication}
                </Typography>
              ))}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
