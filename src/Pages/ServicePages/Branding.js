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

const Branding = () => {
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
            Branding
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
            At iBuzz Digital Agency, we understand the critical role that
            packaging plays in determining the success of a product in the
            market. That's why we strive to create captivating product packaging
            that embodies the essence of your product and stands out from the
            crowd. Our team of experts puts their heart and soul into designing
            packaging that accurately reflects your brand and captures the
            attention of potential customers, giving you a competitive edge and
            helping to boost sales.
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
      <Grid container spacing={2} style={{display:'flex',minHeight:'100vh'}}>
 <Grid item xs={12} md={2.5} style={{display:matches1?'none':'flex',flexShrink:0,height:'100vh',overflow:'auto',position:"sticky",top:0}}>
 <div className={classes.rootDiv}>
    
    <div sx={{ width: 400, maxWidth:'100%'}}>
  
    
      <MenuList>
      
        <Link to="/seoservices" className={classes.link}>
        <MenuItem sx={{border:1,borderWidth:5,marginTop:3,borderColor:'#9cbccb'}} >
       
          <ListItemText >SEO Services</ListItemText>
          <ListItemIcon >
            <ArrowRightAltIcon/>
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
        <MenuItem sx={{border:1,borderWidth:5,marginTop:3,borderColor:'#9cbccb',backgroundImage:'linear-gradient(to right,#513eff, #52e5ff)'}} >
          <ListItemText style={{color:'#fff'}}>Branding</ListItemText>
          <ListItemIcon >
            <ArrowRightAltIcon style={{color:'#fff'}} fontSize="large"/>
          </ListItemIcon>
          
        </MenuItem>
        </Link>
        <Link to="/contentmarketing" className={classes.link}>
        <MenuItem sx={{border:1,borderWidth:5,marginTop:3,borderColor:'#9cbccb'}} >
        
          <ListItemText >Content Marketing</ListItemText>
          <ListItemIcon >
            <ArrowRightAltIcon/>
          </ListItemIcon>
        </MenuItem>
        </Link>
        <Link to="/googleads" className={classes.link}>
        <MenuItem sx={{border:1,borderWidth:5,marginTop:3,borderColor:'#9cbccb'}} >
          
          <ListItemText >Google Ads</ListItemText>
          <ListItemIcon >
            <ArrowRightAltIcon/>
          </ListItemIcon>
        </MenuItem>
        </Link>
        <Link to="/webdevelopmentservices" className={classes.link}>
        <MenuItem  sx={{border:1,borderWidth:5,marginTop:3,borderColor:'#9cbccb'}} >
         
          <ListItemText >Web Development</ListItemText>
          <ListItemIcon >
            <ArrowRightAltIcon/>
          </ListItemIcon>
        </MenuItem>
        </Link>
        <Link to="/appdevelopment" className={classes.link}>
        <MenuItem sx={{border:1,borderWidth:5,marginTop:3,borderColor:'#9cbccb'}} >
          
          <ListItemText>Application Development</ListItemText>
          <ListItemIcon>
            <ArrowRightAltIcon/>
          </ListItemIcon>
        </MenuItem>
        </Link>
        <Link to="/customsoftwaredevelopment" className={classes.link}>
        <MenuItem sx={{border:1,borderWidth:5,marginTop:3,borderColor:'#9cbccb'}} >
         
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
            Expert Branding Solutions:
          </Grid>
          <Grid
            style={{
              fontSize: 20,
              width: "87%",
              color: "#525252",
              paddingLeft: 18,
            }}
          >
            Our team offers professional branding services to elevate your
            business and take it to the next level. We have the expertise to
            create a strong brand identity that accurately reflects your company
            and appeals to your target audience. Whether it's logo design,
            visual identity development, or brand strategy, our team is
            committed to delivering exceptional results.
            <br />
            <br />
            Our team of highly skilled professionals can assist you in reaching
            your business goals in a variety of ways. Partnering with us will
            make creating a distinctive brand identity a hassle-free process for
            your business.
            <Grid style={{ display: "flex", fontWeight: 600, marginTop: 20 }}>
              <img
                src={require("../../assets/discoveryofbrand.png")}
                width={40}
              />
              Discovery of the brand
            </Grid>
            <Grid style={{ paddingLeft: 40 }}>
              We commit to gather the business requirements, and achieve the
              clarity to appropriately discover the purpose of your brand.
            </Grid>
            <Grid style={{ display: "flex", fontWeight: 600, marginTop: 20 }}>
              <img src={require("../../assets/analysis.png")} width={40} />
              Analyzing the competitors’ strengths
            </Grid>
            <Grid style={{ paddingLeft: 40 }}>
              It is vital to investigate the strengths and weaknesses of the
              business competitor to plan the winning strategy. We find
              loopholes in competing branding company to put your brand above
              their reputation and help it gain trust with needful marketing
              strategies.
            </Grid>
            <Grid style={{ display: "flex", fontWeight: 600, marginTop: 20 }}>
              <img src={require("../../assets/brandvoice.png")} width={40} />
              Brand voice
            </Grid>
            <Grid style={{ paddingLeft: 40 }}>
              We ensure your brand to reach the audience’s priorities in the
              right manner for maximum business attention and increased revenue.
              Effective customer journey Our organization ensures the perfect
              mapping of the customer’s journey for increased sales and the best
              decision-making process.
            </Grid>
            <br />
            In addition to our brand discovery and analysis services, we offer
            comprehensive marketing and branding solutions to help elevate your
            business. This includes the creation of a memorable tagline, a
            distinct brand name, a unique brand identity, and the development of
            videos and slideshows. We also offer printing services such as
            catalog and brochure printing. Our services extend to direct
            marketing, brand communication, and the crafting of a compelling
            brand story.
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
          Powerful Brand Identity Importance </Grid>
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
            Improves business recognition globally
          </Grid>
          <Grid style={{ display: "flex", fontWeight: 600, marginTop: 20 }}>
            <CheckCircleIcon />
            Builds trust through advertising mediums
          </Grid>
          <Grid style={{ display: "flex", fontWeight: 600, marginTop: 20 }}>
            <CheckCircleIcon />
            Increases customer loyalty
          </Grid>
          <Grid style={{ display: "flex", fontWeight: 600, marginTop: 20 }}>
            <CheckCircleIcon />
            Aids in creating a unique position among competitors
          </Grid>
          <Grid style={{ display: "flex", fontWeight: 600, marginTop: 20 }}>
            <CheckCircleIcon />
            Boosts employee morale and job satisfaction.
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
            Our Branding Services
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
            Our branding offerings are not just restricted to creating a unique packaging and design for you. We craft lasting experiences through a range of services including:
            </Grid>
            <Grid style={{ display: "flex", fontWeight: 600, marginTop: 20 }}>
              <img src={require("../../assets/brandidentity.png")} width={40} />
              Brand identity
            </Grid>
            <Grid style={{ paddingLeft: 40 }}>
              Creating a distinguished brand identity that resonates with your
              brand philosophy and personality and cultivates a different image
              of your brand in the mind of your customers.
            </Grid>
            <Grid style={{ display: "flex", fontWeight: 600, marginTop: 20 }}>
              <img src={require("../../assets/brandstrategy.png")} width={40} />
              Brand strategy
            </Grid>
            <Grid style={{ paddingLeft: 40 }}>
              We create campaigns that embody all the right elements and
              ingredients for the ideal long-term plans for the development of a
              successful market positioning of your brand.
            </Grid>
            <Grid style={{ display: "flex", fontWeight: 600, marginTop: 20 }}>
              <img
                src={require("../../assets/logodesign.png")}
                width={40}
                style={{ paddingRight: 10 }}
              />
              Logo design
            </Grid>
            <Grid style={{ paddingLeft: 40 }}>
              Logo is the face of your company and we make sure that it looks
              stunning and perfect. We understand how important it is to
              showcase a great first impression and therefore our experienced
              team will put their hearts and soul to visually communicate your
              brand identity.
            </Grid>
            <Grid style={{ display: "flex", fontWeight: 600, marginTop: 20 }}>
              <img
                src={require("../../assets/productdesign.png")}
                width={40}
                style={{ paddingRight: 10 }}
              />
              Product design
            </Grid>
            <Grid style={{ paddingLeft: 40 }}>
              We re-define your product design to create long term and
              short-term impression on your clients. We understand how a product
              design is one of the key segments in communicating a trustworthy
              brand which is why we bring only creative and innovative solutions
              to the table.
            </Grid>
            <Grid style={{ display: "flex", fontWeight: 600, marginTop: 20 }}>
              <img
                src={require("../../assets/stationary.png")}
                width={40}
                style={{ paddingRight: 10 }}
              />
              Brand stationary design
            </Grid>
            <Grid style={{ paddingLeft: 40 }}>
              Personalized communication is the key to establishing an image
              that speaks volumes of the professional aspect of the business. We
              design elements like letterheads, pens and customized diaries that
              go a long way in enhancing your credibility in front of your
              customers.
            </Grid>
            <Grid style={{ display: "flex", fontWeight: 600, marginTop: 20 }}>
              <img
                src={require("../../assets/businesscard.png")}
                width={40}
                style={{ paddingRight: 10 }}
              />
              Business card design
            </Grid>
            <Grid style={{ paddingLeft: 40 }}>
              We hit the bull’s eye every time with our business card designs
              that build a favourable image of your business. It is tastefully
              designed to suit your brand personality, with every detail
              highlighted in a clear and crisp manner
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
            Unique Branding Solutions Advantage </Grid>
          <Grid
            style={{
              fontSize: 20,
              width: "87%",
              color: "#525252",
              paddingLeft: 18,
            }}
          >
            <Grid>
              At our branding agency, we support you in reaching your business
              objectives through a well-planned strategy. Our team helps you
              overcome competition and attain your desired outcome.
            </Grid>
            <Grid>
              Our uniqueness lies in our exceptional understanding of branding
              and its impact on a business.
            </Grid>
            <Grid container spacing={2} style={{ marginTop: 5 }}>
              <Grid
                item
                xs={12}
                style={{ display: "flex", flexDirection: "row" }}
              >
                <Grid style={{ display: "flex", fontWeight: 600 }}>
                  <CheckCircleIcon /> Full-service solution from start to end in
                  achieving business goals.
                </Grid>
              </Grid>
              <Grid
                item
                xs={12}
                style={{ display: "flex", flexDirection: "row" }}
              >
                <Grid style={{ display: "flex", fontWeight: 600 }}>
                  <CheckCircleIcon />
                  Diverse experience across various sectors and markets.
                </Grid>
              </Grid>
              <Grid
                item
                xs={12}
                style={{ display: "flex", flexDirection: "row" }}
              >
                <Grid style={{ display: "flex", fontWeight: 600 }}>
                  <CheckCircleIcon />
                  Supports both new and established businesses.
                </Grid>
              </Grid>
              <Grid
                item
                xs={12}
                style={{ display: "flex", flexDirection: "row" }}
              >
                <Grid style={{ display: "flex", fontWeight: 600 }}>
                  <CheckCircleIcon /> Focus on building audience trust and
                  converting them into revenue-generating customers.
                </Grid>
              </Grid>
              <Grid
                item
                xs={12}
                style={{ display: "flex", flexDirection: "row" }}
              >
                <Grid style={{ display: "flex", fontWeight: 600 }}>
                  <CheckCircleIcon />
                  Employs competent professionals who understand the business
                  needs.
                </Grid>
              </Grid>
              <Grid
                item
                xs={12}
                style={{ display: "flex", flexDirection: "row" }}
              >
                <Grid style={{ display: "flex", fontWeight: 600 }}>
                  <CheckCircleIcon />
                  Dedicatedly delivers required branding services.
                </Grid>
              </Grid>
            </Grid>
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

export default Branding;
