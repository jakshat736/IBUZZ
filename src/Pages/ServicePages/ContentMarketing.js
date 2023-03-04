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

const ContentMarketing = () => {
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
            Content Marketing
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
            We specialize in delivering domain-specific content writing and
            marketing services to enhance your online presence. We understand
            the importance of clear, concise and coherent communication with
            customers, which is why we have a team of talented writers to craft
            compelling content that will grab their attention from all angles.
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
        <MenuItem sx={{border:1,borderWidth:5,marginTop:3,borderColor:'#9cbccb'}} >
          <ListItemText>Branding</ListItemText>
          <ListItemIcon>
            <ArrowRightAltIcon/>
          </ListItemIcon>
          
        </MenuItem>
        </Link>
        <Link to="/contentmarketing" className={classes.link}>
        <MenuItem sx={{border:1,borderWidth:5,marginTop:3,borderColor:'#9cbccb'}} >
        
          <ListItemText style={{color:'#000'}}>Content Marketing</ListItemText>
          <ListItemIcon >
            <ArrowRightAltIcon style={{color:'#2966be'}} fontSize="large"/>
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
        <MenuItem sx={{border:1,borderWidth:5,marginTop:3,borderColor:'#9cbccb'}} >
         
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
            Specialized Content Marketing Firm
          </Grid>
          <Grid
            style={{
              fontSize: 20,
              width: "87%",
              color: "#525252",
              paddingLeft: 18,
            }}
          >
            Our content marketing agency offers expert services to enhance your
            online marketing presence through unique and impactful content. With
            a talented team of writers, we craft high-quality and engaging
            material that not only attracts leads but strengthens your brand
            image in the digital world. Our mission is to provide relevant,
            persuasive, and informative content that influences purchasing
            decisions and reinforces your product's position.
            <br />
            <br />
            As a content marketing agency, our expertise lies in creating
            tailored content for business websites and blogs. Our services,
            including web content, press releases, guest posts, product reviews,
            SEO, and newsletters, aim to increase customer engagement,
            alignment, and conversion. By providing optimized, search
            engine-friendly content, we aim to enhance business growth through
            organic reach and social media posts, as well as improve search
            engine ranking. The content we create is designed to reach a wide
            global audience.
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
          Our Content Marketing Solutions
        </Grid>
        <Grid
          style={{
            fontSize: 20,
            width: "87%",
            color: "#525252",
            paddingLeft: 18,
          }}
        >
          Ibuzz is a highly-regarded content marketing and marketing agency that
          is dedicated to delivering exceptional content to drive business
          growth through increased customer engagement. We understand that the
          success of B2B and B2C businesses depends on the quality of the
          content they produce. That's why we view our content as the
          cornerstone of our marketing strategies, which also include SEO, ORM,
          link building, and social media marketing. We offer a comprehensive
          range of content marketing services to help our clients reach their
          goals.
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              md={5}
              style={{ display: "flex", fontWeight: 600 }}
            >
              <CheckCircleIcon />
              Blog and article writing
            </Grid>
            <Grid
              item
              xs={12}
              md={5}
              style={{ display: "flex", fontWeight: 600 }}
            >
              <CheckCircleIcon />
              Web content marketing
            </Grid>
            <Grid
              item
              xs={12}
              md={5}
              style={{ display: "flex", fontWeight: 600 }}
            >
              <CheckCircleIcon />
              Product and service review writing.
            </Grid>
            <Grid
              item
              xs={12}
              md={5}
              style={{ display: "flex", fontWeight: 600 }}
            >
              <CheckCircleIcon />
              Guest post writing and publishing
            </Grid>
            <Grid
              item
              xs={12}
              md={5}
              style={{ display: "flex", fontWeight: 600 }}
            >
              <CheckCircleIcon />
              Resume writing
            </Grid>
            <Grid
              item
              xs={12}
              md={5}
              style={{ display: "flex", fontWeight: 600 }}
            >
              <CheckCircleIcon />
              Newsletter and press-release writing
            </Grid>
            <Grid
              item
              xs={12}
              md={5}
              style={{ display: "flex", fontWeight: 600 }}
            >
              <CheckCircleIcon />
              Whitepaper writing
            </Grid>
            <Grid
              item
              xs={12}
              md={5}
              style={{ display: "flex", fontWeight: 600 }}
            >
              <CheckCircleIcon />
              Academic editing
            </Grid>
            <Grid
              item
              xs={12}
              md={5}
              style={{ display: "flex", fontWeight: 600 }}
            >
              <CheckCircleIcon />
              Product and service review writing
            </Grid>
            <Grid
              item
              xs={12}
              md={5}
              style={{ display: "flex", fontWeight: 600 }}
            >
              <CheckCircleIcon />
              E-Book writing and editing
            </Grid>
            <Grid
              item
              xs={12}
              md={5}
              style={{ display: "flex", fontWeight: 600 }}
            >
              <CheckCircleIcon />
              Brochure writing and editing
            </Grid>
            <Grid
              item
              xs={12}
              md={5}
              style={{ display: "flex", fontWeight: 600 }}
            >
              <CheckCircleIcon />
              Technical content marketing
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
            Effective Content Marketing Solutions{" "}
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
            IBUZZ, a digital e-commerce agency, offers exceptional sets of convenient features within the e-commerce domain.
            </Grid>
            <Grid style={{ display: "flex", fontWeight: 600, marginTop: 20 }}>
              <img
                src={require("../../assets/qualitycontent.png")}
                width={40}
              />
              Quality Contents
            </Grid>
            <Grid style={{ paddingLeft: 40 }}>
              We always provide the quality-rich contents meeting the business
              requirements at affordable rates.
            </Grid>
            <Grid style={{ display: "flex", fontWeight: 600, marginTop: 20 }}>
              <img
                src={require("../../assets/iocontentwriter.png")}
                width={40}
              />
              Industry-Oriented Content Writers
            </Grid>
            <Grid style={{ paddingLeft: 40 }}>
              Our team is equipped with expert industry-oriented writers to meet
              the SEO guidelines during the content creation process.
            </Grid>
            <Grid style={{ display: "flex", fontWeight: 600, marginTop: 20 }}>
              <img
                src={require("../../assets/originalcontent.png")}
                width={40}
                style={{ paddingRight: 10 }}
              />
              Original Content
            </Grid>
            <Grid style={{ paddingLeft: 40 }}>
              IBUZZ is committed to providing only the non-plagiarized and
              originally-written contents in the good sake of our customers.
            </Grid>
            <Grid style={{ display: "flex", fontWeight: 600, marginTop: 20 }}>
              <img
                src={require("../../assets/nocreditclaims.png")}
                width={40}
                style={{ paddingRight: 10 }}
              />
              No Credit Claims
            </Grid>
            <Grid style={{ paddingLeft: 40 }}>
              You own the rights to the contents for using anywhere as per the
              requirement.
            </Grid>
            <Grid style={{ display: "flex", fontWeight: 600, marginTop: 20 }}>
              <img
                src={require("../../assets/wellresearch.png")}
                width={40}
                style={{ paddingRight: 10 }}
              />
              Well-Researched Contents
            </Grid>
            <Grid style={{ paddingLeft: 40 }}>
              We always prioritize providing the keyword optimized and
              well-researched content as per the latest search engine
              algorithms.
            </Grid>
            <Grid style={{ display: "flex", fontWeight: 600, marginTop: 20 }}>
              <img
                src={require("../../assets/retinagraphics.png")}
                width={40}
                style={{ paddingRight: 10 }}
              />
              Content Proofreading and Editing Services
            </Grid>
            <Grid style={{ paddingLeft: 40 }}>
              There exists availability of the editing and proofreading services
              to make you stress-free about it.
            </Grid>
            <Grid style={{ display: "flex", fontWeight: 600, marginTop: 20 }}>
              <img
                src={require("../../assets/expert.png")}
                width={40}
                style={{ paddingRight: 10 }}
              />
              Expertise in Diverse Categories
            </Grid>
            <Grid style={{ paddingLeft: 40 }}>
              We hold expertise in the diverse categories of industries for
              catering to the requirements.
            </Grid>
            <Grid style={{ display: "flex", fontWeight: 600, marginTop: 20 }}>
              <img
                src={require("../../assets/clientsatisfaction.png")}
                width={40}
                style={{ paddingRight: 10 }}
              />
              Assured Client Satisfaction
            </Grid>
            <Grid style={{ paddingLeft: 40 }}>
              The client satisfaction is assured via one to one interaction
              regarding the writing process.
            </Grid>
            <Grid style={{ display: "flex", fontWeight: 600, marginTop: 20 }}>
              <img
                src={require("../../assets/topicpitching.png")}
                width={40}
                style={{ paddingRight: 10 }}
              />
              Topic Pitching
            </Grid>
            <Grid style={{ paddingLeft: 40 }}>
              We provide services like topic pitching as per the requirements
              and even the ideation like benefits.
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
          Industries We Cater To in Business
        </Grid>
        <Grid
          style={{
            fontSize: 20,
            width: "87%",
            color: "#525252",
            paddingLeft: 18,
          }}
        >
          As a leading content marketing service provider in Gwalior, IBUZZ has
          a wealth of experience in delivering exceptional, plagiarism-free, and
          one-of-a-kind content to clients across a variety of industries. With
          our specialized knowledge and experience in specific niches, we are
          able to offer customized content writing services that help our
          clients stand out. No matter what industry your business belongs to,
          IBUZZ is here to help. Our team of skilled content writers has
          extensive experience across a range of business sectors.
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              md={5}
              style={{ display: "flex", fontWeight: 600 }}
            >
              <CheckCircleIcon />
              Banking, Finance & Insurance.
            </Grid>
            <Grid
              item
              xs={12}
              md={5}
              style={{ display: "flex", fontWeight: 600 }}
            >
              <CheckCircleIcon />
              Healthcare.
            </Grid>
            <Grid
              item
              xs={12}
              md={5}
              style={{ display: "flex", fontWeight: 600 }}
            >
              <CheckCircleIcon />
              NGOs and others.
            </Grid>
            <Grid
              item
              xs={12}
              md={5}
              style={{ display: "flex", fontWeight: 600 }}
            >
              <CheckCircleIcon />
              Law
            </Grid>
            <Grid
              item
              xs={12}
              md={5}
              style={{ display: "flex", fontWeight: 600 }}
            >
              <CheckCircleIcon />
              Event and Tickets.
            </Grid>
            <Grid
              item
              xs={12}
              md={5}
              style={{ display: "flex", fontWeight: 600 }}
            >
              <CheckCircleIcon />
              Education & Training
            </Grid>
            <Grid
              item
              xs={12}
              md={5}
              style={{ display: "flex", fontWeight: 600 }}
            >
              <CheckCircleIcon />
              Food & Beverages
            </Grid>
            <Grid
              item
              xs={12}
              md={5}
              style={{ display: "flex", fontWeight: 600 }}
            >
              <CheckCircleIcon />
              Information Technology
            </Grid>
            <Grid
              item
              xs={12}
              md={5}
              style={{ display: "flex", fontWeight: 600 }}
            >
              <CheckCircleIcon />
              Auto and Manufacturing
            </Grid>
            <Grid
              item
              xs={12}
              md={5}
              style={{ display: "flex", fontWeight: 600 }}
            >
              <CheckCircleIcon />
              Life Sciences
            </Grid>
            <Grid
              item
              xs={12}
              md={5}
              style={{ display: "flex", fontWeight: 600 }}
            >
              <CheckCircleIcon />
              Retail and E-commerce
            </Grid>
            <Grid
              item
              xs={12}
              md={5}
              style={{ display: "flex", fontWeight: 600 }}
            >
              <CheckCircleIcon />
              Utilities and Energy
            </Grid>
            <Grid
              item
              xs={12}
              md={5}
              style={{ display: "flex", fontWeight: 600 }}
            >
              <CheckCircleIcon />
              Telecommunications
            </Grid>
            <Grid
              item
              xs={12}
              md={5}
              style={{ display: "flex", fontWeight: 600 }}
            >
              <CheckCircleIcon />
              Travel and Leisure.
            </Grid>
            <Grid
              item
              xs={12}
              md={5}
              style={{ display: "flex", fontWeight: 600 }}
            >
              <CheckCircleIcon />
              Media & Entertainment.
            </Grid>
            <Grid
              item
              xs={12}
              md={5}
              style={{ display: "flex", fontWeight: 600 }}
            >
              <CheckCircleIcon />
              Real Estate
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
            Unique Content Marketing Services{" "}
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
              <img
                src={require("../../assets/qualitycontent.png")}
                width={40}
              />
              Premium Quality
            </Grid>
            <Grid style={{ paddingLeft: 40 }}>
              Providing the contents written with premium quality.
            </Grid>
            <Grid style={{ display: "flex", fontWeight: 600, marginTop: 20 }}>
              <img
                src={require("../../assets/iocontentwriter.png")}
                width={40}
              />
              Industry Specific Experienced Writers
            </Grid>
            <Grid style={{ paddingLeft: 40 }}>
              Contents are written via the well-experienced industry-oriented
              writers.
            </Grid>
            <Grid style={{ display: "flex", fontWeight: 600, marginTop: 20 }}>
              <img
                src={require("../../assets/seoincorporated.png")}
                width={40}
                style={{ paddingRight: 10 }}
              />
              SEO Friendly
            </Grid>
            <Grid style={{ paddingLeft: 40 }}>
              SEO optimized content under a variety of niches.
            </Grid>
            <Grid style={{ display: "flex", fontWeight: 600, marginTop: 20 }}>
              <img
                src={require("../../assets/fairprice.png")}
                width={40}
                style={{ paddingRight: 10 }}
              />
              Competitive Pricing
            </Grid>
            <Grid style={{ paddingLeft: 40 }}>
              Reasonable pricing in comparison to others.
            </Grid>
            <Grid style={{ display: "flex", fontWeight: 600, marginTop: 20 }}>
              <img
                src={require("../../assets/realtime.png")}
                width={40}
                style={{ paddingRight: 10 }}
              />
              Quickest Turnaround Time
            </Grid>
            <Grid style={{ paddingLeft: 40 }}>
              We provide services like topic pitching as per the requirements
              and even the ideation like benefits.
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
            Expert Content Marketing Company
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
            In addition, we pledge to provide branding and marketing services,
            including tagline and brand name creation, development of brand
            identity, video and slideshow production, and printing services such
            as catalog and brochure printing. We also offer direct marketing,
            brand communication, and brand story development.
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

export default ContentMarketing;
