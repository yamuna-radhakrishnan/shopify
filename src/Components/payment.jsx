import React from "react";
import { Grid, Box, Paper, Typography, Button } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import '../Styles/web.css';

const Payment = () => {
  const bill = localStorage.getItem("billAmount");
  const [paymentMethod, setPaymentMethod] = React.useState('');

  const handleChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  return (
    <main id="main-content">
      <Grid container component="div" sx={{ minHeight: "100vh" }}>
        {/* Form panel */}
        <Grid item xs={12} sm={12} md={5} component={Paper} elevation={0}
          sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', p: { xs: 4, md: 6 }, bgcolor: 'var(--bg-page)' }}>
          <Box sx={{ maxWidth: 400, mx: 'auto', width: '100%' }}>
            <Typography variant="overline" sx={{ color: 'var(--text-muted)', letterSpacing: 2, fontFamily: "'DM Sans', sans-serif" }}>
              Secure Checkout
            </Typography>
            <Typography
              id="pay-head"
              variant="h4"
              sx={{ fontFamily: "'DM Serif Display', serif", color: 'var(--text-primary)', mt: 1, mb: 1 }}
            >
              Amount to Pay
            </Typography>
            <Typography sx={{ fontFamily: "'DM Serif Display', serif", fontSize: '3rem', color: 'var(--primary)', fontVariantNumeric: 'tabular-nums', mb: 4 }}>
              ₹{bill}
            </Typography>

            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel id="payment-method-label">Payment Method</InputLabel>
              <Select
                labelId="payment-method-label"
                id="payment-method-select"
                value={paymentMethod}
                label="Payment Method"
                onChange={handleChange}
              >
                <MenuItem value="cod">Cash on Delivery</MenuItem>
                <ListSubheader>Cards</ListSubheader>
                <MenuItem value="credit">Credit Card</MenuItem>
                <MenuItem value="debit">Debit Card</MenuItem>
                <ListSubheader>UPI</ListSubheader>
                <MenuItem value="paytm">Paytm</MenuItem>
                <MenuItem value="gpay">Google Pay</MenuItem>
                <MenuItem value="phonepe">PhonePe</MenuItem>
              </Select>
            </FormControl>

            <Button
              id="confirm-button"
              variant="contained"
              size="large"
              disabled={!paymentMethod}
              fullWidth
              sx={{
                bgcolor: 'var(--primary)',
                color: '#fff',
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 600,
                textTransform: 'none',
                fontSize: '1rem',
                borderRadius: '50px',
                py: 1.5,
                '&:hover': { bgcolor: 'var(--primary-hover)' },
                '&:disabled': { opacity: 0.5 },
              }}
            >
              Confirm Payment
            </Button>
            <Typography sx={{ mt: 2, fontSize: '0.75rem', color: 'var(--text-muted)', textAlign: 'center' }}>
              Your payment information is secure and encrypted.
            </Typography>
          </Box>
        </Grid>

        {/* Background image panel */}
        <Grid
          item
          xs={false}
          sm={false}
          md={7}
          sx={{
            backgroundImage: 'url(images/paymentbg.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: { xs: 'none', md: 'block' },
          }}
          aria-hidden="true"
        />
      </Grid>
    </main>
  );
};

export default Payment;