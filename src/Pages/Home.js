import { Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import firstimg from "../assets/first.jpg";
import h1 from "../assets/1h.jpg";
import h2 from "../assets/2h.jpg";
import firstimg1 from "../assets/akkk.jpg";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import Footer from "../Components/Footer";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useStyles } from "./PackagePages/HoverCss";
import { HoverableCard } from "react-hoverable-card";
import "react-hoverable-card/dist/index.css";
import ImageContentHover from "react-image-hover";
import { useEffect } from "react";
import hoverEffect from "hover-effect";

  const services = [
  {
    name: "Website Design",
    description:
      "Be prepared for the future with visually appealing websites that are as distinctive as you are. Showcase your creativity to your customers or potential clients with a stunningly designed website that is created to leave a lasting impression.",
    avatar: require("../assets/webdesign.png"),
  },
  {
    name: "Website Development",
    description:
      "Our website development process is customized to meet your business requirements. Through thorough and meticulous development, we transform your ideas into innovative technological solutions that stand out from the competition.",
    avatar: require("../assets/webdev.png"),
  },
  {
    name: "eCommerce Solution",
    description:
      "Whether you're focused on selling products, services, or both, we have you covered with comprehensive e-commerce website development. Our full-fledged e-commerce solutions can get your online business up and running in no time, providing a seamless experience for your customers.",
    avatar: require("../assets/ecommerce.png"),
  },
  {
    name: "Digital Marketing",
    description:
      "Connect with your customers where they spend the majority of their time - online - with IBUZZ Digital Marketing. Our result-oriented ad campaigns and search engine optimization (SEO) techniques will distinguish your business from the competition. We offer a comprehensive range of digital marketing services to cover all aspects of your business needs.",
    avatar: require("../assets/digital.png"),
  },
  {
    name: "Mobile Application",
    description:
      "Bring your business to your customers' fingertips with IBUZZ Tech Mobile Application Development. We provide top-notch Android, IOS, Windows, cross-platform, or responsive applications tailored to meet your specific needs.",
    avatar: require("../assets/app.png"),
  },
  {
    name: "Multimedia Solutions",
    description:
      "Visual assets can be more impactful than words, and well-designed graphics can attract customers like nothing else. We offer designs that highlight your brand and resonate with your target audience to drive engagement and satisfaction.",
    avatar: require("../assets/multimedia.png"),
  },
];

const Projects = [
  {
    name: "Travel Booking App",
    avatar: require("../assets/image1.jpg"),
  },
  {
    name: "Bus Booking App",
    avatar: require("../assets/image2.jpg"),
  },
  {
    name: "SAAS",
    avatar: require("../assets/image3.jpg"),
  },
  {
    name: "Hotel Booking App",
    avatar: require("../assets/image4.jpg"),
  },
  {
    name: "Flight Booking App",
    avatar: require("../assets/image5.jpg"),
  },
];

const qualities = [
  {
    name: "Unmatched aesthetics",
    description:
      "Our designs are visually stunning, expertly executed, and tailored to your business and personal style. We bring out the best in you and showcase your unique identity.",
    avatar: require("../assets/responsive.png"),
  },
  {
    name: "Awesome in all sizes",
    description:
      "IBUZZ provides responsive websites and applications that seamlessly adapt to different screen sizes and aspect ratios, ensuring that your business looks great on all devices.",
    avatar: require("../assets/idea.png"),
  },
  {
    name: "Commitments matter to us",
    description:
      "At IBUZZ, we value your time and take our commitments very seriously. We uphold our promises and deliver on time, without compromising on the quality of our work.",
    avatar: require("../assets/handshake.png"),
  },
  {
    name: "We are here for you",
    description:
      "We are always available to answer any questions you may have, anytime. We provide comprehensive tech and after-sales support to ensure that you receive the assistance you need, whenever you need it.",
    avatar: require("../assets/techsupport.png"),
  },
];

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

const Home = () => {
  const [service, setService] = React.useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [description, setDescription] = useState("");
  const form = useRef();
  const classes = useStyles();

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const matches1 = useMediaQuery(theme.breakpoints.up("xs"));
  const container = useRef();

  useEffect(() => {
    console.log(container.current);

    new hoverEffect({
      parent: container.current,
      intensity: 0.5,
      image1: h1,
      image2: h2,
      displacementImage:
        "https://raw.githubusercontent.com/robin-dela/hover-effect/master/images/fluid.jpg",
    });
  }, [container]);

  const Hover = () => {
    return new hoverEffect({
      parent: document.querySelector(".my-div"),
      intensity: 0.3,
      image1: "images/myImage1.jpg",
      image2: "images/myImage2.jpg",
      displacementImage: "images/myDistorsionImage.png",
    });
  };

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
          console.log(result.Typography);
        },
        (error) => {
          console.log(error.Typography);
        }
      );
  };
  const CardComponent = () => {
    return services.map((u, i) => {
      return (
        <Card sx={{ maxWidth: 345, margin: 5 }} className={classes.hover}>
          <CardActionArea>
            <CardMedia
              component="img"
              sx={{ width: 80, marginLeft: 15 }}
              image={u.avatar}
              alt="green iguana"
            />
            <CardContent>
              <div
                gutterBottom
                variant="h5"
                component="div"
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  color: "#2966be",
                  fontSize: 30,
                  fontWeight: "bold",
                }}
              >
                {u.name}
              </div>
              <div
                className="font-link"
                style={{ width: "100%", fontSize: 17, color: "#525252" }}
              >
                {u.description}
              </div>
            </CardContent>
          </CardActionArea>
        </Card>
      );
    });
  };

  const QualitiesCardComponent = () => {
    return qualities.map((u, i) => {
      return (
        <Card
          sx={{
            maxWidth: matches ? 200 : 380,
            margin: 5,
            display: "flex",
            justifyContent: "center",
          }}
          className={classes.hover}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              sx={{
                width: 80,
                paddingLeft: matches ? 7 : 15,
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
              }}
              image={u.avatar}
              alt="green iguana"
            />
            <CardContent>
              <div
                className="font-link"
                gutterBottom
                variant="h5"
                component="div"
                style={{
                  width: "100%",
                  textAlign: "center",
                  color: "#2966be",
                  fontSize: 25,
                  fontWeight: "bold",
                }}
              >
                {u.name}
              </div>
              <div
                className="font-link"
                style={{ width: "100%", fontSize: 17, color: "#525252" }}
              >
                {u.description}
              </div>
            </CardContent>
          </CardActionArea>
        </Card>
      );
    });
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
            <div className="font-link" style={{ color: "#525252" }}>
              {item.answer}
            </div>
          </AccordionDetails>
        </Accordion>
      );
    });
  };

 

  const ProjectComponents = () => {
    return Projects.map((item) => {
      return (
        <Grid style={{ width: matches ? "20%" : "80%" }}>
          <HoverableCard
            cardTitle={item.name}
            // cardDescription="Phasellus tincidunt vestibulum elit vel laoreet. Vivamus tincidunt augue eget lacus blandit tempor."
            cardImage={item.avatar}
            hoverBgColor="grey"
          />
        </Grid>
      );
    });
  };
 
  return (
    <Grid>
      {/* Header */}
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Navbar />
        </Grid>
      </Grid>

      {/* 1st Section */}

      <Grid
        container
        spacing={2}
        style={{
          marginTop: 1,
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        {/* <Grid item xs={12} md={5} style={{width:'40vw',marginTop:matches?60:0}}>
      <Grid  style={{fontSize:72,color:'#ffff00',marginTop:matches?15:0,marginBottom:20,display:'block'}} className="font-link">
       Responsive
       <Grid style={{fontWeight:'bold',fontSize:matches?72:55}} >
        Website Design
        </Grid> 
    </Grid>
    <Grid style={{color:'#525252',fontSize:20}} className="font-link">
    Building dream website with great expertise and extreme extensive experience for the best mobile and desktop experience
    </Grid>
    
    </Grid> */}
        <Grid
          xs={12}
          md={6}
          style={{
            backgroundImage: `url(${firstimg})`,
            paddingLeft: 16,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <Grid
            style={{
              background: "rgb(128,128,128,0.8)",
              height: "100%",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Grid
              style={{ fontSize: 72, color: "#fff", textAlign: "center" }}
              className="font-link"
            >
             Responsive
              <Grid
                style={{
                  fontWeight: "bold",
                  color: "#043f77",
                  fontSize: matches ? 72 : 55,
                }}
              >
               
                Website Design
              </Grid>
            </Grid>
            <Grid
              style={{ color: "#9cbccb", fontSize: 20, textAlign: "center" }}
              className="font-link"
            >
              Building dream website with great expertise and extreme extensive
              experience for the best mobile and desktop experience
            </Grid>
          </Grid>
        </Grid>

        <Grid xs={12} md={6}>
          <Grid
            className="parent"
            id="imgContainer"
            ref={container}
            style={{
              width: matches1 ? '99.9%' : "",
              height: 600,
            }}
          ></Grid>
        </Grid>

        {/*    
    <Grid item md={5} style={{width:'40vw',height:460,display:'flex',justifyContent:'center'}}>
       <img src={firstimg1} style={{width:matches?'40vw':'80vw',opacity:0.5,background:'rgb(128,128,128,0.9)'}}  />
       <Grid  style={{fontSize:72,color:'#ffff00',marginTop:matches?15:0,marginBottom:20,display:'flex',flexDirection:'column',justifyContent:'center',alignItems:"center",position:'absolute',top:200}} className="font-link">
       Responsive
       <Grid style={{fontWeight:'bold',fontSize:matches?72:55,color:'#000'}} >
        Website Design
        </Grid>
    </Grid>
      </Grid>  */}
      </Grid>

      {/* 2nd Section */}

      <Grid
        container
        spacing={2}
        style={{
          marginTop: 20,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
        className="font-link"
      >
        <Grid
          item
          xs={12}
          md={12}
          style={{
            color: "#000",
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          What We Offer________
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          style={{
            color: "#2966be",
            fontSize: matches ? 55 : 30,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Complete Software Development and Digital
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          style={{
            color: "#2966be",
            fontSize: matches ? 55 : 30,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Marketing Solution
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          style={{
            color: "#525252",
            paddingRight: matches ? 110 : 0,
            paddingLeft: matches ? 110 : 30,
            fontSize: matches ? 20 : 24,
            textAlign:'justify'
          }}
        >
          We provide customized software and digital marketing solutions for
          your business, starting from brainstorming and design to
          implementation. Our services include designing e-commerce websites,
          developing mobile applications, digital marketing strategies, and
          creating websites. We are a single destination to fulfill all your
          digital marketing and IT requirements.We have a team of highly experienced and enthusiastic professionals
          who specialize in various areas such as web designing, mobile
          application development, web development, graphic designing, and
          content writing.
        </Grid>

        <Grid
          item
          xs={12}
          md={12}
          style={{
            color: "#525252",
            paddingRight: matches ? 110 : 0,
            paddingLeft: matches ? 110 : 30,
            fontSize: matches ? 20 : 24,
            marginTop: 0,
            textAlign: "center",
          }}
        >
      
        </Grid>
        <Grid
          style={{
            color: "#525252",
            paddingRight: matches ? 110 : 0,
            paddingLeft: matches ? 110 : 30,
            fontSize: matches ? 20 : 24,
            textAlign: "center",
          }}
        >

        </Grid>
        <Grid
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <CardComponent />
        </Grid>
      </Grid>

      {/* Section 3 */}

      <Grid
        style={{ display: "flex", justifyContent: "center" }}
        className="font-link"
      >
        <Grid
          container
          spacing={2}
          style={{
            width: "70%",
            background: "#2966be",
            borderRadius: 5,
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Grid
            item
            xs={12}
            md={6}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: "70%",
              paddingLeft: 40,
            }}
          >
            <Grid style={{ color: "#fff", fontSize: 40 }}>
              Let's Discuss Your Project
            </Grid>
            <Grid style={{ color: "#fff", fontSize: 20 }}>
              Get free consultation and let us know your project idea to trun it
              into an amazing digital product.
            </Grid>
            <Grid style={{ padding: 20 }}>
              <Button
                variant="outlined"
                style={{ borderRadius: 20, backgroundColor: "#fff" }}
                href="https://wa.link/clvo86"
              >
                Get Consultation
              </Button>
            </Grid>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
            }}
          >
            <img
              src={require("../assets/seoranking.png")}
              style={{ width: 279, height: 226 }}
            />
           .
          </Grid>
        </Grid>
      </Grid>

      {/* Section 4 */}

      <Grid
        container
        spacing={2}
        className="font-link"
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
          marginTop: 80,
          paddingRight: matches ? 60 : 0,
          paddingLeft: matches ? 90 : 0,
          alignItems: "center",
        }}
      >
        <Grid
          item
          xs={12}
          md={12}
          style={{
            color: "#000",
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          About Us________
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          style={{
            color: "#2966be",
            fontSize: matches ? 55 : 30,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Grow Your Business With Our Agency
        </Grid>
        <Grid item xs={12} md={5} style={{ display: "flex" }}>
          <img
            src={require("../assets/growyourbusiness.png")}
            style={{ width: "100%" }}
            className={classes.hover}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          style={{ display: "flex", flexDirection: "column", margin: 7 }}
        >
          <Grid
            style={{
              color: "#525252",
              paddingRight: matches ? 110 : 0,
              paddingLeft: matches ? 110 : 0,
              fontSize: matches ? 28 : 24,
              marginTop: 20,
            }}
          >
            IBUZZ is your all-in-one solution for all your software development
            and digital marketing needs. Our expertise lies in designing,
            developing, and implementing top-quality websites and mobile
            software solutions tailored to your specific requirements.{" "}
          </Grid>
          <Grid
            style={{
              color: "#525252",
              paddingRight: matches ? 110 : 0,
              paddingLeft: matches ? 110 : 0,
              fontSize: 20,
              marginTop: 20,
            }}
          >
            We offer a comprehensive solution for all your e-commerce needs with
            unlimited integrations and customizability, enabling you to serve
            diverse customers with a range of products. Our express mobile
            development solutions can put your business on the mobile devices of
            millions of users, allowing for exponential growth. With our
            complete software and digital marketing solutions, we cater to your
            unique requirements and deliver innovative solutions that are ahead
            of the curve.{" "}
          </Grid>
        </Grid>
      </Grid>

      {/* Section 5 */}

      <Grid
        style={{ display: "flex", flexDirection: "column", marginTop: 80 }}
        className="font-link"
      >
        <Grid style={{}}>
          <Grid
            style={{
              color: "#000",
              fontSize: 20,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Our Projects________
          </Grid>
          <Grid
            style={{
              color: "#2966be",
              fontSize: 35,
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Some of Our Featured Works
          </Grid>
        </Grid>

        <Grid
          style={{
            display: "flex",
            flexDirection: matches ? "row" : "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ProjectComponents />
        </Grid>
      </Grid>

      {/* Section 6 */}

      <Grid style={{ marginTop: 20, paddingLeft: 25 }} className="font-link">
        <Grid
          style={{
            color: "#000",
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Our Qualities________
        </Grid>
        <Grid
          style={{
            color: "#2966be",
            fontSize: 35,
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Why Choose IBUZZ ?
        </Grid>

        <Grid
          item
          xs={12}
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <QualitiesCardComponent />
        </Grid>
      </Grid>

      {/* Section 7 */}

      <Grid
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: 80,
          marginLeft: 20,
        }}
        className="font-link"
      >
        <Grid style={{}}>
          <Grid
            style={{
              color: "#000",
              fontSize: 20,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            FAQ_____
          </Grid>
          <Grid
            style={{
              color: "#2966be",
              fontSize: 35,
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Frequently Asked Questions
          </Grid>
        </Grid>

        <Grid
          style={{
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            paddingRight: 20,
          }}
        >
          <Grid style={{ width: matches ? "70%" : "100%" }}>
            <FaqComponent />
          </Grid>
        </Grid>
      </Grid>

      {/* Section 8 */}

      <Grid
        container
        spacing={2}
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          width: "100%",
          marginTop: 25,
        }}
        className="font-link"
      >
        <Grid
          item
          xs={12}
          md={6}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            paddingLeft: 20,
          }}
        >
          <Grid style={{ color: "#000", fontSize: 20, fontWeight: "bold" }}>
            We Make Connections
          </Grid>
          <Grid style={{ color: "#2966be", fontSize: 45 }}>
            Tell us about your project
          </Grid>

          <form ref={form} onSubmit={sendEmail}>
            <Grid style={{ display: "flex", flexDirection: "column" }}>
              <Grid
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                  marginTop: 30,
                }}
              >
                <Grid style={{ width: "50%" }}>
                  <div>Name</div>
                  <TextField
                    id="outlined-basic"
                    label="Name"
                    variant="standard"
                    value={name}
                    name="client_name"
                    fullWidth
                    onChange={(e) => setName(e.target.value)}
                  />
                </Grid>
                <Grid style={{ marginLeft: 10, width: "50%" }}>
                  <div>Email</div>
                  <TextField
                    id="outlined-basic"
                    label="Email Address"
                    value={email}
                    variant="standard"
                    name="client_email"
                    fullWidth
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Grid>
              </Grid>

              <Grid
                style={{ display: "flex", flexDirection: "row", marginTop: 30 }}
              >
                <Grid style={{ width: "50%" }}>
                  <div>Phone</div>
                  <TextField
                    id="outlined-basic"
                    label="Phone Number"
                    value={number}
                    variant="standard"
                    name="client_number"
                    fullWidth
                    onChange={(e) => setNumber(e.target.value)}
                  />
                </Grid>
                <Grid style={{ marginLeft: 10, width: "50%" }}>
                  <div>What Service Do You Want</div>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    name="client_service"
                    value={service}
                    onChange={handleChange}
                    label="Services"
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
              </Grid>

              <Grid
                style={{ display: "flex", flexDirection: "row", marginTop: 30 }}
              >
                <Grid style={{ width: "100%" }}>
                  <div>Description</div>
                  <TextField
                    id="outlined-basic"
                    label="Enter The Project Description"
                    value={description}
                    name="project_description"
                    variant="standard"
                    fullWidth
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </Grid>
              </Grid>

              <Grid
                style={{ display: "flex", flexDirection: "row", marginTop: 30 }}
              >
                <Grid
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    variant="contained"
                    type="submit"
                    size="large"
                    style={{
                      background: "linear-gradient(to right,#ff2500,#ff7100)",
                      boxShadow: "0 0 0 6px rgb(255,113,0,0.25)",
                    }}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </Grid>

        <Grid
          item
          xs={12}
          md={4}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          <Grid style={{ color: "#000", fontSize: 20, fontWeight: "bold" }}>
            GET IN TOUCH
          </Grid>

          <Grid style={{ color: "#2966be", fontSize: 45 }}>
            For work inquiry
          </Grid>

          <Grid
            style={{
              width: "100%",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <Grid style={{}}>
              <Grid>
                <Grid
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: 20,
                  }}
                >
                  <LocationOnIcon
                    fontSize={"large"}
                    sx={{ color: "#9cbccb" }}
                  />

                  <Grid style={{ display: "flex", flexDirection: "column" }}>
                    <div
                      style={{
                        fontSize: 25,
                        color: "#2966be",
                        fontWeight: "bold",
                      }}
                    >
                      Find US
                    </div>
                    <a
                      href="https://goo.gl/maps/VurxKFRojURe5FrG6"
                      style={{ textDecoration: "none" }}
                    >
                      <div style={{ color: "#525252", fontSize: 20 }}>
                        Jinsi Rd Number 2, Lohiya Bazaar
                      </div>
                      <div style={{ color: "#525252", fontSize: 20 }}>
                        Gwalior, Madhya Pradesh 474009
                      </div>
                    </a>
                  </Grid>
                </Grid>

                <Grid
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: 20,
                  }}
                >
                  <CallIcon fontSize={"large"} sx={{ color: "#9cbccb" }} />

                  <Grid style={{ display: "flex", flexDirection: "column" }}>
                    <div
                      style={{
                        fontSize: 25,
                        color: "#2966be",
                        fontWeight: "bold",
                      }}
                    >
                      Call US
                    </div>
                    <div style={{ color: "#525252", fontSize: 20 }}>
                      +918889430333
                    </div>
                  </Grid>
                </Grid>

                <Grid
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: 20,
                  }}
                >
                  <EmailIcon fontSize={"large"} sx={{ color: "#9cbccb" }} />

                  <Grid style={{ display: "flex", flexDirection: "column" }}>
                    <div
                      style={{
                        fontSize: 25,
                        color: "#2966be",
                        fontWeight: "bold",
                      }}
                    >
                      Mail US
                    </div>
                    <a
                      style={{
                        color: "#525252",
                        fontSize: 20,
                        textDecoration: "none",
                      }}
                      href="mailto:ibuzz@indiabuzz.co.in?subject=Me&body=Hello! I Want To Take Knowledge About Your Services"
                    >
                      ibuzz@indiabuzz.co.in
                    </a>
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

export default Home;
