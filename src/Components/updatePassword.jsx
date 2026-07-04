import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import Swal from "sweetalert2";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { SupaBase } from "./createClient";

const defaultTheme = createTheme();

export default function UpdatePassword() {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEMail = (e) => {
    setPassword(e.target.value);
  };

  const handlePassword = async (e) => {
    e.preventDefault();
    const { data, error } = await SupaBase.auth.updateUser({ password: password });
    if (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message || "Failed to update password!",
        timer: 4000,
      });
      return;
    }
    if (data) {
      Swal.fire({
        icon: "success",
        title: "Yayy...",
        text: "Password Updated Successfully!",
        timer: "3000",
      }).then(() => {
        navigate("/signin");
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
            <FontAwesomeIcon icon={faKey} />
          </Avatar>
          <Typography component="h1" variant="h5">
            Update Password
          </Typography>
          <Box
            component="form"
            onSubmit={handlePassword}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              onChange={handleEMail}
              type="password"
              id="password"
              autoComplete="current-password"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Update
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
