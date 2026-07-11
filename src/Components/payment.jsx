import React from "react";
import { Grid, Box, Paper, Typography, Button } from "@mui/material";
import { getImgUrl } from './imgHelper';
import '../Styles/web.css';

const Payment = () => {
  const bill = localStorage.getItem("billAmount");
  const [selected, setSelected] = React.useState(true);

  return (
    <main id="main-content">
      <Grid container component="div" sx={{ minHeight: "100vh" }}>
        <Grid item xs={12} sm={12} md={5} component={Paper} elevation={0}
          sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', p: { xs: 4, md: 6 }, bgcolor: 'var(--bg-page)' }}>
          <Box sx={{ maxWidth: 400, mx: 'auto', width: '100%', textAlign: 'center' }}>
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

            <Typography sx={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, color: 'var(--text-primary)', mb: 2 }}>
              Online Payment
            </Typography>

            <Box
              onClick={() => setSelected(true)}
              sx={{
                border: selected ? '2px solid var(--primary)' : '2px solid var(--border-light)',
                borderRadius: 3,
                p: 3,
                mb: 3,
                cursor: 'pointer',
                bgcolor: selected ? 'var(--color-forest-50)' : 'transparent',
                transition: 'all 0.2s',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                '&:hover': { borderColor: 'var(--primary)', bgcolor: 'var(--color-forest-50)' },
              }}
            >
              <Box
                component="img"
                src={getImgUrl('/images/GPAY.jpeg')}
                alt="Google Pay"
                sx={{ width: '100%', maxWidth: 280, height: 'auto', objectFit: 'contain' }}
              />
            </Box>

            <Button
              id="confirm-button"
              variant="contained"
              size="large"
              disabled={!selected}
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
              Pay ₹{bill}
            </Button>
            <Typography sx={{ mt: 2, fontSize: '0.75rem', color: 'var(--text-muted)', textAlign: 'center' }}>
              Your payment information is secure and encrypted.
            </Typography>
          </Box>
        </Grid>

        <Grid
          item
          xs={false}
          sm={false}
          md={7}
          sx={{
            backgroundImage: `url(${getImgUrl('/images/paymentbg.jpg')})`,
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
