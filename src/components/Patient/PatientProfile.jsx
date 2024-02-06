import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';

const PatientProfile = () => {
  const { id } = useParams();
  const [patientData, setPatientData] = useState(null);
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch patient data
        const patientResponse = await axios.get(`http://localhost:5007/api/patients/${id}`);
        setPatientData(patientResponse.data);

        // Fetch list of doctors
        const doctorsResponse = await axios.get('http://localhost:5007/api/doctors');
        setDoctors(doctorsResponse.data);
      } catch (error) {
        console.error('Error fetching patient data or doctors:', error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: '#77d5cb' }}>
        <Toolbar>
          <Typography variant="h6" component="div">
            Welcome!
          </Typography>
          <Typography variant="h6" component="div">
            {patientData ? `${patientData.Username}` : 'Loading...'}
          </Typography>
        </Toolbar>
      </AppBar>
      {patientData ? (
        <div>
          
          <Box display="flex" flexWrap="wrap" 
  //         sx={{
  //   flexGrow: 1,
  //   p: 3,
  //   minHeight: '100vh',  // Set minimum height to 100% of viewport height
  //   backgroundColor: 'white', // Set background color to white
  // }}
  >
            {doctors.map(doctor => (
              <Card key={doctor._id} sx={{ maxWidth: 345, margin: 2 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={`data:image/jpeg;base64,${doctor.pic}`}
                    alt="Profile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {doctor.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Age: {doctor.age}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Specialty: {doctor.spec}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Language: {doctor.lang}
                    </Typography>
                    <Button style={{ color: '#77d5cb' }}>
                      Book NOW
                    </Button>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
          </Box>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PatientProfile;
