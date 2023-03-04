import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Image } from "@mui/icons-material";
import myImage from "../assets/ibuzz.png";
import { useNavigate } from "react-router-dom";
import "../App.css";
import "../font/Oswald-VariableFont_wght.ttf";
import { ClickAwayListener, Divider } from "@mui/material";
import Cloud from "@mui/icons-material/Cloud";
import ListItemIcon from "@mui/material/ListItemIcon";
import { NestedDropdown } from "mui-nested-menu";
import { NestedMenuItem } from "mui-nested-menu";
import CallIcon from "@mui/icons-material/Call";
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuList from '@mui/material/MenuList';
const menuItemsData = {
  label: "File",
  items: [
    {
      label: "New",
      callback: () => console.log("New clicked"),
    },
    {
      label: "Save",
      callback: () => console.log("Save clicked"),
    },
    {
      label: "Save As",
      items: [
        {
          label: "Option 1",
          callback: () => console.log("Save As > Option 1 clicked"),
        },
        {
          label: "Option 2",
          callback: () => console.log("Save As > Option 2 clicked"),
          disabled: true,
        },
      ],
    },
    {
      label: "Export",

      items: [
        {
          label: "File Type 1",
          items: [
            {
              label: "Option 1",
              callback: () => console.log("Export > FT1 > O1 clicked"),
              sx: { color: "#FF0000" },
            },
            {
              label: "Option 2",
              callback: () => console.log("Export > FT1 > O2 clicked"),
            },
          ],
        },
        {
          label: "File Type 2",
          callback: () => console.log("Export > FT2 clicked"),
        },
      ],
    },
  ],
};

const pages = ["Home", "About", "Services", "Packages", "Contact Us"];

function Navbar() {
  var navigate = useNavigate();
  const [anchorElMainMenu, setAnchorElMainMenu] = React.useState(null);
  const [anchorElServicesMenu, setAnchorElServicesMenu] = React.useState(null);
  const [anchorElDigitalServicesMenu, setAnchorElDigitalServicesMenu] =
    React.useState(null);
  const [anchorElPackagesMenu, setAnchorElPackagesMenu] = React.useState(null);
  const [confirm, setConfirm] = React.useState("flex");

  const handleOpenNavMenu = (event) => {
    setAnchorElMainMenu(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElMainMenu(null);
  };

  function handleServicesOpen(event) {
    if (anchorElServicesMenu !== event.currentTarget) {
      console.log(event.currentTarget);
      setAnchorElServicesMenu(event.currentTarget);
      setConfirm("flex");
    }
  }

  function handleServicesClose(event) {
    if (anchorElServicesMenu && !anchorElServicesMenu.contains(event.target)) {
      setAnchorElServicesMenu(null);
      setConfirm("none");
    }
  }

  function handleDigitalServicesOpen(event) {
    if (anchorElDigitalServicesMenu !== event.currentTarget) {
      setAnchorElDigitalServicesMenu(event.currentTarget);
    }
  }
  function handleDigitalServicesClose() {
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

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);


  return (
    <AppBar
      position="sticky"
      style={{ background: "rgb(128,128,128,0.2)", width: "100%", top: 0 }}
      className="font-link"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src={myImage} style={{ width: 100 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: "bold",
              letterSpacing: ".3rem",
              color: "#000",
              textDecoration: "none",
            }}
            className="font-link"
          >
            IBUZZ
          </Typography>

          <Box
            sx={{
              flexGrow: 2,
              display: { xs: "flex", md: "none", justifyContent: "flex-end" },
            }}
          >
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
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElMainMenu)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem
                onClick={() => {
                  navigate("/home");
                }}
              >
                <Typography textAlign="center">Home</Typography>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  navigate("/aboutus");
                }}
              >
                <Typography textAlign="center">About Us</Typography>
              </MenuItem>
              <MenuItem onClick={handleServicesOpen}>
                <Typography textAlign="center">Services</Typography>
              </MenuItem>
              <MenuItem onClick={handlePackagesOpen}>
                <Typography textAlign="center">Packages</Typography>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  navigate("/contactus");
                }}
              >
                <Typography textAlign="center">Contact Us</Typography>
              </MenuItem>
            </Menu>
          </Box>

          <Box
            sx={{
              flexGrow: 2,
              display: { xs: "none", md: "flex", justifyContent: "center" },
            }}
          >
            <Button
              onClick={() => {
                navigate("/home");
              }}
              sx={{ my: 2, color: "black", display: "block" }}
            >
              Home
            </Button>
            <Button
              onClick={() => {
                navigate("/aboutus");
              }}
              sx={{ my: 2, color: "black", display: "block" }}
            >
              About Us
            </Button>
            <Button
              // aria-owns={anchorElServicesMenu ? "simple-menu" : undefined}
              // aria-haspopup="true"
              // onClick={handleServicesOpen}
              // onMouseOver={handleServicesOpen}
              // sx={{ my: 2, color: "black" }}
              ref={anchorRef}
              id="composition-button"
              aria-controls={open ? 'composition-menu' : undefined}
              aria-expanded={open ? 'true' : undefined}
              aria-haspopup="true"
              onMouseEnter={handleToggle}
              onMouseLeave={handleToggle}
              style={{color:'#000'}}
            >
              Services

            <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom-start' ? 'left top' : 'left bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onMouseAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                    style={{fontWeight:'bold'}}
                  ><NestedMenuItem
                  leftIcon={<AdbIcon />}
                  label="Digital Marketting"
                  parentMenuOpen={true}
                >
                  <MenuItem
                    onClick={() => {
                      navigate("/seoservices");
                    }}
                  >
                    SEO Services
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      navigate("/smoservices");
                    }}
                  >
                    SMO Services
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      navigate("/googleads");
                    }}
                  >
                    Google Ads{" "}
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      navigate("/branding");
                    }}
                  >
                    Branding
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      navigate("/contentmarketing");
                    }}
                  >
                    Content Marketting
                  </MenuItem>
                </NestedMenuItem>
                <Divider />
                <MenuItem
                onClick={() => {
                  navigate("/webdevelopmentservices");
                }}
              >
                {" "}
                <ListItemIcon>
                  <AdbIcon />
                </ListItemIcon>
                Web Development
              </MenuItem>
              <Divider />
              <MenuItem
                onClick={() => {
                  navigate("/appdevelopment");
                }}
              >
                {" "}
                <ListItemIcon>
                  <AdbIcon />
                </ListItemIcon>
                App Development
              </MenuItem>
              <Divider />
              <MenuItem
                onClick={() => {
                  navigate("/customsoftwaredevelopment");
                }}
              >
                {" "}
                <ListItemIcon>
                  <AdbIcon />
                </ListItemIcon>
                Custom Software Development
              </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>            </Button>
            {/* <ClickAwayListener onMouseAway={handleServicesClose}>
            <Menu
              id="simple-menu"
              anchorEl={anchorElServicesMenu}
              open={Boolean(anchorElServicesMenu)}
              onClose={handleServicesClose}
              MenuListProps={{ onMouseLeave: handleServicesClose }}
              style={{ display: confirm }}
            >
              <NestedMenuItem
                leftIcon={<AdbIcon />}
                label="Digital Marketting"
                parentMenuOpen={Boolean(anchorElServicesMenu)}
              >
                <MenuItem
                  onClick={() => {
                    navigate("/seoservices");
                  }}
                >
                  SEO Services
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    navigate("/smoservices");
                  }}
                >
                  SMO Services
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    navigate("/googleads");
                  }}
                >
                  Google Ads{" "}
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    navigate("/branding");
                  }}
                >
                  Branding
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    navigate("/contentmarketing");
                  }}
                >
                  Content Marketting
                </MenuItem>
              </NestedMenuItem>
              <Divider />
              <MenuItem
                onClick={() => {
                  navigate("/webdevelopmentservices");
                }}
              >
                {" "}
                <ListItemIcon>
                  <AdbIcon />
                </ListItemIcon>
                Web Development
              </MenuItem>
              <Divider />
              <MenuItem
                onClick={() => {
                  navigate("/appdevelopment");
                }}
              >
                {" "}
                <ListItemIcon>
                  <AdbIcon />
                </ListItemIcon>
                App Development
              </MenuItem>
              <Divider />
              <MenuItem
                onClick={() => {
                  navigate("/customsoftwaredevelopment");
                }}
              >
                {" "}
                <ListItemIcon>
                  <AdbIcon />
                </ListItemIcon>
                Custom Software Development
              </MenuItem>
            </Menu>
            </ClickAwayListener> */}
            {/* <Button
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
        <img src={require("../assets/ppc.png")} style={{width:50,display:'flex',justifyContent:'center',alignItems:'center'}}/>
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
        
      </Menu> */}

            <Button
              onClick={() => {
                navigate("/portfolio");
              }}
              sx={{ my: 2, color: "black", display: "block" }}
            >
              Portfolio
            </Button>
            <Button
              onClick={() => {
                navigate("/contactus");
              }}
              sx={{ my: 2, color: "black", display: "block" }}
            >
              Contact Us
            </Button>
          </Box>
          <Box
            sx={{
              display: {
                xs: "none",
                md: "flex",
                justifyContent: "flex-end",
                color: "black",
                animation: "backwards",
              },
            }}
          >
            <CallIcon sx={{ color: "black" }} />
            +918889430333
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
