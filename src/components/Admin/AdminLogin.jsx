import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Container,
  CssBaseline,
  TextField,
  Typography,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import { styled } from '@mui/system';
import { Center } from '@mui/system';
import logo from './docere.png'

const theme = createTheme({
  palette: {
    primary: {
      main: '#77d5cb',
    },
  },
});

const CustomContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '100px',
  backgroundColor: '#fff',
  padding: '2rem',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
});

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === 'docere123' && password === 'jbn303') {
      // Redirect to admin dashboard on successful login
      navigate('/admindashboard');
    } else {
      setErrorMessage('Invalid Admin username or password');
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <center>
      <CustomContainer component="main" maxWidth="xs" >
      
        <CssBaseline />
        <Typography variant="h5" color="textPrimary">
          Admin Login
        </Typography>
        <form>
          <TextField
            label="Username"
            variant="outlined"
            margin="normal"
            fullWidth
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            InputProps={{
              style: { backgroundColor: '#fff' },
            }}
          />
          <TextField
            label="Password"
            variant="outlined"
            margin="normal"
            fullWidth
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              style: { backgroundColor: '#fff' },
            }}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleLogin}
            sx={{ marginTop: '1rem' }}
          >
            Login
          </Button>
          {errorMessage && (
            <Typography color="error" sx={{ marginTop: '1rem' }}>
              {errorMessage}
            </Typography>
          )}
        </form>
        
      </CustomContainer>
      </center>
    </ThemeProvider>
  );
};

export default AdminLogin;
