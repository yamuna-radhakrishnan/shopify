import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SupaBase } from './createClient'
import {
  Container, Paper, Box, Typography, Button, CircularProgress, Avatar
} from '@mui/material'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead'

export default function EmailVerification() {
  const [status, setStatus] = useState('verifying')
  const [message, setMessage] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const hash = window.location.hash
        const queryStart = hash.indexOf('?')
        let code = null
        if (queryStart !== -1) {
          const params = new URLSearchParams(hash.slice(queryStart))
          code = params.get('code')
        }

        const urlParams = new URLSearchParams(window.location.search)
        const searchCode = urlParams.get('code')
        const pkceCode = code || searchCode

        if (pkceCode) {
          const { error } = await SupaBase.auth.exchangeCodeForSession(pkceCode)
          if (error) {
            setStatus('error')
            setMessage(error.message || 'Failed to verify email.')
            return
          }
        }

        const { data: sessionData } = await SupaBase.auth.getSession()

        if (sessionData?.session?.user?.email_confirmed_at) {
          setStatus('success')
          setMessage('Your email has been verified successfully!')
        } else if (sessionData?.session) {
          const { data: userData } = await SupaBase.auth.getUser()
          if (userData?.user?.email_confirmed_at) {
            setStatus('success')
            setMessage('Your email has been verified successfully!')
          } else {
            const userEmail = userData?.user?.email || 'your email'
            setStatus('error')
            setMessage(`Verification pending for ${userEmail}. Please check your inbox.`)
          }
        } else {
          setStatus('error')
          setMessage('Invalid or expired verification link. Please try signing up again.')
        }
      } catch (e) {
        setStatus('error')
        setMessage('Something went wrong. Please try again.')
      }
    }

    verifyEmail()
  }, [])

  return (
    <Container
      maxWidth={false}
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #f0faf5 0%, #d0f0e0 100%)',
      }}
    >
      <Paper elevation={8} sx={{ p: 6, maxWidth: 480, width: '100%', borderRadius: 3, textAlign: 'center' }}>
        {status === 'verifying' && (
          <Box>
            <Avatar sx={{ mx: 'auto', mb: 2, bgcolor: '#1a4731', width: 64, height: 64 }}>
              <MarkEmailReadIcon sx={{ fontSize: 32 }} />
            </Avatar>
            <Typography variant="h5" gutterBottom fontWeight={600} color="#1a2a1e">
              Verifying your email
            </Typography>
            <CircularProgress sx={{ color: '#1a4731', mt: 3, mb: 2 }} />
            <Typography variant="body2" color="text.secondary">
              Please wait while we confirm your email address...
            </Typography>
          </Box>
        )}

        {status === 'success' && (
          <Box>
            <Avatar sx={{ mx: 'auto', mb: 2, bgcolor: '#2e7d32', width: 64, height: 64 }}>
              <CheckCircleOutlineIcon sx={{ fontSize: 32 }} />
            </Avatar>
            <Typography variant="h5" gutterBottom fontWeight={600} color="#1a2a1e">
              Email Verified!
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
              {message}
            </Typography>
            <Button
              variant="contained"
              size="large"
              fullWidth
              onClick={() => navigate('/signin')}
              sx={{
                bgcolor: '#1a4731',
                '&:hover': { bgcolor: '#0d3622' },
                py: 1.5,
                borderRadius: 2,
              }}
            >
              Go to Sign In
            </Button>
          </Box>
        )}

        {status === 'error' && (
          <Box>
            <Avatar sx={{ mx: 'auto', mb: 2, bgcolor: '#d32f2f', width: 64, height: 64 }}>
              <ErrorOutlineIcon sx={{ fontSize: 32 }} />
            </Avatar>
            <Typography variant="h5" gutterBottom fontWeight={600} color="#1a2a1e">
              Verification Failed
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
              {message}
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
              <Button
                variant="outlined"
                size="large"
                fullWidth
                onClick={() => navigate('/signup')}
                sx={{ borderRadius: 2, borderColor: '#1a4731', color: '#1a4731' }}
              >
                Sign Up Again
              </Button>
              <Button
                variant="contained"
                size="large"
                fullWidth
                onClick={() => navigate('/signin')}
                sx={{
                  bgcolor: '#1a4731',
                  '&:hover': { bgcolor: '#0d3622' },
                  borderRadius: 2,
                }}
              >
                Go to Sign In
              </Button>
            </Box>
          </Box>
        )}
      </Paper>
    </Container>
  )
}
