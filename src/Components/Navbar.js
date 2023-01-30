import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Image } from '@mui/icons-material';
import myImage from '../assets/ibuzz.png'
import { useNavigate } from 'react-router-dom';
import "../App.css"
import "../font/Oswald-VariableFont_wght.ttf"
import { Divider } from '@mui/material';
import Cloud from '@mui/icons-material/Cloud';
import ListItemIcon from '@mui/material/ListItemIcon';



const pages = ['Home', 'About', 'Services','Packages','Contact Us'];

function Navbar() {
  var navigate=useNavigate()
  const [anchorElMainMenu, setAnchorElMainMenu] = React.useState(null);
  const [anchorElServicesMenu, setAnchorElServicesMenu] = React.useState(null);
  const [anchorElPackagesMenu, setAnchorElPackagesMenu] = React.useState(null);
  

  const handleOpenNavMenu = (event) => {
    setAnchorElMainMenu(event.currentTarget);
  };
 

  const handleCloseNavMenu = () => {
    setAnchorElMainMenu(null);
  };



  function handleServicesOpen(event) {
    if (anchorElServicesMenu !== event.currentTarget) {
      setAnchorElServicesMenu(event.currentTarget);
    }
  }
  function handleServicesClose() {
    setAnchorElServicesMenu(null);
  }

  function handlePackagesOpen(event) {
    if (anchorElPackagesMenu !== event.currentTarget) {
      setAnchorElPackagesMenu(event.currentTarget);
    }
  }

  function handlePackagesClose() {
    setAnchorElPackagesMenu(null);
  }

  


  return (
    <AppBar position='sticky'  style={{ background:'rgb(128,128,128,0.2)', width: "100%", top: 0, }} className="font-link">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <img  src={myImage} style={{width:100}}/>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' }, 
              fontWeight:'bold',
              letterSpacing: '.3rem',
              color: '#000',
              textDecoration: 'none',
            }}
            className="font-link"
           
          >
            IBUZZ
          </Typography>

          <Box sx={{ flexGrow: 2, display: { xs: 'flex', md: 'none',justifyContent:'flex-end' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="#000"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElMainMenu}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElMainMenu)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
                <MenuItem onClick={()=>{navigate("/home")}}>
                  <Typography textAlign="center" >Home</Typography>
                </MenuItem>
                <MenuItem onClick={()=>{navigate("/aboutus")}}>
                  <Typography textAlign="center" >About Us</Typography>
                </MenuItem>
                <MenuItem onClick={handleServicesOpen}>
                  <Typography textAlign="center" >Services</Typography>
                </MenuItem>
                <MenuItem  onClick={handlePackagesOpen}>
                  <Typography textAlign="center" >Packages</Typography>
                </MenuItem>
                <MenuItem onClick={()=>{navigate('/contactus')}}>
                  <Typography textAlign="center" >Contact Us</Typography>
                </MenuItem>
              
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          
          <Box sx={{ flexGrow: 2, display: { xs: 'none', md: 'flex',justifyContent:'flex-end' } }}>
            
              <Button
               onClick={()=>{navigate("/home")}}

                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                Home
              </Button>
              <Button
               
               onClick={()=>{navigate("/aboutus")}}
               sx={{ my: 2, color: 'black', display: 'block' }}
             >
               About Us
             </Button>
             <Button
        aria-owns={anchorElServicesMenu ? "simple-menu" : undefined}
        aria-haspopup="true"
        onClick={handleServicesOpen}
        onMouseOver={handleServicesOpen}
        sx={{ my: 2, color: 'black', display: 'block' }}
      >
        Services
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorElServicesMenu}
        open={Boolean(anchorElServicesMenu)}
        onClose={handleServicesClose}
        MenuListProps={{ onMouseLeave: handleServicesClose }}
      >
        <MenuItem onClick={()=>{navigate("/digitalmarketting")}}> <ListItemIcon>
            <Cloud fontSize="small" />
          </ListItemIcon>Digital Marketting</MenuItem>
          <Divider />
        <MenuItem onClick={()=>{navigate("/webdevelopment")}}> <ListItemIcon>
            <Cloud fontSize="small" />
          </ListItemIcon>Web Development</MenuItem>
          <Divider />
        <MenuItem onClick={()=>{navigate("/appdevelopment")}}> <ListItemIcon>
            <Cloud fontSize="small" />
          </ListItemIcon>App Development</MenuItem>
          <Divider />
        <MenuItem onClick={()=>{navigate("/customsoftwaredevelopment")}}> <ListItemIcon>
            <Cloud fontSize="small" />
          </ListItemIcon>Custom Software Development</MenuItem>
      </Menu>
      <Button
        aria-owns={anchorElPackagesMenu ? "simple-menu" : undefined}
        aria-haspopup="true"
        onClick={handlePackagesOpen}
        onMouseOver={handlePackagesOpen}
        sx={{ my: 2, color: 'black', display: 'block' }}
      >
        Packages
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorElPackagesMenu}
        open={Boolean(anchorElPackagesMenu)}
        onClose={handlePackagesClose}
        MenuListProps={{ onMouseLeave: handlePackagesClose }}
      >
        <MenuItem  onClick={()=>{navigate("/seopackages")}}> <ListItemIcon>
            <Cloud fontSize="small" />
          </ListItemIcon>SEO Packages</MenuItem>
        <Divider />
        <MenuItem onClick={()=>{navigate("/smopackages")}}> <ListItemIcon>
            <Cloud fontSize="small" />
          </ListItemIcon>SMO Packages</MenuItem>
        <Divider />
        <MenuItem onClick={()=>{navigate("/ppcpackages")}}> <ListItemIcon>
            <Cloud fontSize="small" />
          </ListItemIcon>PPC Packages</MenuItem>
        <Divider />
        <MenuItem onClick={()=>{navigate("/localseopackages")}}> <ListItemIcon>
            <Cloud fontSize="small" />
          </ListItemIcon>Local Seo Packages</MenuItem>
        <Divider />
        <MenuItem onClick={()=>{navigate("/staticwebsitepackages")}}> <ListItemIcon>
            <Cloud fontSize="small" />
          </ListItemIcon>Static Website Packages</MenuItem>
        <Divider />
        <MenuItem onClick={()=>{navigate("/dynamicwebsitepackages")}}> <ListItemIcon>
            <Cloud fontSize="small" />
          </ListItemIcon>Dynamic Website Packages</MenuItem>
        <Divider />
        <MenuItem onClick={handlePackagesClose}> <ListItemIcon>
            <Cloud fontSize="small" />
          </ListItemIcon>Application Development Packages</MenuItem>
        
      </Menu>
             <Button
               
onClick={()=>{navigate('/contactus')}}
               sx={{ my: 2, color: 'black', display: 'block' }}
             >
               Contact Us
             </Button>
            
          </Box>

         
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar