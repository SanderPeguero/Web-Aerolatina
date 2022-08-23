import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';



function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      {/* <Link color="inherit" href="https://mui.com/"> */}
      Quantum
      {' '}
      { /* </Link>{' '} */}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {



  return (
    <ThemeProvider theme={theme} >
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        {/* <Avatar sx={{ m: 0, bgcolor: '#000000', height: '4rem', width: '4rem' }}>
           <img src={logo} style={{ height: '2.6rem', width: '3rem', alignSelf: 'center' }}></img>
         </Avatar> */}
        <Box
          sx={{
            marginTop: 16,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: 500,
            background: 'grey'

          }}
        >
          <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: 400,
          }}
          >

            <Avatar sx={{ m: 1, bgcolor: '#000000' }}>
              <LockOutlinedIcon />
            </Avatar>

            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box component="form" noValidate sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>
                <Grid item xs={12}>
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
            </Box>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 5 }} /> */}
      </Container>
    </ThemeProvider>
  );
}