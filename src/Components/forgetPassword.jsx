// const ForgetPassword = () => {

//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         paddingTop: "100px",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <h1>Forget Password</h1>
//       <form onSubmit={handleSubmit}>
//         <label>Email:</label>
//         <br />
//         <input
//           type="text"
//           placeholder="Enter your email address"
//           onChange={handleMail}
//         />
//         <button type="submit">send</button>
//       </form>
//     </div>
//   );
// };

// export default ForgetPassword;

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Swal from "sweetalert2";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
// import Link from "@mui/material/Link";
// import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import { SupaBase } from "./createClient";

const defaultTheme = createTheme();

export default function SignIn() {
  const [email, setEmail] = useState("");

  const handleMail = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await SupaBase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/updatePassword`,
    });
    if (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message || "Enter Valid Email Address!",
        timer: 4000,
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Yayy...",
        text: "Check your mail to reset your password",
        timer: "2000",
      });
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 20,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            border: "1px solid black",
            padding: "50px",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Reset Password
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              onChange={handleMail}
              autoComplete="email"
              autoFocus
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              send
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
