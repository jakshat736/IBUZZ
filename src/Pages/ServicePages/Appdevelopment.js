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

const Appdevelopment = () => {
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
            Android App Development
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
            At iBuzz Tech Solutions, we recognize the significance of having a
            seamless and visually appealing application that accurately reflects
            your brand. Our team of specialists excel in creating dynamic and
            user-friendly apps, with a focus on crafting interactive designs and
            minimizing any bugs to optimize conversion rates for your business.
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
        <MenuItem sx={{border:1,borderWidth:5,marginTop:3,borderColor:'#9cbccb'}} >
         
          <ListItemText >Web Development</ListItemText>
          <ListItemIcon >
            <ArrowRightAltIcon/>
          </ListItemIcon>
        </MenuItem>
        </Link>
        <Link to="/appdevelopment" className={classes.link}>
        <MenuItem sx={{border:1,borderWidth:5,marginTop:3,borderColor:'#9cbccb'}} >
          <ListItemText style={{color:'#000'}}>Application Development</ListItemText>
          <ListItemIcon >
            <ArrowRightAltIcon style={{color:"#2966be",}} fontSize='large'/>
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
            Outstanding Android App Development </Grid>
          <Grid
            style={{
              fontSize: 20,
              width: "87%",
              color: "#525252",
              paddingLeft: 18,
            }}
          >
            We provide top-notch Android app development services to help your
            business reach a significant portion of its target audience. By
            partnering with us, you can tap into the growing app industry that
            Android has greatly impacted. As one of the most powerful and widely
            used app platforms, Android gives your business a competitive
            advantage.
            <br />
            <br />
            At IBUZZ, our digital team is dedicated to enhancing customer
            loyalty, increasing the accessibility of your business, and
            transforming the overall retail experience. Our extensive range of
            mobile development services includes cloud mobility solutions, app
            conceptualization, and app prototyping, ensuring a complete and
            improved experience for our clients.
            <Grid style={{ display: "flex", fontWeight: 600, marginTop: 20 }}>
              <img src={require("../../assets/androiduiux.png")} width={40} />
              Android UI/UX Design
            </Grid>
            <Grid style={{ paddingLeft: 40 }}>
              At IBUZZ, our digital team prioritizes delivering a great user
              interface and user experience for app success. Let us provide you
              with an experienced Android programmer equipped with design skills
              to create top-notch UI and enhance the overall app experience.
            </Grid>
            <Grid style={{ display: "flex", fontWeight: 600, marginTop: 20 }}>
              <img src={require("../../assets/customapp.png")} width={40} />
              Custom Android App Development
            </Grid>
            <Grid style={{ paddingLeft: 40 }}>
              Our team of experienced Android app developers is equipped with
              the latest app development technologies and platform knowledge to
              deliver feature-rich and high-performance apps for your company.
            </Grid>
            <Grid style={{ display: "flex", fontWeight: 600, marginTop: 20 }}>
              <img
                src={require("../../assets/testingandmaintenance.png")}
                width={40}
              />
              Testing and maintenance
            </Grid>
            <Grid style={{ paddingLeft: 40 }}>
              We are available to address any post-release concerns for your
              product, including fixing bugs, improving performance, monitoring
              the system, and providing updates as needed.
            </Grid>
            <Grid style={{ display: "flex", fontWeight: 600, marginTop: 20 }}>
              <img src={require("../../assets/appsecurity.png")} width={40} />
              Android App Security
            </Grid>
            <Grid style={{ paddingLeft: 40 }}>
              Our end-to-end app security support helps protect against data
              loss and hacking attempts, ensuring your application performs
              seamlessly with the necessary security measures in place.
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
          Our App Development Process
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
            <img src={require("../../assets/discovery.png")} width={40} />
            Discovery
          </Grid>
          <Grid style={{ paddingLeft: 40 }}>
            We thoroughly assess your project before offering any
            recommendations. Our team takes the time to understand your business
            needs and processes, as well as any technical or infrastructure
            considerations. Whether you're starting from scratch or looking to
            improve an existing app, we'll provide tailored solutions based on
            careful evaluation and creative brainstorming.
          </Grid>
          <Grid style={{ display: "flex", fontWeight: 600, marginTop: 20 }}>
            <img src={require("../../assets/uiuxdesign.png")} width={40} />
            UI/UX Design
          </Grid>
          <Grid style={{ paddingLeft: 40 }}>
            Our team of android app developers offers innovative and
            user-friendly designs for your mobile application, whether it is a
            new development project or an upgrade to an existing one. Our
            designs are tailored to meet your specific performance goals while
            ensuring both functionality and aesthetic appeal.
          </Grid>
          <Grid style={{ display: "flex", fontWeight: 600, marginTop: 20 }}>
            <img
              src={require("../../assets/development.png")}
              width={40}
            />
            Development
          </Grid>
          <Grid style={{ paddingLeft: 40 }}>
            We have extensive experience in agile development, which has taught
            us the significance of timely delivery and updates for our clients.
            We prioritize continuous delivery, updates, and development of code
            for better results.
          </Grid>
          <Grid style={{ display: "flex", fontWeight: 600, marginTop: 20 }}>
            <img src={require("../../assets/apiintegration.png")} width={40} />
            Api Integration
          </Grid>
          <Grid style={{ paddingLeft: 40 }}>
            We integrate your app with various third-party and custom API
            applications, such as Instagram, YouTube, payment gateways for
            secure transactions, and other data sources, based on your specific
            needs and requirements.
          </Grid>
          <Grid style={{ display: "flex", fontWeight: 600, marginTop: 20 }}>
            <img src={require("../../assets/testing.png")} width={40} />
            Testing
          </Grid>
          <Grid style={{ paddingLeft: 40 }}>
            Ensuring quality is essential not just during the app development
            process, but also after it has been completed. Our team conducts
            both functional and non-functional testing throughout the app's
            development cycle to ensure that the end product meets all
            standards.
          </Grid>
          <Grid style={{ display: "flex", fontWeight: 600, marginTop: 20 }}>
            <img src={require("../../assets/deployment.png")} width={40} />
            Deployment
          </Grid>
          <Grid style={{ paddingLeft: 40 }}>
            Finally, it's time to release your app on platforms such as Google
            Play Store, and we will provide support in the app setup process by
            handling various factors.
          </Grid>
          <Grid style={{ display: "flex", fontWeight: 600, marginTop: 20 }}>
            <img src={require("../../assets/testingandmaintenance.png")} width={40} />
            Maintenance
          </Grid>
          <Grid style={{ paddingLeft: 40 }}>
            After the initial deployment of the app, ongoing maintenance,
            support, and optimization are necessary. It is also important to
            regularly respond to feedback and continue releasing updated
            versions of the app.
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
            Why Choose IBUZZ
          </Grid>
          <Grid
            style={{
              fontSize: 20,
              width: "87%",
              color: "#525252",
              paddingLeft: 18,
            }}
          >
           <Grid container spacing={2} style={{ marginTop: 5 }}>
              <Grid
                item
                xs={12}
                style={{ display: "flex", flexDirection: "row" }}
              >
                <Grid style={{ display: "flex", fontWeight: 600 }}>
                  <CheckCircleIcon /> Design and prototyping of apps
                </Grid>
              </Grid>
              <Grid
                item
                xs={12}
                style={{ display: "flex", flexDirection: "row" }}
              >
                <Grid style={{ display: "flex", fontWeight: 600 }}>
                  <CheckCircleIcon />
                  Native app development
                </Grid>
              </Grid>
              <Grid
                item
                xs={12}
                style={{ display: "flex", flexDirection: "row" }}
              >
                <Grid style={{ display: "flex", fontWeight: 600 }}>
                  <CheckCircleIcon />
                  Cross-platform app development
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

export default Appdevelopment;
