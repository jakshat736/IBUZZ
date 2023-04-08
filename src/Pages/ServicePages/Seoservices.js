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

const Seoservices = () => {
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
            Search Engine Optimization
          </Grid>
          <Grid
            style={{
              fontSize: 25,
              color: "#fff",
              marginTop: 15,
              marginBottom: 20,
              display: "block",
            }}
          >
            Rank on the First Page of Google with Ibuzz Tech Solution SEO
            Services
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
            Maximize your online presence with our expert SEO strategies that
            are tailored to the latest algorithms. Our team knows how to choose
            the right keywords and implement effective SEO plans to drive
            results. With Ibuzz Tech Solution, your brand will continue to grow
            and reach new heights as we help you achieve a higher search engine
            ranking. Partner with us to take your online visibility to the next
            level.
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


<Grid container spacing={2} style={{display:'flex',minHeight:'100vh'}}>
 <Grid item xs={12} md={2.5} style={{display:matches1?'none':'flex',flexShrink:0,height:'100vh',overflow:'auto',position:"sticky",top:0}}>
 <div className={classes.rootDiv}>
    
    <div sx={{ width: 400, maxWidth:'100%'}}>
  
    
      <MenuList>
      
        <Link to="/seoservices" className={classes.link}>
        <MenuItem sx={{border:1,borderWidth:5,marginTop:3,borderColor:'#9cbccb',backgroundImage:'linear-gradient(to right,#513eff, #52e5ff)'}} >
       
          <ListItemText style={{color:'#fff'}}>SEO Services</ListItemText>
          <ListItemIcon >
            <ArrowRightAltIcon style={{color:"#fff",}} fontSize='large'/>
          </ListItemIcon>
        </MenuItem>
          </Link>

          <Link to="/smoservices" className={classes.link}>
        <MenuItem sx={{border:1,borderWidth:5,marginTop:3,borderColor:'#9cbccb'}} >
          <ListItemText >SMO Services</ListItemText>  
          <ListItemIcon >
            <ArrowRightAltIcon/>
          </ListItemIcon>
        </MenuItem>
        </Link>

        <Link to="/branding" className={classes.link}>
        <MenuItem sx={{border:1,borderWidth:5,marginTop:3,borderColor:'#9cbccb'}}>
          <ListItemText>Branding</ListItemText>
          <ListItemIcon>
            <ArrowRightAltIcon/>
          </ListItemIcon>
          
        </MenuItem>
        </Link>
        <Link to="/contentmarketing" className={classes.link}>
        <MenuItem sx={{border:1,borderWidth:5,marginTop:3,borderColor:'#9cbccb'}}>
        
          <ListItemText>Content Marketing</ListItemText>
          <ListItemIcon>
            <ArrowRightAltIcon/>
          </ListItemIcon>
        </MenuItem>
        </Link>
        <Link to="/googleads" className={classes.link}>
        <MenuItem sx={{border:1,borderWidth:5,marginTop:3,borderColor:'#9cbccb'}}> 
          
          <ListItemText>Google Ads</ListItemText>
          <ListItemIcon>
            <ArrowRightAltIcon/>
          </ListItemIcon>
        </MenuItem>
        </Link>
        <Link to="/webdevelopmentservices" className={classes.link}>
        <MenuItem sx={{border:1,borderWidth:5,marginTop:3,borderColor:'#9cbccb'}}>
         
          <ListItemText>Web Development</ListItemText>
          <ListItemIcon>
            <ArrowRightAltIcon/>
          </ListItemIcon>
        </MenuItem>
        </Link>
        <Link to="/appdevelopment" className={classes.link}>
        <MenuItem sx={{border:1,borderWidth:5,marginTop:3,borderColor:'#9cbccb'}}>
          
          <ListItemText>Application Development</ListItemText>
          <ListItemIcon>
            <ArrowRightAltIcon/>
          </ListItemIcon>
        </MenuItem>
        </Link>
        <Link to="/customsoftwaredevelopment" className={classes.link}>
        <MenuItem sx={{border:1,borderWidth:5,marginTop:3,borderColor:'#9cbccb'}}>
         
          <ListItemText>Custom Software Development</ListItemText>
          <ListItemIcon>
            <ArrowRightAltIcon/>
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
            Boost Business with SEO
          </Grid>
          <Grid
            style={{
              fontSize: 20,
              width: "87%",
              color: "#525252",
              paddingLeft: 18,
            }}
          >
            Boost Your Business with Ibuzz Tech Solution Professional SEO
            Services Attract new customers and grow your business organically
            with our professional SEO services. Our team of experienced and
            skilled SEO experts will create effective strategies to help your
            website rank higher in search results for targeted keywords. We go
            above and beyond to deliver exceptional results, catering to the
            unique needs of your business. With years of experience in the
            industry, Ibuzz Tech Solution offers the best SEO services at a
            cost-effective price. Contact us today to take your online presence
            to the next level.
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
            Achieve Business Goals with SEO
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
              Ibuzz is dedicated to helping businesses grow through effective
              and efficient SEO strategies. The company offers a range of
              services designed to improve visibility, increase traffic, and
              boost online presence. Whether you're looking to optimize your
              website, improve your search engine rankings, or reach new
              audiences.
            </Grid>
            <Grid style={{ display: "flex", fontWeight: 600, marginTop: 20 }}>
              <img
                src={require("../../assets/websiteseoaudit.png")}
                width={40}
              />
              Website SEO Audit
            </Grid>
            <Grid style={{ paddingLeft: 40 }}>
              Get detailed SEO audit to get insights into all the on-page
              strategies
            </Grid>
            <Grid style={{ display: "flex", fontWeight: 600, marginTop: 20 }}>
              <img
                src={require("../../assets/qualitycontent.png")}
                width={40}
              />
              Quality content
            </Grid>
            <Grid style={{ paddingLeft: 40 }}>
              Development of the SEO content strategy with selected keywords
              perfoming in your industry
            </Grid>
            <Grid style={{ display: "flex", fontWeight: 600, marginTop: 20 }}>
              <img
                src={require("../../assets/key.png")}
                width={40}
                style={{ paddingRight: 10 }}
              />
              Performing keywords
            </Grid>
            <Grid style={{ paddingLeft: 40 }}>
              Keyword research and analysis for improved visibility of the
              website / blogs
            </Grid>
            <Grid style={{ display: "flex", fontWeight: 600, marginTop: 20 }}>
              <img
                src={require("../../assets/highvisibility.png")}
                width={40}
                style={{ paddingRight: 10 }}
              />
              Better Visibility
            </Grid>
            <Grid style={{ paddingLeft: 40 }}>
              On-page and off-page optimization for better ranking and
              visibility
            </Grid>
            <Grid style={{ display: "flex", fontWeight: 600, marginTop: 20 }}>
              <img
                src={require("../../assets/report.png")}
                width={40}
                style={{ paddingRight: 10 }}
              />
              Business Report Monthly
            </Grid>
            <Grid style={{ paddingLeft: 40 }}>
              Generating the monthly SEO reports for formulating new optimizing
              strategies
            </Grid>
            <Grid style={{ display: "flex", fontWeight: 600, marginTop: 20 }}>
              <img
                src={require("../../assets/google.png")}
                width={40}
                style={{ paddingRight: 10 }}
              />
              Google Business Listing
            </Grid>
            <Grid style={{ paddingLeft: 40 }}>
              Creating and optimizing google business listing account.
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
            Top Rankings with Ibuzz SEO
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
              Ibuzz is dedicated to providing top-notch digital marketing and
              SEO services to help businesses succeed. The company is committed
              to using smart and strategic techniques to improve search engine
              rankings and provide valuable insights into customer behavior. The
              comprehensive SEO processes offered by Ibuzz include:
            </Grid>
            <Grid style={{ display: "flex", fontWeight: 600, marginTop: 20 }}>
              <img src={require("../../assets/clientbased.png")} width={40} />
              Client-based approach
            </Grid>
            <Grid style={{ paddingLeft: 40 }}>
              An in-depth study of the client’s requirements.
            </Grid>
            <Grid style={{ display: "flex", fontWeight: 600, marginTop: 20 }}>
              <img
                src={require("../../assets/websitearch.png")}
                width={40}
                style={{ paddingRight: 10 }}
              />
              Website Architecture Optimization
            </Grid>
            <Grid style={{ paddingLeft: 40 }}>
              Needful analysis and implementation of the website structure,
              contents, and SEO.
            </Grid>
            <Grid style={{ display: "flex", fontWeight: 600, marginTop: 20 }}>
              <img
                src={require("../../assets/key.png")}
                width={40}
                style={{ paddingRight: 10 }}
              />
              Dense Keywords
            </Grid>
            <Grid style={{ paddingLeft: 40 }}>
              Organizing the examination regarding keywords and competitor’s
              research.
            </Grid>
            <Grid style={{ display: "flex", fontWeight: 600, marginTop: 20 }}>
              <img
                src={require("../../assets/report1.png")}
                width={40}
                style={{ paddingRight: 10 }}
              />
              Reports Generating Methods
            </Grid>
            <Grid style={{ paddingLeft: 40 }}>
              Analyzing the website performance and generating weekly or monthly
              reports.
            </Grid>
            <Grid style={{ display: "flex", fontWeight: 600, marginTop: 20 }}>
              <img
                src={require("../../assets/google.png")}
                width={40}
                style={{ paddingRight: 10 }}
              />
              Google My Business(GMB) Page Setup and Optimization
            </Grid>
            <Grid style={{ paddingLeft: 40 }}>
              Setting up and analyzing using the tools, including Google
              Webmaster, Google Analytics, and implementing the Goal Conversion
              Tracking Mechanism.
            </Grid>
            <Grid style={{ display: "flex", fontWeight: 600, marginTop: 20 }}>
              <img
                src={require("../../assets/strategy.png")}
                width={40}
                style={{ paddingRight: 10 }}
              />
              Better SEO Strategies
            </Grid>
            <Grid style={{ paddingLeft: 40 }}>
              Implementation of the SEO strategies, including On-page, Off-Page,
              and Content Writing & Marketing.
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
              boxShadow:'7px 7px 	rgb(220,220,220,0.7)'
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
            Ibuzz Tech: Trend Analysis and Industry Solutions
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
            With Ibuzz, businesses in various industries can enjoy the benefits of professional and effective SEO services tailored to their specific needs. Our team of experts is dedicated to helping businesses in all industries achieve their goals and stay ahead of the competition.
            </Grid>
            <Button
              style={{
                cursor: "default",
                width: "20%",
                border: "1px solid",
                marginRight: 20,
                marginTop: 10,
                borderColor: "#e0dfdf",
                color: "#000",
                boxShadow: "2px 3px 1px 1px #e0dfdf",
              }}
            >
              Entertainment
            </Button>
            <Button
              style={{
                cursor: "default",
                width: "20%",
                border: "1px solid",
                marginRight: 20,
                marginTop: 10,
                borderColor: "#e0dfdf",
                color: "#000",
                boxShadow: "2px 3px 1px 1px #e0dfdf",
              }}
            >
              Healthcare
            </Button>
            <Button
              style={{
                cursor: "default",
                width: "20%",
                border: "1px solid",
                marginRight: 20,
                marginTop: 10,
                borderColor: "#e0dfdf",
                color: "#000",
                boxShadow: "2px 3px 1px 1px #e0dfdf",
              }}
            >
              Retail & Wholesale
            </Button>
            <Button
              style={{
                cursor: "default",
                width: "20%",
                border: "1px solid",
                marginRight: 20,
                marginTop: 10,
                borderColor: "#e0dfdf",
                color: "#000",
                boxShadow: "2px 3px 1px 1px #e0dfdf",
              }}
            >
              Pharmaceuticals
            </Button>
            <Button
              style={{
                cursor: "default",
                width: "20%",
                border: "1px solid",
                marginRight: 20,
                marginTop: 10,
                borderColor: "#e0dfdf",
                color: "#000",
                boxShadow: "2px 3px 1px 1px #e0dfdf",
              }}
            >
              Professional
            </Button>
            <Button
              style={{
                cursor: "default",
                width: "20%",
                border: "1px solid",
                marginRight: 20,
                marginTop: 10,
                borderColor: "#e0dfdf",
                color: "#000",
                boxShadow: "2px 3px 1px 1px #e0dfdf",
              }}
            >
              Real-Estate
            </Button>
            <Button
              style={{
                cursor: "default",
                width: "20%",
                border: "1px solid",
                marginRight: 20,
                marginTop: 10,
                borderColor: "#e0dfdf",
                color: "#000",
                boxShadow: "2px 3px 1px 1px #e0dfdf",
              }}
            >
              Career
            </Button>
            <Button
              style={{
                cursor: "default",
                width: "20%",
                border: "1px solid",
                marginRight: 20,
                marginTop: 10,
                borderColor: "#e0dfdf",
                color: "#000",
                boxShadow: "2px 3px 1px 1px #e0dfdf",
              }}
            >
              Hospitality
            </Button>
            <Button
              style={{
                cursor: "default",
                width: "20%",
                border: "1px solid",
                marginRight: 20,
                marginTop: 10,
                borderColor: "#e0dfdf",
                color: "#000",
                boxShadow: "2px 3px 1px 1px #e0dfdf",
              }}
            >
              S/W Development
            </Button>
            <Button
              style={{
                cursor: "default",
                width: "20%",
                border: "1px solid",
                marginRight: 20,
                marginTop: 10,
                borderColor: "#e0dfdf",
                color: "#000",
                boxShadow: "2px 3px 1px 1px #e0dfdf",
              }}
            >
              Automotive
            </Button>
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
            Our Distinctiveness in SEO Services
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
              Fostering intelligent organic business expansion through
              insightful SEO tactics.
            </Grid>
            <Grid style={{ display: "flex", fontWeight: 600, marginTop: 20 }}>
              <CheckCircleIcon />
              Facilitating content that brings value to the customer experience.
            </Grid>
            <Grid style={{ display: "flex", fontWeight: 600, marginTop: 20 }}>
              <CheckCircleIcon />
              Focused on enhancing brand recognition and brand promotion.
            </Grid>
            <Grid style={{ display: "flex", fontWeight: 600, marginTop: 20 }}>
              <CheckCircleIcon />
              Increasing organic traffic, sales leads, and improved revenue.
            </Grid>
            <Grid style={{ display: "flex", fontWeight: 600, marginTop: 20 }}>
              <CheckCircleIcon />
              Prioritizing thorough keyword analysis and necessary targeting for
              stronger customer engagement.
            </Grid>
            <Grid style={{ display: "flex", fontWeight: 600, marginTop: 20 }}>
              <CheckCircleIcon />
              Execution of On-Page, Off-Page, and comprehensive Technical SEO
              elements.
            </Grid>
            <Grid style={{ display: "flex", fontWeight: 600, marginTop: 20 }}>
              <CheckCircleIcon />
              Building links and analyzing competitors for optimal business
              growth.
            </Grid>
            <Grid style={{ display: "flex", fontWeight: 600, marginTop: 20 }}>
              <CheckCircleIcon />
              Budget-friendly packages with continued customer support even
              after completion.
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
            <img src={require("../../assets/vertical_line.png")} width={40} />
            The Process of Our SEO Services.
          </Grid>
          <Grid
            style={{
              fontSize: 20,
              width: "87%",
              color: "#525252",
              paddingLeft: 18,
            }}
          >
            <Grid container spacing={2} style={{}}>
              <Grid
                item
                xs={12}
                md={5}
                style={{ display: "flex", flexDirection: "row" }}
              >
                <div
                  style={{
                    padding: "0 5px",
                    borderRadius: "5px",
                    background: "#2966be",
                    width: "5%",
                    height: 30,
                    color: "#fff",
                    fontWeight: "bold",
                    marginRight: 10,
                  }}
                >
                  01
                </div>
                <Grid
                  style={{
                    width: "85%",
                    display: "flex",
                    flexDirection: "column",
                    color: "#000",
                  }}
                >
                  Understand Customer Expectations
                  <Grid style={{ color: "#525252" }}>
                    We evaluate your ideas and goals by perusing your business
                    niche to prove our potential as the best SEO provider in
                    Gwalior
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                xs={12}
                md={5}
                style={{ display: "flex", flexDirection: "row" }}
              >
                <div
                  style={{
                    padding: "0 5px",
                    borderRadius: "5px",
                    background: "#2966be",
                    width: "5%",
                    height: 30,
                    color: "#fff",
                    fontWeight: "bold",
                    marginRight: 10,
                  }}
                >
                  02
                </div>
                <Grid
                  style={{
                    width: "85%",
                    display: "flex",
                    flexDirection: "column",
                    color: "#000",
                  }}
                >
                  On-Page SEO
                  <Grid style={{ color: "#525252" }}>
                    We scrutinize every element on your website that is under
                    your control right from site accessibility to page speed,
                    optimized content to title tags, mobile-friendliness to
                    keywords, we optimize all these factors for engaging more
                    users to your site.
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                xs={12}
                md={5}
                style={{ display: "flex", flexDirection: "row" }}
              >
                <div
                  style={{
                    padding: "0 5px",
                    borderRadius: "5px",
                    background: "#2966be",
                    width: "5%",
                    height: 30,
                    color: "#fff",
                    fontWeight: "bold",
                    marginRight: 10,
                  }}
                >
                  03
                </div>
                <Grid
                  style={{
                    width: "85%",
                    display: "flex",
                    flexDirection: "column",
                    color: "#000",
                  }}
                >
                  Off-Page SEO Audit
                  <Grid style={{ color: "#525252" }}>
                    We emphasize on giving more authority to your domain by
                    getting relevant, user-friendly and authority backlinks and
                    quality content creation. Our SEO experts make sure you get
                    all the elements right.
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                xs={12}
                md={5}
                style={{ display: "flex", flexDirection: "row" }}
              >
                <div
                  style={{
                    padding: "0 5px",
                    borderRadius: "5px",
                    background: "#2966be",
                    width: "5%",
                    height: 30,
                    color: "#fff",
                    fontWeight: "bold",
                    marginRight: 10,
                  }}
                >
                  04
                </div>
                <Grid
                  style={{
                    width: "85%",
                    display: "flex",
                    flexDirection: "column",
                    color: "#000",
                  }}
                >
                  Keyword Research
                  <Grid style={{ color: "#525252" }}>
                    With our professional SEO services, you’re covered, we help
                    uncover the performing keywords related to the industry
                    specified to the location for your business to optimize your
                    content that will improve your website rankings organically
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                xs={12}
                md={5}
                style={{ display: "flex", flexDirection: "row" }}
              >
                <div
                  style={{
                    padding: "0 5px",
                    borderRadius: "5px",
                    background: "#2966be",
                    width: "5%",
                    height: 30,
                    color: "#fff",
                    fontWeight: "bold",
                    marginRight: 10,
                  }}
                >
                  05
                </div>
                <Grid
                  style={{
                    width: "85%",
                    display: "flex",
                    flexDirection: "column",
                    color: "#000",
                  }}
                >
                  Competitive Research
                  <Grid style={{ color: "#525252" }}>
                    We make sure you have an edge over your competitors by
                    thoroughly performing a competitor analysis so that we know
                    where we stand in the competitive environment and what needs
                    to be done
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                xs={12}
                md={5}
                style={{ display: "flex", flexDirection: "row" }}
              >
                <div
                  style={{
                    padding: "0 5px",
                    borderRadius: "5px",
                    background: "#2966be",
                    width: "5%",
                    height: 30,
                    color: "#fff",
                    fontWeight: "bold",
                    marginRight: 10,
                  }}
                >
                  06
                </div>
                <Grid
                  style={{
                    width: "85%",
                    display: "flex",
                    flexDirection: "column",
                    color: "#000",
                  }}
                >
                  Optimization (On-Page and Off-Page)
                  <Grid style={{ color: "#525252" }}>
                    We achieve SEO strategy implementation through on-page
                    optimization by performing website page optimization, adding
                    the correct title, description and keeping the content
                    updated; and through off-page optimization by improving its
                    search rankings, and creating credible backlinks
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                xs={12}
                md={5}
                style={{ display: "flex", flexDirection: "row" }}
              >
                <div
                  style={{
                    padding: "0 5px",
                    borderRadius: "5px",
                    background: "#2966be",
                    width: "5%",
                    height: 30,
                    color: "#fff",
                    fontWeight: "bold",
                    marginRight: 10,
                  }}
                >
                  07
                </div>
                <Grid
                  style={{
                    width: "85%",
                    display: "flex",
                    flexDirection: "column",
                    color: "#000",
                  }}
                >
                  Performance Analysis
                  <Grid style={{ color: "#525252" }}>
                    We comprise parameters to measure your results such as page
                    views, traffic, bounce rate, rankings amongst various
                    others. Our SEO services in Gwalior provide you with
                    sustainable and trusted results
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                xs={12}
                md={5}
                style={{ display: "flex", flexDirection: "row" }}
              >
                <div
                  style={{
                    padding: "0 5px",
                    borderRadius: "5px",
                    background: "#2966be",
                    width: "5%",
                    height: 30,
                    color: "#fff",
                    fontWeight: "bold",
                    marginRight: 10,
                  }}
                >
                  08
                </div>
                <Grid
                  style={{
                    width: "85%",
                    display: "flex",
                    flexDirection: "column",
                    color: "#000",
                  }}
                >
                  Optimizing Results
                  <Grid style={{ color: "#525252" }}>
                    We are focused and performance-driven, we offer continual
                    optimization of SEO practices to optimize your results
                  </Grid>
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
            Partner with Ibuzz for SEO
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
            Maximize the growth potential of your business with Ibuzz Tech
            Solution, a top-rated SEO agency. Our services will elevate your
            brand to new heights, boosting customer engagement and achieving
            business goals at an affordable cost. Let us be your partner for
            success.
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

export default Seoservices;
