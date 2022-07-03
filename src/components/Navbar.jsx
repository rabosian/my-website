import { useState } from "react"
import { Box, Container, Typography, AppBar, IconButton, Toolbar, Button, Menu, MenuItem } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";

const pages = ['Home', 'About', 'Skills', 'Projects', 'Contact']

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(null)

  const handleOpenNav = (e) => {
    setToggleNav(e.currentTarget)
  }
  const handleCloseNav = () => {
    setToggleNav(null)
  }

  return (
    <AppBar
      position="static"
      elevation={0}
      color="transparent">
      <Container maxWidth="xl">
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNav}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={toggleNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(toggleNav)}
              onClose={handleCloseNav}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNav}>
                  <Typography textAlign="center">
                    <Link
                      style={{ textDecoration: "none" }}
                      to={`/${page}`}
                    >{page}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Link
                  style={{ textDecoration: "none" }}
                  to={`/${page}`}
                >{page}</Link>
              </Typography>))
            }
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar