import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { Link, useLocation } from 'react-router-dom'
import AgricultureIcon from '@mui/icons-material/Agriculture'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import '../Styles/navbar.css'
import PropTypes from 'prop-types'
import logo from '/images/logo-white-transparent.png'

const theme = createTheme({
  palette: {
    primary: {
      main: '#1a4731',
      darker: '#0d2318',
    },
    secondary: {
      main: '#3d9e6e',
      darker: '#1a4731',
    },
  },
  typography: {
    fontFamily: "'DM Sans', system-ui, sans-serif",
  },
})

const Navbar = ({ children }) => {
  const location = useLocation()
  const pages = [
    { name: 'Consumer', path: '/consumer' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Farmer', path: '/farmer' },
  ]
  const settings = ['Profile', 'Account', 'Dashboard', 'Logout']

  const [anchorElNav, setAnchorElNav] = React.useState(null)
  const [anchorElUser, setAnchorElUser] = React.useState(null)
  const [scrolled, setScrolled] = React.useState(false)

  // FIX: scroll listener properly in useEffect with cleanup
  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY >= 40)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }
  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }
  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  const isActive = (path) => location.pathname === path

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <AppBar
          color="primary"
          className={scrolled ? 'fb-navbar fb-navbar-scrolled' : 'fb-navbar'}
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 200,
          }}
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters sx={{ minHeight: { xs: '60px', md: '68px' } }}>
              {/* Desktop Logo */}
              <Typography
                variant="h6"
                component={Link}
                to="/"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  alignItems: 'center',
                  textDecoration: 'none',
                  color: 'inherit',
                }}
                aria-label="Farm Buddy Home"
              >
                <img src={logo} alt="Farm Buddy logo" width="80" style={{ display: 'block' }} />
              </Typography>

              {/* Mobile: hamburger menu */}
              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="Open navigation menu"
                  aria-controls="nav-menu-mobile"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="nav-menu-mobile"
                  anchorEl={anchorElNav}
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                  keepMounted
                  transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{ display: { xs: 'block', md: 'none' } }}
                >
                  {pages.map((page) => (
                    <Link to={page.path} key={page.name} style={{ textDecoration: 'none', color: 'inherit' }}>
                      <MenuItem
                        onClick={handleCloseNavMenu}
                        selected={isActive(page.path)}
                      >
                        <Typography textAlign="center">{page.name}</Typography>
                      </MenuItem>
                    </Link>
                  ))}
                </Menu>
              </Box>

              {/* Mobile logo */}
              <AgricultureIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, color: '#3d9e6e' }} />
              <Typography
                variant="h5"
                noWrap
                component={Link}
                to="/"
                sx={{
                  mr: 2,
                  display: { xs: 'flex', md: 'none' },
                  flexGrow: 1,
                  fontFamily: "'DM Serif Display', serif",
                  fontWeight: 400,
                  letterSpacing: '.05rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
                aria-label="Farm Buddy"
              >
                FarmBuddy
              </Typography>

              {/* Desktop nav links */}
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: 1, alignItems: 'center' }}>
                {pages.map((page) => (
                  <Link
                    key={page.path}
                    to={page.path}
                    style={{ textDecoration: 'none' }}
                  >
                    <Button
                      onClick={handleCloseNavMenu}
                      sx={{
                        my: 1,
                        color: isActive(page.path) ? '#3d9e6e' : 'rgba(255,255,255,0.85)',
                        display: 'block',
                        fontFamily: "'DM Sans', sans-serif",
                        fontWeight: 500,
                        fontSize: '0.875rem',
                        letterSpacing: '0.01em',
                        textTransform: 'none',
                        borderRadius: '20px',
                        px: 2,
                        py: 0.75,
                        position: 'relative',
                        borderBottom: isActive(page.path) ? '2px solid #3d9e6e' : '2px solid transparent',
                        borderRadius: '0',
                        '&:hover': {
                          bgcolor: 'rgba(61,158,110,0.15)',
                          color: '#3d9e6e',
                          borderRadius: '6px',
                          borderBottom: '2px solid transparent',
                        },
                      }}
                    >
                      {page.name}
                    </Button>
                  </Link>
                ))}

                {/* Translate widget */}
                <Container
                  sx={{
                    my: 1,
                    mx: 1,
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    maxWidth: 'fit-content !important',
                    p: '0 !important',
                  }}
                >
                  {children}
                </Container>

                {/* Cart icon */}
                <Box sx={{ display: 'flex', alignItems: 'center', ml: 'auto' }}>
                  <Link to="/mycart">
                    <IconButton
                      size="large"
                      aria-label="View shopping cart"
                      sx={{
                        color: '#3d9e6e',
                        '&:hover': { bgcolor: 'rgba(61,158,110,0.15)' },
                      }}
                    >
                      <ShoppingCartIcon />
                    </IconButton>
                  </Link>
                </Box>
              </Box>

              {/* User avatar menu */}
              <Box sx={{ flexGrow: 0, ml: 1 }}>
                <Tooltip title="Account settings">
                  <IconButton
                    onClick={handleOpenUserMenu}
                    sx={{ p: 0.5 }}
                    aria-label="Open account settings"
                    aria-controls="nav-menu-user"
                    aria-haspopup="true"
                  >
                    <Avatar
                      alt="User account"
                      src="/static/images/avatar/2.jpg"
                      sx={{ width: 36, height: 36, bgcolor: '#235c3f' }}
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="nav-menu-user"
                  anchorEl={anchorElUser}
                  anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                  keepMounted
                  transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
    </ThemeProvider>
  )
}

Navbar.propTypes = {
  children: PropTypes.node,
}

Navbar.defaultProps = {
  children: null,
}

export default Navbar