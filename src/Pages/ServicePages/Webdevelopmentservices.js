import React from "react";
import { Grid, Button, Divider, IconButton } from "@mui/material";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Plan, PlanProps } from "pricing-table-react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import { TextField } from "@mui/material";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import SideBar from "./SideBar";
import { useStyles } from "./SideBarCss";
import DashboardIcon from "@mui/icons-material/Dashboard";

import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";

import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";

import { Link } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const Faq = [
  {
    question: "What does IBUZZ actually do?",
    answer:
      "IBUZZ is the industry leading software development and digital marketing company that works with your business to provide software and digital marketing related solutions that can help your business to achieve its goals and objectives.",
  },

  {
    question: "Do my business really need web design and development ?",
    answer:
      "Your website is the first thing that your prospective clients or customers see. With a well-put-together and aesthetically pleasing website, you increase your chances of winning over that crucial client and selling that product. It also benefits your customers user experience,which in turn encourages them to work with you.",
  },

  {
    question:
      "Why is IBUZZ the best Software Development and Digital Marketing firm ?",
    answer:
      "With best-in-class service and experienced staff, IBUZZ is equipped to handle every type of project with expert execution, which means you always get the best business solutions that are bespoke to your business needs.",
  },

  {
    question: "How Can a Beginner Start Web Development ?",
    answer:
      "With best-in-class service and experienced staff,IBUZZ is equipped to handle every type of project with expert execution, which means you always get the best business solutions that are bespoke to your business needs.",
  },
];
const plans = [
  {
    //href: "/Lite",
    price: "9",
    title: "Lite Plan",
    advantages: [
      {
        text: "Clean and ease to use app",
      },
      {
        text: "Simple widget generator",
      },
      {
        text: "Simple widget generator",
      },
    ],

    duration: "month",
    highlightText: "Popular",
    guarantee: "14 days money back guarantee",
    titleDescription: "Individual and small teams",
  },
  {
    //href: "/Lite",
    price: "9",
    title: "Lite Plan",
    advantages: [
      {
        text: "Clean and ease to use app",
      },
      {
        text: "Simple widget generator",
      },
    ],
    duration: "month",
    highlightText: "Popular",
    guarantee: "14 days money back guarantee",
    titleDescription: "Individual and small teams",
  },
  {
    //href: "/Lite",
    price: "9",
    title: "Lite Plan",
    advantages: [
      {
        text: "Clean and ease to use app",
      },
      {
        text: "Simple widget generator",
      },
    ],
    duration: "month",
    highlightText: "Popular",
    guarantee: "14 days money back guarantee",
    titleDescription: "Individual and small teams",
  },
  {
    //href: "/Lite",
    price: "9",
    title: "Lite Plan",
    advantages: [
      {
        text: "Clean and ease to use app",
      },
      {
        text: "Simple widget generator",
      },
    ],
    duration: "month",
    highlightText: "Popular",
    guarantee: "14 days money back guarantee",
    titleDescription: "Individual and small teams",
  },
];

const Webdevelopmentservices = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const matches1 = useMediaQuery(theme.breakpoints.down(910));
  const classes = useStyles();
  const [service, setService] = React.useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [companyName, setCompanyName] = useState("");
  const form = useRef();
  const handleChange = (event) => {
    setService(event.target.value);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_unv208h",
        "template_kr0cfbf",
        form.current,
        "5jpqFVv9N8rs8tCYs"
      )
      .then(
        (result) => {
          console.log(result.p);
        },
        (error) => {
          console.log(error.p);
        }
      );
  };

  return (
    <Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Navbar />
        </Grid>
      </Grid>

      <Grid
        container
        spacing={2}
        style={{
          marginTop: matches ? 1 : 0,
          display: "flex",
          justifyContent: "space-around",
          backgroundImage:'linear-gradient(to right,#513eff, #52e5ff)'
        }}
        className="font-link"
      >
        <Grid
          item
          xs={12}
          md={5}
          style={{ width: "40vw", marginTop: matches ? 60 : 0 }}
        >
          <Grid
            style={{
              fontSize: matches ? 50 : 45,
              color: "#fff",
              marginTop: 15,
              marginBottom: 20,
              display: "block",
            }}
          >
            Website Development and Design
          </Grid>
          <Grid
            style={{
              fontSize: 20,
              color: "#fff",
              marginTop: 30,
              marginBottom: 20,
              display: "block",
            }}
          >
            Ibuzz tech solutions,we understand the importance of having a
            website that accurately represents your brand and provides a
            seamless user experience. Our team of experts specializes in
            designing and developing both static and dynamic websites that are
            not only visually appealing but also easy to navigate. Our focus is
            to create interactive interfaces with minimal bugs to ensure a high
            conversion rate for your business.
          </Grid>
          <Grid style={{ padding: 20 }}>
            <Button
              variant="contained"
              size="large"
              style={{
                borderRadius: 20,
                background: "#fff",
                color: "#2966be",
                border: "solid",
              }}
              href="https://wa.link/clvo86"
            >
              Free Consultation
            </Button>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          md={5}
          style={{
            width: "40vw",
            display: "flex",
            justifyContent: "center",
            paddingBottom: 20,
          }}
        >
          <Grid
            style={{
              width: "70%",
              background: "#fff",
              border: 1,
              borderRadius: 30,
              paddingTop: 10,
              paddingLeft: 20,
              paddingRight: 20,
              boxShadow:'7px 7px 	rgb(220,220,220,0.5)'
            }}
          >
            <Grid
              style={{ fontSize: 24, color: "#2966be", fontWeight: "bold" }}
            >
              Enquiry Form
            </Grid>
            <Grid>
              <form ref={form} onSubmit={sendEmail}>
                <Grid style={{ display: "flex", flexDirection: "column" }}>
                  <Grid>
                    <div>Name</div>
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      value={name}
                      name="client_name"
                      fullWidth
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Grid>
                  <Grid>
                    <div>Company Name</div>
                    <TextField
                      id="outlined-basic"
                      value={companyName}
                      name="project_description"
                      variant="outlined"
                      fullWidth
                      onChange={(e) => setCompanyName(e.target.value)}
                    />
                  </Grid>
                  <Grid>
                    <div>Email</div>
                    <TextField
                      id="outlined-basic"
                      value={email}
                      variant="outlined"
                      name="client_email"
                      fullWidth
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Grid>
                </Grid>

                <Grid>
                  <div>Phone</div>
                  <TextField
                    id="outlined-basic"
                    value={number}
                    variant="outlined"
                    name="client_number"
                    fullWidth
                    onChange={(e) => setNumber(e.target.value)}
                  />
                </Grid>

                <Grid>
                  <div>What Service Do You Want</div>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    name="client_service"
                    value={service}
                    onChange={handleChange}
                    fullWidth
                  >
                    <MenuItem value={"MVP Development"} className="font-link">
                      MVP Development
                    </MenuItem>
                    <MenuItem value={"Static Website Development"}>
                      Static Website Development
                    </MenuItem>
                    <MenuItem value={"Dynamic Website Development"}>
                      Dynamic Website Development
                    </MenuItem>
                    <MenuItem value={"Website Design"}>Website Design</MenuItem>
                    <MenuItem value={"Digital Marketing"}>
                      Digital Marketing
                    </MenuItem>
                    <MenuItem value={"App Development"}>
                      App Development
                    </MenuItem>
                  </Select>
                </Grid>

                <Grid
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    marginTop: 10,
                  }}
                >
                  <Button
                    variant="contained"
                    type="submit"
                    size="medium"
                    style={{
                      background: "#fff",
                      color: "#2966be",
                      boxShadow: "0 0 0 6px rgb(41, 102, 190,0.80)",
                    }}
                  >
                    Submit
                  </Button>
                </Grid>
              </form>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={2}
        style={{ display: "flex", minHeight: "100vh" }}
      >
        <Grid
          item
          xs={12}
          md={2.5}
          style={{
            display:matches1?'none':'flex',
            flexShrink: 0,
            height: "100vh",
            overflow: "auto",
            position: "sticky",
            top: 0,
          }}
        >
          <div className={classes.rootDiv}>
            <div sx={{ width: 400, maxWidth: "100%" }}>
              <MenuList>
                <Link to="/seoservices" className={classes.link}>
                  <MenuItem sx={{border:1,borderWidth:5,marginTop:3,borderColor:'#9cbccb'}} >
                    <ListItemText>SEO Services</ListItemText>
                    <ListItemIcon>
                      <ArrowRightAltIcon />
                    </ListItemIcon>
                  </MenuItem>
                </Link>

                <Link to="/smoservices" className={classes.link}>
                  <MenuItem sx={{border:1,borderWidth:5,marginTop:3,borderColor:'#9cbccb'}} >
                    <ListItemText>SMO Services</ListItemText>
                    <ListItemIcon>
                      <ArrowRightAltIcon />
                    </ListItemIcon>
                  </MenuItem>
                </Link>

                <Link to="/branding" className={classes.link}>
                  <MenuItem sx={{border:1,borderWidth:5,marginTop:3,borderColor:'#9cbccb'}} >
                    <ListItemText>Branding</ListItemText>
                    <ListItemIcon>
                      <ArrowRightAltIcon />
                    </ListItemIcon>
                  </MenuItem>
                </Link>
                <Link to="/contentmarketing" className={classes.link}>
                  <MenuItem sx={{border:1,borderWidth:5,marginTop:3,borderColor:'#9cbccb'}} >
                    <ListItemText>Content Marketing</ListItemText>
                    <ListItemIcon>
                      <ArrowRightAltIcon />
                    </ListItemIcon>
                  </MenuItem>
                </Link>
                <Link to="/googleads" className={classes.link}>
                  <MenuItem sx={{border:1,borderWidth:5,marginTop:3,borderColor:'#9cbccb'}} >
                    <ListItemText>Google Ads</ListItemText>
                    <ListItemIcon>
                      <ArrowRightAltIcon />
                    </ListItemIcon>
                  </MenuItem>
                </Link>
                <Link to="/webdevelopmentservices" className={classes.link}>
                  <MenuItem
                    
                    sx={{border:1,borderWidth:5,marginTop:3,borderColor:'#9cbccb',backgroundImage:'linear-gradient(to right,#513eff, #52e5ff)'}} 
                  >
                    <ListItemText style={{ color: "#fff" }}>
                      Web Development
                    </ListItemText>
                    <ListItemIcon >
                      <ArrowRightAltIcon style={{color:'#fff'}} fontSize="large"/>
                    </ListItemIcon>
                  </MenuItem>
                </Link>
                <Link to="/appdevelopment" className={classes.link}>
                  <MenuItem sx={{border:1,borderWidth:5,marginTop:3,borderColor:'#9cbccb'}} >
                    <ListItemText>Application Development</ListItemText>
                    <ListItemIcon>
                      <ArrowRightAltIcon />
                    </ListItemIcon>
                  </MenuItem>
                </Link>
                <Link to="/customsoftwaredevelopment" className={classes.link}>
                  <MenuItem sx={{border:1,borderWidth:5,marginTop:3,borderColor:'#9cbccb'}} >
                    <ListItemText>Custom Software Development</ListItemText>
                    <ListItemIcon>
                      <ArrowRightAltIcon />
                    </ListItemIcon>
                  </MenuItem>
                </Link>

                <Divider />
              </MenuList>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={9.5} style={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={2}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
            className="font-link"
          >
            <Grid
              item
              xs={12}
              md={12}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                marginTop: 20,
              }}
            >
              <Grid
                style={{
                  display: "flex",
                  fontSize: 29,
                  color: "#2966be",
                  fontWeight: "bold",
                  width: "90%",
                }}
              >
                <img
                  src={require("../../assets/vertical_line.png")}
                  width={40}
                />
                Expert web design and development services
              </Grid>
              <Grid
                style={{
                  fontSize: 20,
                  width: "87%",
                  color: "#525252",
                  paddingLeft: 18,
                }}
              >
                We offer a range of services that include professional web
                design and development to take your business to new heights of
                success. Our team of experts works hard to ensure that your
                website is not only aesthetically pleasing but also functional
                and easy to navigate.
                <br />
                In addition to web design and development, we can also help you
                with other elements of your digital strategy such as creating
                engaging blog content, exciting videos, quality articles,
                promoting your social media platforms, and sending periodic
                emails to keep your customers engaged. We are experienced in
                converting visitors into revenue-generating leads by providing
                easily discoverable, SEO-friendly content.
              </Grid>
            </Grid>
          </Grid>

          <Grid
            container
            spacing={2}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
            className="font-link"
          >
            <Grid
              item
              xs={12}
              md={12}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                marginTop: 20,
              }}
            >
              <Grid
                style={{
                  display: "flex",
                  fontSize: 29,
                  color: "#2966be",
                  fontWeight: "bold",
                  width: "90%",
                }}
              >
                <img
                  src={require("../../assets/vertical_line.png")}
                  width={40}
                />
                Achievable Web Design & Development
              </Grid>
              <Grid
                style={{
                  fontSize: 20,
                  width: "87%",
                  color: "#525252",
                  paddingLeft: 18,
                }}
              >
                <Grid>
                  iBuzz is a premier web development company specializing in
                  professional web design and development services. With a team
                  of industry experts and professionals, we cater to your needs
                  with our extensive capabilities. We are dedicated to
                  delivering exceptional UI design, responsive functionality,
                  and fast site loading speed. Our web design and development
                  services aim to achieve the following goals:
                </Grid>
                <Grid
                  style={{ display: "flex", fontWeight: 600, marginTop: 20 }}
                >
                  <img
                    src={require("../../assets/100responsive.png")}
                    width={40}
                  />
                  100% Responsive
                </Grid>
                <Grid style={{ paddingLeft: 40 }}>
                  Assured responsiveness and applicability to any of the
                  devices, including mobile, tab and laptops.
                </Grid>
                <Grid
                  style={{ display: "flex", fontWeight: 600, marginTop: 20 }}
                >
                  <img
                    src={require("../../assets/impressive.png")}
                    width={40}
                  />
                  Impressive Web Design
                </Grid>
                <Grid style={{ paddingLeft: 40 }}>
                  Eye-catching and impactful web design leading to an instant
                  business upgrade.
                </Grid>
                <Grid
                  style={{ display: "flex", fontWeight: 600, marginTop: 20 }}
                >
                  <img
                    src={require("../../assets/seooptimized.png")}
                    width={40}
                    style={{ paddingRight: 10 }}
                  />
                  SEO optimised
                </Grid>
                <Grid style={{ paddingLeft: 40 }}>
                  We optimised your website with performing keywords in meta
                  tags, title tags alongs with compress image, alt text and
                  advance techniques.
                </Grid>
                <Grid
                  style={{ display: "flex", fontWeight: 600, marginTop: 20 }}
                >
                  <img
                    src={require("../../assets/solution.png")}
                    width={40}
                    style={{ paddingRight: 10 }}
                  />
                  Substantial Solutions
                </Grid>
                <Grid style={{ paddingLeft: 40 }}>
                  Tangible business solution development with cutting-edge
                  technologies.
                </Grid>
                <Grid
                  style={{ display: "flex", fontWeight: 600, marginTop: 20 }}
                >
                  <img
                    src={require("../../assets/onlineshop.png")}
                    width={40}
                    style={{ paddingRight: 10 }}
                  />
                  E-commerce Portal
                </Grid>
                <Grid style={{ paddingLeft: 40 }}>
                  Web and design and development of e-commerce portals.
                </Grid>
                <Grid
                  style={{ display: "flex", fontWeight: 600, marginTop: 20 }}
                >
                  <img
                    src={require("../../assets/requirement.png")}
                    width={40}
                    style={{ paddingRight: 10 }}
                  />
                  Development Per Requirement
                </Grid>
                <Grid style={{ paddingLeft: 40 }}>
                  API and custom web application development meeting to the
                  requirements.
                </Grid>
                <Grid
                  style={{ display: "flex", fontWeight: 600, marginTop: 20 }}
                >
                  <img
                    src={require("../../assets/100responsive.png")}
                    width={40}
                    style={{ paddingRight: 10 }}
                  />
                  Mobile-friendly interface
                </Grid>
                <Grid style={{ paddingLeft: 40 }}>
                  API and custom web application development meeting to the
                  requirements.
                </Grid>
                <Grid
                  style={{ display: "flex", fontWeight: 600, marginTop: 20 }}
                >
                  <img
                    src={require("../../assets/realtime.png")}
                    width={40}
                    style={{ paddingRight: 10 }}
                  />
                  Real-Time Track
                </Grid>
                <Grid style={{ paddingLeft: 40 }}>
                  Real-time analytic interpretation and monitoring.
                </Grid>
                <Grid
                  style={{ display: "flex", fontWeight: 600, marginTop: 20 }}
                >
                  <img
                    src={require("../../assets/smile.png")}
                    width={40}
                    style={{ paddingRight: 10 }}
                  />
                  Customer Relationship Development
                </Grid>
                <Grid style={{ paddingLeft: 40 }}>
                  Customer relationship management portal development.
                </Grid>
                <Grid
                  style={{ display: "flex", fontWeight: 600, marginTop: 20 }}
                >
                  <img
                    src={require("../../assets/interface.png")}
                    width={40}
                    style={{ paddingRight: 10 }}
                  />
                  Advance B2B and B2C interface:
                </Grid>
                <Grid style={{ paddingLeft: 40 }}>
                  Numerous categories of B2B and B2C interface development.
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            container
            spacing={2}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
            className="font-link"
          >
            <Grid
              item
              xs={12}
              md={12}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                marginTop: 20,
              }}
            >
              <Grid
                style={{
                  fontSize: 20,
                  width: "80%",
                  color: "#525252",
                  paddingLeft: 18,
                }}
              >
                <Grid container spacing={2}>
                  <Grid
                    item
                    xs={12}
                    md={5}
                    style={{
                      background: "#9cbccb",
                      borderRadius: 10,
                      padding: 30,
                    }}
                  >
                    <Grid
                      style={{
                        display: "flex",
                        alignItems: "center",
                        color: "#2966be",
                        fontSize: 25,
                        fontWeight: "bold",
                      }}
                    >
                      <ContactPageIcon
                        fontSize="large"
                        sx={{ color: "#2966be" }}
                      />
                      Follow Us
                    </Grid>
                    <Grid style={{ display: "flex", marginLeft: 30 }}>
                      <IconButton
                        style={{
                          background: "#fff",
                          boxShadow: "2px 3px 1px 1px rgb(224, 223, 223,0.50)",
                          marginRight: 12,
                        }}
                      >
                        <FacebookIcon
                          fontSize="medium"
                          sx={{ color: "#2966be" }}
                        />
                      </IconButton>
                      <IconButton
                        style={{
                          background: "#fff",
                          boxShadow: "2px 3px 1px 1px rgb(224, 223, 223,0.50)",
                          marginRight: 12,
                        }}
                      >
                        <InstagramIcon
                          fontSize="medium"
                          sx={{ color: "#2966be" }}
                        />
                      </IconButton>
                      <IconButton
                        style={{
                          background: "#fff",
                          boxShadow: "2px 3px 1px 1px rgb(224, 223, 223,0.50)",
                          marginRight: 12,
                        }}
                      >
                        <TwitterIcon
                          fontSize="medium"
                          sx={{ color: "#2966be" }}
                        />
                      </IconButton>
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={7}
                    style={{
                      padding: 30,
                      borderRadius: 10,
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                      alignItems: "center",
                      backgroundImage:'linear-gradient(to right,#513eff, #52e5ff)'
                    }}
                  >
                    <Grid style={{ fontSize: 27, color: "#fff" }}>
                      Get in Touch for Assistance
                    </Grid>
                    <Grid style={{ fontSize: 24, color: "#fff",marginTop:10 }}>
                      Call Us at +91-8889430333
                    </Grid>
                    <Grid style={{ fontSize: 22, color: "#fff",marginTop:10 }}>
                      Don't hesitate, Request a Quote Today!
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            container
            spacing={2}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
            className="font-link"
          >
            <Grid
              item
              xs={12}
              md={12}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                marginTop: 20,
              }}
            >
              <Grid
                style={{
                  display: "flex",
                  fontSize: 29,
                  color: "#2966be",
                  fontWeight: "bold",
                  width: "90%",
                }}
              >
                <img
                  src={require("../../assets/vertical_line.png")}
                  width={40}
                />
                Comprehensive Web Development Services{" "}
              </Grid>
              <Grid
                container
                spacing={2}
                style={{
                  fontSize: 20,
                  width: "87%",
                  color: "#525252",
                  paddingLeft: 18,
                }}
              >
                <Grid item xs={12} md={5}>
                  <Grid style={{ fontWeight: 600 }}>
                    Custom Web Development
                  </Grid>
                  <Grid style={{ display: "flex", marginTop: 20 }}>
                    <CheckCircleIcon /> Custom Web Development
                  </Grid>
                  <Grid style={{ display: "flex", marginTop: 20 }}>
                    <CheckCircleIcon /> Application Integration Service
                  </Grid>
                  <Grid style={{ display: "flex", marginTop: 20 }}>
                    <CheckCircleIcon /> Work-Flow & Project Management
                  </Grid>
                  <Grid style={{ display: "flex", marginTop: 20 }}>
                    <CheckCircleIcon />
                    Custom Business Application
                  </Grid>
                </Grid>
                <Grid item xs={12} md={5}>
                  <Grid style={{ fontWeight: 600 }}>
                    Web Portal Development
                  </Grid>
                  <Grid style={{ display: "flex", marginTop: 20 }}>
                    <CheckCircleIcon /> Real Estate Portal Development
                  </Grid>
                  <Grid style={{ display: "flex", marginTop: 20 }}>
                    <CheckCircleIcon />
                    Job Portal Development
                  </Grid>
                  <Grid style={{ display: "flex", marginTop: 20 }}>
                    <CheckCircleIcon />
                    Online Travel Portal Development
                  </Grid>
                  <Grid style={{ display: "flex", marginTop: 20 }}>
                    <CheckCircleIcon />
                    Enterprise Portal Development
                  </Grid>
                </Grid>
                <Grid item xs={12} md={5}>
                  <Grid style={{ fontWeight: 600 }}>
                    Open Source Web Integration and Customization
                  </Grid>
                  <Grid style={{ display: "flex", marginTop: 20 }}>
                    <CheckCircleIcon />
                    Ecommerce Platforms Optimisation, Up-Gradations & Migrations
                  </Grid>
                  <Grid style={{ display: "flex", marginTop: 20 }}>
                    <CheckCircleIcon />
                    Shopify, Magento, Woo-Commerce, e-Commerce Solution
                  </Grid>
                  <Grid style={{ display: "flex", marginTop: 20 }}>
                    <CheckCircleIcon /> Custom Modules & Plugins Development
                  </Grid>
                  <Grid style={{ display: "flex", marginTop: 20 }}>
                    <CheckCircleIcon />
                    Joomla, Drupal, WordPress CMS Development
                  </Grid>
                </Grid>
                <Grid item xs={12} md={5}>
                  <Grid style={{ fontWeight: 600 }}>
                    End-to-End eCommerce Solution
                  </Grid>
                  <Grid style={{ display: "flex", marginTop: 20 }}>
                    <CheckCircleIcon /> B2B & Multi-Vendor Marketplace
                  </Grid>
                  <Grid style={{ display: "flex", marginTop: 20 }}>
                    <CheckCircleIcon />
                    e-Commerce Platform Development
                  </Grid>
                  <Grid style={{ display: "flex", marginTop: 20 }}>
                    <CheckCircleIcon />
                    e-Commerce Enterprise Development
                  </Grid>
                  <Grid style={{ display: "flex", marginTop: 20 }}>
                    <CheckCircleIcon />
                    e-Commerce Application Development
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            container
            spacing={2}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              marginTop: 20,
            }}
            className="font-link"
          >
            <Grid
              item
              xs={12}
              style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                marginTop: 20,
              }}
            >
              <Grid
                container
                spacing={2}
                style={{
                  width: "70%",
                  border: 1,
                  borderRadius: 20,
                  backgroundImage:'linear-gradient(to right,#513eff, #52e5ff)',
                  boxShadow:'7px 7px 	rgb(220,220,220,0.5)'
                }}
              >
                <Grid item xs={12} md={8} style={{ padding: 35 }}>
                  <Grid
                    style={{ fontWeight: "bold", color: "#fff", fontSize: 30 }}
                  >
                    Take Expert Consultation!
                  </Grid>
                  <Grid style={{ color: "#fff", fontSize: 20, paddingTop: 20 }}>
                    Arrange a strategic call to receive expert advice for your
                    digital marketing and website development requirements.
                  </Grid>
                  <Grid style={{ paddingTop: 20 }}>
                    <Button
                      variant="outlined"
                      style={{
                        border: 1,
                        borderColor: "#000",
                        color: "#000",
                        background: "#fff",
                        borderRadius: 10,
                      }}
                    >
                      Book Now
                    </Button>
                  </Grid>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={3}
                  style={{ display: "flex", justifyContent: "" }}
                >
                  <img
                    src={require("../../assets/gif.gif")}
                    width={320}
                    style={{ paddingRight: 10 }}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            container
            spacing={2}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
            className="font-link"
          >
            <Grid
              item
              xs={12}
              md={12}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                marginTop: 20,
              }}
            >
              <Grid
                style={{
                  display: "flex",
                  fontSize: 29,
                  color: "#2966be",
                  fontWeight: "bold",
                  width: "90%",
                }}
              >
                <img
                  src={require("../../assets/vertical_line.png")}
                  width={40}
                />
                Aspects of Our Web Creation and Implementation Solutions
              </Grid>
              <Grid
                style={{
                  fontSize: 20,
                  width: "87%",
                  color: "#525252",
                  paddingLeft: 18,
                }}
              >
                <Grid>
                IBUZZ is dedicated to offering extensive capabilities in web design and development to enhance the growth of our clients' businesses.
                  </Grid>
                <Grid
                  style={{ display: "flex", fontWeight: 600, marginTop: 20 }}
                >
                  <img
                    src={require("../../assets/requirement.png")}
                    width={40}
                  />
                  Premium web content
                </Grid>
                <Grid style={{ paddingLeft: 40 }}>
                  Integration of premium web content and tools for enriched
                  customer interaction.
                </Grid>
                <Grid
                  style={{ display: "flex", fontWeight: 600, marginTop: 20 }}
                >
                  <img
                    src={require("../../assets/retinagraphics.png")}
                    width={40}
                  />
                  Well-designed graphics
                </Grid>
                <Grid style={{ paddingLeft: 40 }}>
                  Integration of premium web content and tools for enriched
                  customer interaction.
                </Grid>
                <Grid
                  style={{ display: "flex", fontWeight: 600, marginTop: 20 }}
                >
                  <img
                    src={require("../../assets/question.png")}
                    width={40}
                    style={{ paddingRight: 10 }}
                  />
                  Online inquiry system
                </Grid>
                <Grid style={{ paddingLeft: 40 }}>
                  Availability of inquiry forms and online chatting.
                </Grid>
                <Grid
                  style={{ display: "flex", fontWeight: 600, marginTop: 20 }}
                >
                  <img
                    src={require("../../assets/expert.png")}
                    width={40}
                    style={{ paddingRight: 10 }}
                  />
                  A Team of industrial experts
                </Grid>
                <Grid style={{ paddingLeft: 40 }}>
                  Appointing skilled web design specialists having industry
                  expertise.
                </Grid>
                <Grid
                  style={{ display: "flex", fontWeight: 600, marginTop: 20 }}
                >
                  <img
                    src={require("../../assets/edit.png")}
                    width={40}
                    style={{ paddingRight: 10 }}
                  />
                  Quick update and edit
                </Grid>
                <Grid style={{ paddingLeft: 40 }}>Quick update and edit</Grid>
                <Grid
                  style={{ display: "flex", fontWeight: 600, marginTop: 20 }}
                >
                  <img
                    src={require("../../assets/interface.png")}
                    width={40}
                    style={{ paddingRight: 10 }}
                  />
                  Customer oriented
                </Grid>
                <Grid style={{ paddingLeft: 40 }}>
                  Understanding the client’s requirements having one to one
                  communication with the specialist.
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            container
            spacing={2}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
            className="font-link"
          >
            <Grid
              item
              xs={12}
              md={12}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                marginTop: 20,
              }}
            >
              <Grid
                style={{
                  display: "flex",
                  fontSize: 29,
                  color: "#2966be",
                  fontWeight: "bold",
                  width: "90%",
                }}
              >
                <img
                  src={require("../../assets/vertical_line.png")}
                  width={40}
                />
                The Technologies and Systems We Utilize
              </Grid>
              <Grid
                style={{
                  fontSize: 20,
                  width: "87%",
                  color: "#525252",
                  paddingLeft: 18,
                }}
              >
                To offer the highest level of compatibility to our clients
                around the world, we consistently use a variety of technologies
                and platforms. These include WordPress, Shopify, Amazon, Big
                Commerce, Magento, eBay, Open Cart, and OverStock, among others.
                By utilizing these technologies and platforms, we are able to
                create customized portals that meet our clients' specific needs
                and exceed their expectations.
              </Grid>
            </Grid>
          </Grid>

          <Grid
            container
            spacing={2}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
            className="font-link"
          >
            <Grid
              item
              xs={12}
              md={12}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                marginTop: 20,
              }}
            >
              <Grid
                style={{
                  display: "flex",
                  fontSize: 29,
                  color: "#2966be",
                  fontWeight: "bold",
                  width: "90%",
                }}
              >
                <img
                  src={require("../../assets/vertical_line.png")}
                  width={40}
                />
                The Sectors We Cater To
              </Grid>
              <Grid
                style={{
                  fontSize: 20,
                  width: "87%",
                  color: "#525252",
                  paddingLeft: 18,
                }}
              >
                Our clientele for design and development covers a wide range of
                individuals and organizations, from bloggers to multinational
                corporations and universities to e-commerce development firms.
                Our extensive expertise and understanding are comprised of both
                B2B and B2C clients, with a presence at our headquarters as well
                as in remote locations.
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <Grid style={{ display: "flex", marginTop: 20 }}>
                      <CheckCircleIcon />
                      Education and career.
                    </Grid>
                    <Grid style={{ display: "flex", marginTop: 20 }}>
                      <CheckCircleIcon />
                      Travel and several others
                    </Grid>
                    <Grid style={{ display: "flex", marginTop: 20 }}>
                      <CheckCircleIcon />
                      Social networking
                    </Grid>
                    <Grid style={{ display: "flex", marginTop: 20 }}>
                      <CheckCircleIcon /> Real-estate
                    </Grid>
                    <Grid style={{ display: "flex", marginTop: 20 }}>
                      <CheckCircleIcon />
                      Online shopping/ e-commerce
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={5}>
                    <Grid style={{ display: "flex", marginTop: 20 }}>
                      <CheckCircleIcon />
                      News
                    </Grid>
                    <Grid style={{ display: "flex", marginTop: 20 }}>
                      <CheckCircleIcon />
                      Healthcare & Fitness
                    </Grid>
                    <Grid style={{ display: "flex", marginTop: 20 }}>
                      <CheckCircleIcon />
                      Pharmaceuticals
                    </Grid>
                    <Grid style={{ display: "flex", marginTop: 20 }}>
                      <CheckCircleIcon />
                      Hotels and Restaurants
                    </Grid>
                    <Grid style={{ display: "flex", marginTop: 20 }}>
                      <CheckCircleIcon />
                      Manufacturing and Business of numerous types
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            container
            spacing={2}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
            className="font-link"
          >
            <Grid
              item
              xs={12}
              md={12}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                marginTop: 20,
              }}
            >
              <Grid
                style={{
                  display: "flex",
                  fontSize: 29,
                  color: "#2966be",
                  fontWeight: "bold",
                  width: "90%",
                }}
              >
                <img
                  src={require("../../assets/vertical_line.png")}
                  width={40}
                />
                Distinctive Web Design & Dev Solutions{" "}
              </Grid>
              <Grid
                style={{
                  fontSize: 20,
                  width: "87%",
                  color: "#525252",
                  paddingLeft: 18,
                }}
              >
                <Grid style={{ display: "flex", marginTop: 20 }}>
                  <CheckCircleIcon />
                  Our team of industry-focused web design specialists
                  consistently exceed client expectations.
                </Grid>
                <Grid style={{ display: "flex", marginTop: 20 }}>
                  <CheckCircleIcon />
                  We have a long-standing history of delivering exceptional web
                  design and development.
                </Grid>
                <Grid style={{ display: "flex", marginTop: 20 }}>
                  <CheckCircleIcon />
                  Our cost-effective web design solutions offer the best return
                  on investment.
                </Grid>
                <Grid style={{ display: "flex", marginTop: 20 }}>
                  <CheckCircleIcon />
                  Our cost-effective web design solutions offer the best return
                  on investment.
                </Grid>
                <Grid style={{ display: "flex", marginTop: 20 }}>
                  <CheckCircleIcon />
                  We utilize the latest technology to deliver superior results.
                  Our e-commerce optimization is top-notch.
                </Grid>
                <Grid style={{ display: "flex", marginTop: 20 }}>
                  <CheckCircleIcon />
                  Our highly skilled web technology professionals provide
                  premium services in their field.
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            container
            spacing={2}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
            className="font-link"
          >
            <Grid
              item
              xs={12}
              md={12}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                marginTop: 20,
              }}
            >
              <Grid
                style={{
                  display: "flex",
                  fontSize: 29,
                  color: "#2966be",
                  fontWeight: "bold",
                  width: "90%",
                }}
              >
                <img
                  src={require("../../assets/vertical_line.png")}
                  width={40}
                />
                Expert Web Development Professional
              </Grid>
              <Grid
                style={{
                  fontSize: 20,
                  width: "87%",
                  color: "#525252",
                  paddingLeft: 18,
                  display: "flex",
                  textAlign: "justify",
                }}
              >
                Ibuzz Digital Agency offers comprehensive web design and
                development services with top-notch results at reasonable
                prices. Let us enhance your experience by providing exceptional
                web solutions and leaving you with a sense of satisfaction.
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default Webdevelopmentservices;
