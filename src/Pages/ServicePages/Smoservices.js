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
import DashboardIcon from '@mui/icons-material/Dashboard';

import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';

import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';

import { Link } from "react-router-dom";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';



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

const Smoservices = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const matches1 = useMediaQuery(theme.breakpoints.down(910));
  const classes=useStyles()

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

  const FaqComponent = () => {
    return Faq.map((item) => {
      return (
        <Accordion className="font-link">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <div
              className="font-link"
              style={{ color: "#2966be", fontSize: "24px" }}
            >
              {item.question}
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <div className="font-link">{item.answer}</div>
          </AccordionDetails>
        </Accordion>
      );
    });
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
          background: "#2966be",
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
            Social Media Optimization
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
            Leverage the power of social media to enhance your brand's presence
            in the digital market through a comprehensive social media marketing
            strategy. Our team, experienced in utilizing social media, will help
            you establish a positive image on various channels including
            creating effective and optimized Facebook and Google Ads, influencer
            marketing, paid Instagram campaigns, and more. The goal is to drive
            results and boost your brand recognition. By utilizing social media,
            we will position your brand for success in the digital market.
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
                borderColor: "#000",
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

      <Grid container spacing={2} style={{display:'flex',minHeight:'100vh'}}>
 <Grid item xs={12} md={2.5} style={{display:matches1?'none':'flex',flexShrink:0,height:'100vh',overflow:'auto',position:"sticky",top:0}}>
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
                  <MenuItem 
                    sx={{border:1,borderWidth:5,marginTop:3,borderColor:'#9cbccb'}} >
                    <ListItemText style={{color:'#000'}}>SMO Services</ListItemText>
                    <ListItemIcon >
                      <ArrowRightAltIcon fontSize="large" style={{color:'#2966be'}}/>
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
                   sx={{border:1,borderWidth:5,marginTop:3,borderColor:'#9cbccb'}} 
                  >
                    <ListItemText >
                      Web Development
                    </ListItemText>
                    <ListItemIcon >
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
  <Grid item xs={12} md={9.5} style={{flexGrow:1}}>


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
            <img src={require("../../assets/vertical_line.png")} width={40} />
            Top-Notch Social Media Marketing
          </Grid>
          <Grid
            style={{
              fontSize: 20,
              width: "87%",
              color: "#525252",
              paddingLeft: 18,
            }}
          >
            Ibuzz Tech Solution is a professional social media marketing agency
            located in Gwalior, Madhya Pradesh. Our services aim to make your
            business more accessible and popular among various social media
            platforms, driving substantial traffic and increasing conversions.
            <br />
            <br />
            By utilizing customer information, our team provides targeted
            advertisements to the right audience, with the goal of capturing
            their attention and converting them into customers. Our social media
            marketing strategies help increase sales and expand your brand's
            reach, providing a productive approach to building a strong online
            presence. If your brand lacks a social media presence, our team can
            assist you in creating a comprehensive strategy that leverages the
            power of social media. Our social media experts have the skills and
            experience to promote and enhance the reputation of your brand
            through effective strategies, tools, and services. Choose Ibuzz Tech
            Solution for a proven and reliable social media marketing solution.
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
          Our Social Media Marketing Services at ibuzz tech solution, Gwalior
          (M.P.)
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
              background: "#2966be",
            }}
          >
            <Grid item xs={12} md={8} style={{ padding: 35 }}>
              <Grid style={{ fontWeight: "bold", color: "#fff", fontSize: 30 }}>
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
        <Grid
          style={{
            fontSize: 20,
            width: "87%",
            color: "#525252",
            paddingLeft: 18,
          }}
        >
          <Grid style={{ display: "flex", fontWeight: 600, marginTop: 20 }}>
            <CheckCircleIcon />
            Strategizing for various social media platforms
          </Grid>
          <Grid style={{ display: "flex", fontWeight: 600, marginTop: 20 }}>
            <CheckCircleIcon />
            Facebook, Twitter, and LinkedIn profile management
          </Grid>
          <Grid style={{ display: "flex", fontWeight: 600, marginTop: 20 }}>
            <CheckCircleIcon />
            YouTube channel management and video upload monitoring
          </Grid>
          <Grid style={{ display: "flex", fontWeight: 600, marginTop: 20 }}>
            <CheckCircleIcon />
            Instagram and Pinterest marketing through relevant content
          </Grid>
          <Grid style={{ display: "flex", fontWeight: 600, marginTop: 20 }}>
            <CheckCircleIcon />
            Snapchat advertising to reach a wider audience
          </Grid>
          <Grid style={{ display: "flex", fontWeight: 600, marginTop: 20 }}>
            <CheckCircleIcon />
            LinkedIn and Facebook profile management for improved custome
            engagement
          </Grid>
          <Grid style={{ display: "flex", fontWeight: 600, marginTop: 20 }}>
            <CheckCircleIcon />
            Collaborating with influencers to boost influencer marketing
          </Grid>
          <Grid style={{ display: "flex", fontWeight: 600, marginTop: 20 }}>
            <CheckCircleIcon />
            Creating SEO-friendly content and posting in targeted environments
          </Grid>
          <Grid style={{ display: "flex", fontWeight: 600, marginTop: 20 }}>
            <CheckCircleIcon />
            Analytics and data reporting to measure success
          </Grid>
          <Grid style={{ display: "flex", fontWeight: 600, marginTop: 20 }}>
            <CheckCircleIcon />
            Brand reputation management to increase brand awareness among target
            audience.
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
            <img src={require("../../assets/vertical_line.png")} width={40} />
            Distinctive Social Media Services
          </Grid>
          <Grid
            style={{
              fontSize: 20,
              width: "87%",
              color: "#525252",
              paddingLeft: 18,
            }}
          >
            <Grid style={{ display: "flex", fontWeight: 600, marginTop: 20 }}>
              <img src={require("../../assets/fairprice.png")} width={40} />
              Fair Price
            </Grid>
            <Grid style={{ paddingLeft: 40 }}>
              Cost-effective prices without compromising with the premium
              quality of the output.
            </Grid>
            <Grid style={{ display: "flex", fontWeight: 600, marginTop: 20 }}>
              <img src={require("../../assets/realtimedata.png")} width={40} />
              Real-Time Data
            </Grid>
            <Grid style={{ paddingLeft: 40 }}>
              Monitoring the real-time statistics via Google Analytics and
              pixel.
            </Grid>
            <Grid style={{ display: "flex", fontWeight: 600, marginTop: 20 }}>
              <img
                src={require("../../assets/tools.png")}
                width={40}
                style={{ paddingRight: 10 }}
              />
              Latest Tools
            </Grid>
            <Grid style={{ paddingLeft: 40 }}>
              Implementation of cutting-edge tools for sighting the accurate
              reports.
            </Grid>
            <Grid style={{ display: "flex", fontWeight: 600, marginTop: 20 }}>
              <img
                src={require("../../assets/seoincorporated.png")}
                width={40}
                style={{ paddingRight: 10 }}
              />
              SEO Incorporated
            </Grid>
            <Grid style={{ paddingLeft: 40 }}>
              Integration of the SEO content
            </Grid>
            <Grid style={{ display: "flex", fontWeight: 600, marginTop: 20 }}>
              <img
                src={require("../../assets/smointegration.png")}
                width={40}
                style={{ paddingRight: 10 }}
              />
              Social Integration
            </Grid>
            <Grid style={{ paddingLeft: 40 }}>
              Social media integration to let customers connect with the trends.
            </Grid>
            <Grid style={{ display: "flex", fontWeight: 600, marginTop: 20 }}>
              <img
                src={require("../../assets/expert.png")}
                width={40}
                style={{ paddingRight: 10 }}
              />
              Team Of Experts
            </Grid>
            <Grid style={{ paddingLeft: 40 }}>
              Well-experienced and highly knowledgeable team of experts.
            </Grid>
            <Grid style={{ display: "flex", fontWeight: 600, marginTop: 20 }}>
              <img
                src={require("../../assets/retinagraphics.png")}
                width={40}
                style={{ paddingRight: 10 }}
              />
              Retina Graphics
            </Grid>
            <Grid style={{ paddingLeft: 40 }}>
              Applicability of the retina graphics mechanism.Team Of Experts
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
                style={{ background: "#bfd1ec", borderRadius: 10, padding: 30 }}
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
                  <ContactPageIcon fontSize="large" sx={{ color: "#2966be" }} />
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
                    <FacebookIcon fontSize="medium" sx={{ color: "#2966be" }} />
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
                    <TwitterIcon fontSize="medium" sx={{ color: "#2966be" }} />
                  </IconButton>
                </Grid>
              </Grid>
              <Grid
                item
                xs={12}
                md={7}
                style={{
                  padding: 30,
                  background: "#2966be",
                  borderRadius: 10,
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Grid style={{ fontSize: 27, color: "#fff" }}>
                  Get in Touch for Assistance
                </Grid>
                <Grid style={{ fontSize: 24, color: "#fff" }}>
                  Call Us at +91-8889430333
                </Grid>
                <Grid style={{ fontSize: 22, color: "#fff" }}>
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
            <img src={require("../../assets/vertical_line.png")} width={40} />
            Unmatched Social Marketing Expertise
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
              As a reputable social media marketing company, ibuzz tech solution
              serves a variety of industries, showcasing our expertise in the
              field. Our comprehensive service offerings prove our capability as
              a top-notch social media marketing service provider.
            </Grid>
            <Grid container spacing={2} style={{ marginTop: 5 }}>
              <Grid
                item
                xs={12}
                md={5}
                style={{ display: "flex", flexDirection: "row" }}
              >
                <Grid style={{ display: "flex", fontWeight: 600 }}>
                  <CheckCircleIcon /> Retail and E-commerce
                </Grid>
              </Grid>
              <Grid
                item
                xs={12}
                md={5}
                style={{ display: "flex", flexDirection: "row" }}
              >
                <Grid style={{ display: "flex", fontWeight: 600 }}>
                  <CheckCircleIcon /> Auto and Manufacturing
                </Grid>
              </Grid>
              <Grid
                item
                xs={12}
                md={5}
                style={{ display: "flex", flexDirection: "row" }}
              >
                <Grid style={{ display: "flex", fontWeight: 600 }}>
                  <CheckCircleIcon /> Food & Beverages
                </Grid>
              </Grid>
              <Grid
                item
                xs={12}
                md={5}
                style={{ display: "flex", flexDirection: "row" }}
              >
                <Grid style={{ display: "flex", fontWeight: 600 }}>
                  <CheckCircleIcon /> Real Estate
                </Grid>
              </Grid>
              <Grid
                item
                xs={12}
                md={5}
                style={{ display: "flex", flexDirection: "row" }}
              >
                <Grid style={{ display: "flex", fontWeight: 600 }}>
                  <CheckCircleIcon /> Education & Training
                </Grid>
              </Grid>
              <Grid
                item
                xs={12}
                md={5}
                style={{ display: "flex", flexDirection: "row" }}
              >
                <Grid style={{ display: "flex", fontWeight: 600 }}>
                  <CheckCircleIcon /> Event and Tickets.
                </Grid>
              </Grid>
              <Grid
                item
                xs={12}
                md={5}
                style={{ display: "flex", flexDirection: "row" }}
              >
                <Grid style={{ display: "flex", fontWeight: 600 }}>
                  <CheckCircleIcon /> Law
                </Grid>
              </Grid>
              <Grid
                item
                xs={12}
                md={5}
                style={{ display: "flex", flexDirection: "row" }}
              >
                <Grid style={{ display: "flex", fontWeight: 600 }}>
                  <CheckCircleIcon /> NGOs and others.
                </Grid>
              </Grid>
              <Grid
                item
                xs={12}
                md={5}
                style={{ display: "flex", flexDirection: "row" }}
              >
                <Grid style={{ display: "flex", fontWeight: 600 }}>
                  <CheckCircleIcon /> Utilities and Energy
                </Grid>
              </Grid>
              <Grid
                item
                xs={12}
                md={5}
                style={{ display: "flex", flexDirection: "row" }}
              >
                <Grid style={{ display: "flex", fontWeight: 600 }}>
                  <CheckCircleIcon />
                  Media & Entertainment.
                </Grid>
              </Grid>
              <Grid
                item
                xs={12}
                md={5}
                style={{ display: "flex", flexDirection: "row" }}
              >
                <Grid style={{ display: "flex", fontWeight: 600 }}>
                  <CheckCircleIcon />
                  Travel and Leisure.
                </Grid>
              </Grid>
              <Grid
                item
                xs={12}
                md={5}
                style={{ display: "flex", flexDirection: "row" }}
              >
                <Grid style={{ display: "flex", fontWeight: 600 }}>
                  <CheckCircleIcon />
                  Telecommunications
                </Grid>
              </Grid>
              <Grid
                item
                xs={12}
                md={5}
                style={{ display: "flex", flexDirection: "row" }}
              >
                <Grid style={{ display: "flex", fontWeight: 600 }}>
                  <CheckCircleIcon />
                  Life Sciences
                </Grid>
              </Grid>
              <Grid
                item
                xs={12}
                md={5}
                style={{ display: "flex", flexDirection: "row" }}
              >
                <Grid style={{ display: "flex", fontWeight: 600 }}>
                  <CheckCircleIcon />
                  Information Technology
                </Grid>
              </Grid>
              <Grid
                item
                xs={12}
                md={5}
                style={{ display: "flex", flexDirection: "row" }}
              >
                <Grid style={{ display: "flex", fontWeight: 600 }}>
                  <CheckCircleIcon /> Healthcare.
                </Grid>
              </Grid>
              <Grid
                item
                xs={12}
                md={5}
                style={{ display: "flex", flexDirection: "row" }}
              >
                <Grid style={{ display: "flex", fontWeight: 600 }}>
                  <CheckCircleIcon />
                  Banking, Finance & Insurance.
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
            <img src={require("../../assets/vertical_line.png")} width={40} />
            Expert Social Media Solutions
          </Grid>
          <Grid
            style={{
              fontSize: 20,
              width: "87%",
              color: "#525252",
              paddingLeft: 18,
            }}
          >
            <Grid style={{ display: "flex", fontWeight: 600, marginTop: 20 }}>
              <img src={require("../../assets/research.png")} width={40} />
              Market Research Functions
            </Grid>
            <Grid style={{ paddingLeft: 40 }}>
              Well-researched market analysis and account management
              functionalities.
            </Grid>
            <Grid style={{ display: "flex", fontWeight: 600, marginTop: 20 }}>
              <img src={require("../../assets/expert.png")} width={40} />
              Panel Of Experts
            </Grid>
            <Grid style={{ paddingLeft: 40 }}>
              The accomplishment of the tasks via the well-experienced
              industry-specific experts
            </Grid>
            <Grid style={{ display: "flex", fontWeight: 600, marginTop: 20 }}>
              <img
                src={require("../../assets/audit.png")}
                width={40}
                style={{ paddingRight: 10 }}
              />
              Constant Social Media Audit
            </Grid>
            <Grid style={{ paddingLeft: 40 }}>
              Conduction of the social media audits at regular intervals.
            </Grid>
            <Grid style={{ display: "flex", fontWeight: 600, marginTop: 20 }}>
              <img
                src={require("../../assets/fairprice.png")}
                width={40}
                style={{ paddingRight: 10 }}
              />
              Fair Cost
            </Grid>
            <Grid style={{ paddingLeft: 40 }}>
              Cost-effective pricing in comparison to competitors
            </Grid>
            <Grid style={{ display: "flex", fontWeight: 600, marginTop: 20 }}>
              <img
                src={require("../../assets/247support.png")}
                width={40}
                style={{ paddingRight: 10 }}
              />
              24*7 Customer Service
            </Grid>
            <Grid style={{ paddingLeft: 40 }}>
              Dedicated customer care service availability even after the
              delivery of the outputs.
            </Grid>
            <Grid style={{ display: "flex", fontWeight: 600, marginTop: 20 }}>
              <img
                src={require("../../assets/strategy1.png")}
                width={40}
                style={{ paddingRight: 10 }}
              />
              Better Strategies
            </Grid>
            <Grid style={{ paddingLeft: 40 }}>
              Value-added strategies for increased business capabilities
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
            <img src={require("../../assets/vertical_line.png")} width={40} />
            Choose iBuzz for Social Media Marketing
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
            Our social media marketing company comprehends the needs of your
            business and takes action to drive sales growth through social media
            traffic. Allow us to serve you with affordable pricing and
            demonstrate our competence for the benefit of your business.
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

export default Smoservices;
