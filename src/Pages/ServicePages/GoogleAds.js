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

const GoogleAds = () => {
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
            Google Ads
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
            Revamp your brand's image through carefully planned and executed
            pay-per-click advertising campaigns. As a creatively oriented
            company, we steer your brand towards success by creating PPC
            campaigns that not only expand your brand's reach on the global
            stage, but also drive growth and increase recognition.
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
                    marginBottom: 10,
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
                  <MenuItem
                   
                    sx={{border:1,borderWidth:5,marginTop:3,borderColor:'#9cbccb',backgroundImage:'linear-gradient(to right,#513eff, #52e5ff)'}} 
                  >
                    <ListItemText style={{ color: "#fff" }}>
                      Google Ads
                    </ListItemText>
                    <ListItemIcon >
                      <ArrowRightAltIcon fontSize="large" style={{color:'#fff'}}/>
                    </ListItemIcon>
                  </MenuItem>
                </Link>
                <Link to="/webdevelopmentservices" className={classes.link}>
                  <MenuItem sx={{border:1,borderWidth:5,marginTop:3,borderColor:'#9cbccb'}} >
                    <ListItemText>Web Development</ListItemText>
                    <ListItemIcon>
                      <ArrowRightAltIcon />
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
                Google Ads Campaigns
              </Grid>
              <Grid
                style={{
                  fontSize: 20,
                  width: "87%",
                  color: "#525252",
                  paddingLeft: 18,
                }}
              >
                Gaining visibility and prominence on search engines is a
                challenging feat. To secure the top spot in paid search results,
                brands must implement effective advertising strategies,
                including utilizing PPC services. This not only saves time, but
                also boosts online sales.
                <br />
                <br />
                Let's take a moment to clarify these two concepts.
                <br />
                <br />
                Paid ads refer to paying a search engine, such as Google, to
                feature your website prominently in search results. PPC
                (Pay-Per-Click), on the other hand, refers to the cost incurred
                for each click on the ad. These techniques work together to
                enhance your online presence, drive sales, and generate leads.
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
                Google Ads Paid Advertising Agency
              </Grid>
              <Grid
                style={{
                  fontSize: 20,
                  width: "87%",
                  color: "#525252",
                  paddingLeft: 18,
                }}
              >
                To achieve optimal results from a Google ads strategy and to
                execute it effectively, it's crucial to entrust the process to a
                professional advertising agency.
                <br />
                <br />
                That's where we come in.
                <br />
                <br />
                At IBUZZ, we excel in connecting brands with their online
                presence. With our expertise and experience, we provide you with
                effective and targeted solutions to significantly boost sales,
                expand your customer base, drive traffic to your website, and
                raise awareness about your brand. We recognize that every
                business is unique and has its own specific needs, which is why
                we work closely with you to create custom strategies that fit
                your brand and give you a competitive advantage in the online
                market. Our dedicated teams continuously push the limits to turn
                potential customers into loyal buyers and offer a flexible
                approach within your desired timeframe.
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
                What Are the Services We Offer?
              </Grid>
              <Grid
                style={{
                  fontSize: 20,
                  width: "87%",
                  color: "#525252",
                  paddingLeft: 18,
                }}
              >
                <Grid
                  style={{ display: "flex", fontWeight: 600, marginTop: 20 }}
                >
                  <img src={require("../../assets/searchads.png")} width={40} />
                  Search Ads
                </Grid>
                <Grid style={{ paddingLeft: 40 }}>
                  Creating successful search campaigns that help you reach your
                  potential buyer in a matter of few clicks.
                </Grid>
                <Grid
                  style={{ display: "flex", fontWeight: 600, marginTop: 20 }}
                >
                  <img
                    src={require("../../assets/ecommercemanagement.png")}
                    width={40}
                  />
                  E-commerce Management
                </Grid>
                <Grid style={{ paddingLeft: 40 }}>
                  Tailor made strategies to manage your e-commerce account and
                  help you optimise sales and advertising process.
                </Grid>
                <Grid
                  style={{ display: "flex", fontWeight: 600, marginTop: 20 }}
                >
                  <img
                    src={require("../../assets/retargetting.png")}
                    width={40}
                    style={{ paddingRight: 10 }}
                  />
                  Retargeting
                </Grid>
                <Grid style={{ paddingLeft: 40 }}>
                  Creating viable remarketingplans to help you convert customers
                  who have expressed interest in your products.
                </Grid>
                <Grid
                  style={{ display: "flex", fontWeight: 600, marginTop: 20 }}
                >
                  <img
                    src={require("../../assets/displayads.png")}
                    width={40}
                    style={{ paddingRight: 10 }}
                  />
                  Display Advertising
                </Grid>
                <Grid style={{ paddingLeft: 40 }}>
                  Helping you funnel more visitors to your website by creating a
                  relevant and attractive display ad, targeting relevant
                  consumer base.
                </Grid>
                <Grid
                  style={{ display: "flex", fontWeight: 600, marginTop: 20 }}
                >
                  <img
                    src={require("../../assets/shoppingads.png")}
                    width={40}
                    style={{ paddingRight: 10 }}
                  />
                  Shopping Ads
                </Grid>
                <Grid style={{ paddingLeft: 40 }}>
                  Providing result oriented shopping ads solutions to increase
                  online purchases for your E-commerce website.
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
              marginTop: 5,
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
                      background: "#bfd1ec",
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
                What are our areas of specialization in services?
              </Grid>
              <Grid
                style={{
                  fontSize: 20,
                  width: "87%",
                  color: "#525252",
                  paddingLeft: 18,
                }}
              >
                <Grid
                  style={{ display: "flex", fontWeight: 600, marginTop: 20 }}
                >
                  <img
                    src={require("../../assets/adsmanagement.png")}
                    width={40}
                  />
                  Google Ads Management
                </Grid>
                <Grid style={{ paddingLeft: 40 }}>
                  Fine tune your existing Google Ad campaigns or create new ones
                  for a focussed approach towards targeting customers.
                </Grid>
                <Grid
                  style={{ display: "flex", fontWeight: 600, marginTop: 20 }}
                >
                  <img src={require("../../assets/ppcaudit.png")} width={40} />
                  PPC Audit Service
                </Grid>
                <Grid style={{ paddingLeft: 40 }}>
                  Fine tune your existing Google Ad campaigns or create new ones
                  for a focussed approach towards targeting customers.
                </Grid>
                <Grid
                  style={{ display: "flex", fontWeight: 600, marginTop: 20 }}
                >
                  <img
                    src={require("../../assets/reportss.png")}
                    width={40}
                    style={{ paddingRight: 10 }}
                  />
                  Reporting
                </Grid>
                <Grid style={{ paddingLeft: 40 }}>
                  Always stay connected with your progress with our reporting
                  tools.
                </Grid>
                <Grid
                  style={{ display: "flex", fontWeight: 600, marginTop: 20 }}
                >
                  <img
                    src={require("../../assets/wellresearch.png")}
                    width={40}
                    style={{ paddingRight: 10 }}
                  />
                  Competitor research
                </Grid>
                <Grid style={{ paddingLeft: 40 }}>
                  We design your paid ad campaigns after an extensive market
                  research involving your competitors and the kind of keywords
                  they use.
                </Grid>
                <Grid
                  style={{ display: "flex", fontWeight: 600, marginTop: 20 }}
                >
                  <img
                    src={require("../../assets/key.png")}
                    width={40}
                    style={{ paddingRight: 10 }}
                  />
                  Keyword research
                </Grid>
                <Grid style={{ paddingLeft: 40 }}>
                  Drive maximum traffic and increase your online reach with the
                  help of our expert team that helps you pick the correct
                  keywords for your website.
                </Grid>
                <Grid
                  style={{ display: "flex", fontWeight: 600, marginTop: 20 }}
                >
                  <img
                    src={require("../../assets/smmnet.png")}
                    width={40}
                    style={{ paddingRight: 10 }}
                  />
                  Social Media Ad Services
                </Grid>
                <Grid style={{ paddingLeft: 40 }}>
                  Build on your social media presence with us and create a loyal
                  follower base.
                </Grid>
                <Grid
                  style={{ display: "flex", fontWeight: 600, marginTop: 20 }}
                >
                  <img
                    src={require("../../assets/retention.png")}
                    width={40}
                    style={{ paddingRight: 10 }}
                  />
                  Remarketing and Retargeting Services
                </Grid>
                <Grid style={{ paddingLeft: 40 }}>
                  Retarget your past costumers with our services to motivate
                  them to revisit your website and make a purchase.
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
              style={{
                display: "flex",
                fontSize: 29,
                color: "#2966be",
                fontWeight: "bold",
                width: "87%",
              }}
            >
              <img src={require("../../assets/vertical_line.png")} width={40} />
              What Are The Industries We Serve?
            </Grid>
            <Grid
              style={{
                fontSize: 20,
                width: "87%",
                color: "#525252",
                paddingLeft: 18,
              }}
            >
              At IBUZZ, we provide services to industries of diverse nature. We
              collaborate with our clients and engage in open discussions to
              find creative solutions that enhance the effectiveness of our
              services. Our clientele encompasses various industries, including
              (list of industries).
              <Grid container spacing={2}>
                <Grid item xs={12} style={{ display: "flex", fontWeight: 600 }}>
                  <CheckCircleIcon />
                  Healthcare, Health, and Fitness
                </Grid>
                <Grid item xs={12} style={{ display: "flex", fontWeight: 600 }}>
                  <CheckCircleIcon />
                  Hospitality
                </Grid>
                <Grid item xs={12} style={{ display: "flex", fontWeight: 600 }}>
                  <CheckCircleIcon />
                  Manufacturing and Business of numerous types
                </Grid>
                <Grid item xs={12} style={{ display: "flex", fontWeight: 600 }}>
                  <CheckCircleIcon />
                  Travel and several others
                </Grid>
                <Grid item xs={12} style={{ display: "flex", fontWeight: 600 }}>
                  <CheckCircleIcon />
                  Education and career.
                </Grid>
                <Grid item xs={12} style={{ display: "flex", fontWeight: 600 }}>
                  <CheckCircleIcon />
                  Online shopping/ e-commerce
                </Grid>
                <Grid item xs={12} style={{ display: "flex", fontWeight: 600 }}>
                  <CheckCircleIcon />
                  Online shopping/ e-commerce
                </Grid>
                <Grid item xs={12} style={{ display: "flex", fontWeight: 600 }}>
                  <CheckCircleIcon />
                  Online shopping/ e-commerce
                </Grid>
              </Grid>
            </Grid>
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
                What makes Us Unique
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
                  At IBUZZ, we craft SEM and PPC tactics that are not only
                  tailored to your brand, but ensure exceptional online success.
                  We assist in revamping your brand's online image and develop
                  strategies that are forward-thinking by collaborating with
                  you, not just executing for you. A few of the factors that set
                  us apart include:
                </Grid>
                <Grid
                  style={{ display: "flex", fontWeight: 600, marginTop: 20 }}
                >
                  <img src={require("../../assets/expert.png")} width={40} />
                  Experienced and Dedicated team
                </Grid>
                <Grid style={{ paddingLeft: 40 }}>
                  With years of experience in their pockets, our team will work
                  round the clock to build the perfect PPC campaign for your
                  brand. You will be given an SEM and PPC expert, a project
                  manager and an analyst who will monitor the results
                  continuously.
                </Grid>
                <Grid
                  style={{ display: "flex", fontWeight: 600, marginTop: 20 }}
                >
                  <img
                    src={require("../../assets/performancetracking.png")}
                    width={40}
                  />
                  Performance Tracking
                </Grid>
                <Grid style={{ paddingLeft: 40 }}>
                  We will always keep you in the loop of things and send you
                  regular updates regarding the performance of your website.
                  These updates can come daily, weekly or monthly depending on
                  your preference.
                </Grid>
                <Grid
                  style={{ display: "flex", fontWeight: 600, marginTop: 20 }}
                >
                  <img
                    src={require("../../assets/innovativesolution.png")}
                    width={40}
                    style={{ paddingRight: 10 }}
                  />
                  Innovative Solutions
                </Grid>
                <Grid style={{ paddingLeft: 40 }}>
                  For us at IBUZZ, each project is different, each brand is
                  different and therefore the solutions we offer are also unique
                  and different. These different projects give us an opportunity
                  to come up with innovative solutions which help us grow along
                  with our clients.
                </Grid>
                <Grid
                  style={{ display: "flex", fontWeight: 600, marginTop: 20 }}
                >
                  <img
                    src={require("../../assets/fairprice.png")}
                    width={40}
                    style={{ paddingRight: 10 }}
                  />
                  Transparent Pricing
                </Grid>
                <Grid style={{ paddingLeft: 40 }}>
                  We respect your time and money that you invest with us and
                  therefore our pricing policies are completely transparent and
                  client friendly.
                </Grid>
                <Grid
                  style={{ display: "flex", fontWeight: 600, marginTop: 20 }}
                >
                  <img
                    src={require("../../assets/customize.png")}
                    width={40}
                    style={{ paddingRight: 10 }}
                  />
                  Customized Ad plans
                </Grid>
                <Grid style={{ paddingLeft: 40 }}>
                  We create plans that are specific to your brand. Our dedicated
                  teams put their heads together to customize each campaign, so
                  you get the most optimised results.
                </Grid>
                <Grid
                  style={{ display: "flex", fontWeight: 600, marginTop: 20 }}
                >
                  <img
                    src={require("../../assets/customersupport.png")}
                    width={40}
                    style={{ paddingRight: 10 }}
                  />
                  Excellent Customer Support
                </Grid>
                <Grid style={{ paddingLeft: 40 }}>
                  Our customer executives are always there to assist you,
                  whenever, wherever, to maintain perfect communication and
                  clientsatisfaction.
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
                Why Choose Our Paid Advertising Services?
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
                At IBUZZ, our clients are our top priority and we strive to
                establish long-lasting business partnerships. We take the time
                to understand your goals and put forth dedicated efforts to
                provide targeted solutions. Contact us to experience expert
                management of your online platform. You deserve exceptional
                service and we specialize in delivering it.
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

export default GoogleAds;
