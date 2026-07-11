//eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Checkbox from '@mui/material/Checkbox'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import FormControlLabel from '@mui/material/FormControlLabel'
import Paper from '@mui/material/Paper'
import Swal from 'sweetalert2'
import { SupaBase } from './createClient'
import { getImgUrl } from './imgHelper'

const theme = createTheme()

export default function SignUpSide() {
  // eslint-disable-next-line no-unused-vars
  const initialStateErrors = {
    email: { required: false },
    password: { required: false },
    firstName: { required: false },
  }

  // const eventLog = () => {
  //   nav('/signin')
  // }

  const handleSubmit = async (event) => {
    if (event && event.preventDefault) event.preventDefault();
    const name = input.firstName + input.lastName

    if (input.password !== input.passwordConfirm) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Passwords do not match!',
        timer: 3000,
      });
      return;
    }

    try {
      const { data, error } = await SupaBase.auth.signUp({
        email: input.email,
        password: input.password,
        options: { data: { full_name: name, phone: input.number }, emailRedirectTo: `${window.location.origin}${window.location.pathname}#/verify-email` },
      })

      if (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.message || 'Something went wrong!',
          timer: 4000,
        });
        return;
      }
      if (data) {
        Swal.fire({
          icon: 'success',
          title: 'Yayy...',
          text: 'Successfully Signed Up! Please verify your email and login to continue.',
          timer: 2000,
        })
      }
    } catch (e) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: e.message || 'Something went wrong!',
        timer: 4000,
      });
    }
  }

  const [input, setInputs] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirm: '',
    number: '',
  })
  const handleInput = (event) => {
    setInputs({ ...input, [event.target.name]: event.target.value })
  }

  return (
    <Container
      className="main"
      maxWidth={false}
      maxHeight={false}
      style={{ backgroundImage: `url(${getImgUrl('/images/women.jpg')})`, height: '100%' }}
    >
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <Paper elevation={8}>
            <CssBaseline />
            <Box sx={{ padding: 2 }}>
              <Box
                sx={{
                  marginTop: 8,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Sign up
                </Typography>
                <Box
                  component="form"
                  noValidate
                  onSubmit={handleSubmit}
                  sx={{ mt: 3 }}
                >
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
                        value={input.firstName}
                        onChange={handleInput}
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
                        value={input.lastName}
                        onChange={handleInput}
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
                        value={input.email}
                        onChange={handleInput}
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
                        value={input.password}
                        onChange={handleInput}
                      />
                      {/* {input.password} */}
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        name="passwordConfirm"
                        label="Confirm Password"
                        type="password"
                        id="passwordConfirm"
                        autoComplete="new-password"
                        value={input.passwordConfirm}
                        onChange={handleInput}
                      />
                      {/* {input.passwordConfirm} */}
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        name="number"
                        label="Phone Number"
                        type="tel"
                        id="number"
                        autoComplete="tel"
                        value={input.number}
                        onChange={handleInput}
                      />
                    </Grid>

                    {/* <Grid item xs={12}>
                      <Stack direction="row" alignItems="center" spacing={2}>
                        <span>ID Proof copy</span>
                        <Button variant="contained" component="label">
                          Upload
                          <input hidden accept="image/*" multiple type="file" />
                        </Button>
                        <IconButton
                          color="primary"
                          aria-label="upload picture"
                          component="label"
                        >
                          <input hidden accept="image/*" type="file" />
                          <PhotoCamera />
                        </IconButton>
                      </Stack>
                    </Grid> */}
                    <Grid item xs={12}>
                      <FormControlLabel
                        control={
                          <Checkbox value="allowExtraEmails" color="primary" />
                        }
                        label="I want to receive inspiration, marketing promotions and updates via email."
                      />
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
                  <Grid container justifyContent="flex-end">
                    <Grid item>
                      <Link to="/signin" variant="body2">
                        Already have an account? Sign in
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Box>
          </Paper>
        </Container>
      </ThemeProvider>
    </Container>
  )
}
