import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Avatar from '@mui/material/Avatar';

const drawerWidth = 240;

const Psidebar = () => {
  const { id } = useParams();
  const [patientData, setPatientData] = useState(null);
  const [doctors, setDoctors] = useState([]);
  const [selectedMenuItem, setSelectedMenuItem] = useState('All Doctors');

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

  const handleListItemClick = (text) => {
    setSelectedMenuItem(text);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ backgroundColor: '#77d5cb', zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            DOCERE
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            <Typography variant="h6">
              <Avatar src="/broken-image.jpg" />{patientData ? `${patientData.Username}` : 'Loading...'}
            </Typography>
            <Typography>
              {patientData ? `${patientData.Email}` : 'Loading...'}
            </Typography>
          </List>
          <List>
            {['All Doctors', 'Doctors Nearby'].map((text, index) => (
              <ListItem
                key={text}
                disablePadding
                onClick={() => handleListItemClick(text)}
                selected={selectedMenuItem === text}
              >
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {[ 'Specialities', 'Common Symptoms'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {/* Render content based on the selected menu item */}
        {selectedMenuItem === 'All Doctors' && (
          <Typography variant="h4">Welcome {patientData ? `${patientData.Username}` : 'Loading...'}</Typography>
          
        )}
        {/* Add similar conditionals for other menu items if needed */}
        {selectedMenuItem === 'Doctors Nearby' && (
          <Typography variant="h4">hi</Typography>
          
        )}
      </Box>
    </Box>
  );
};

export default Psidebar;
