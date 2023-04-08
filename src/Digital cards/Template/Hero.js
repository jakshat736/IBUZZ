import React from "react";
import { Grid, IconButton, Button } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import LanguageIcon from "@mui/icons-material/Language";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import ShareIcon from "@mui/icons-material/Share";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import MessageIcon from "@mui/icons-material/Message";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TelegramIcon from "@mui/icons-material/Telegram";
import { saveAs } from "file-saver";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef } from "react";
const Hero = ({data}) => {
  const theme = useTheme();
  const [href, setHref] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const matches = useMediaQuery(theme.breakpoints.down(1000));
  var rs = useRef();
  var contact=data.contactFile


  const handleMessage = (e) => {
    setHref(
      `https://wa.me/+91${e.target.value}?text=${data.customWhatsappText}`
    );
  };
  const handleButtonClick = () => {
    setOpen(!open);
  };
  var settings = {
    arrows: false,
    infinite: true,
    scroll: true,
    speed: 500,
    slidesToShow:1,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay:true
  };

  const handleSendMessage = () => {
    window.location.href = `${data.smsBody}`;
  };
  const sms = `sms:?body=${encodeURIComponent(data.smsBody)}`;

  const handleClick = async (title, url) => {
    try {
      await navigator.share({
        title,
        url,
      });
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  function handleDownload() {
    const element = document.createElement("a");
  element.href = contact;
  element.download = "yourfile.vcf";
  document.body.appendChild(element);
  element.click();
  }
  const content = () => {
    return data.Product1.map((item) => {
     if(data.Product1.length==1){
      return (
        <Grid >
       
           <video autoPlay loop muted src={matches?item.image1:item.image}  style={{width:'100vw',maxHeight:350}}/>
        </Grid>
      );}
      else{
      return (
        <Grid >
          <img
            src={item.image}
            style={{width:'100%',maxHeight:270}}
          />
        </Grid>
      );}
    });
  };

  return (
    <Grid>
      {/* section 1 */}
      <Grid>
        <Grid xs={12} style={{ height: "35vh", position: "relative" }}>
         
          <Slider {...settings} ref={rs} swipeToSlide="true">
            {content()}
          </Slider>
        </Grid>

        <Grid
          item
          xs={12}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            top: -75,
            marginBottom: -75,
            textAlign: "center",
            zIndex: 1,
          }}
        >
          <Grid
            style={{
              width: 150,
              height: 150,
              borderRadius: "50%",
              overflow: "hidden",
              borderColor: "#000",
              borderWidth: 5,
            }}
          >
            <img
              src={data.logoImage}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Grid>
          <Grid style={{fontSize:'2rem',color:`${data.textColor}`}}>{data.name}</Grid>
        </Grid>

        <Grid style={{ paddingTop: "1rem", paddingBottom: "1rem" }}>
          <Grid style={{ textAlign: "center" }}>
            <Grid
              container
              spacing={2}
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <Grid item xs={4} md={3.5}>
                <IconButton href={`tel:${data.phoneNumber}`} color="primary" style={{backgroundColor:`${data.buttonColor}`,color:`${data.buttonContentColor}`}}>
                  <CallIcon fontSize="large" />
                </IconButton>
              </Grid>
              <Grid item xs={4} md={3.5}>
                <IconButton
                  color="primary"
                  href={data.whatsappLink}
                  style={{backgroundColor:`${data.buttonColor}`,color:`${data.buttonContentColor}`}}
                >
                  <WhatsAppIcon fontSize="large" />
                </IconButton>
              </Grid>
              <Grid item xs={4} md={3.5}>
                <IconButton href={`mailto:${data.mailId}`} color="primary" style={{backgroundColor:`${data.buttonColor}`,color:`${data.buttonContentColor}`}}>
                  <EmailIcon fontSize="large" />
                </IconButton>
              </Grid>
              <Grid item xs={4} md={3.5}>
                <IconButton color="primary" href={data.googleMapLink} style={{backgroundColor:`${data.buttonColor}`,color:`${data.buttonContentColor}`}}>
                  <FmdGoodIcon fontSize="large" />
                </IconButton>
              </Grid>
              <Grid item xs={4} md={3.5} >
                <IconButton href={data.pageHref} color="primary" style={{backgroundColor:`${data.buttonColor}`,color:`${data.buttonContentColor}`}}>
                  <LanguageIcon fontSize="large" />
                </IconButton>
              </Grid>
              <Grid item xs={4} md={3.5}>
                <IconButton color="primary" style={{backgroundColor:`${data.buttonColor}`,color:`${data.buttonContentColor}`}}>
                  <SearchIcon fontSize="large" />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid style={{ paddingTop: "1rem", paddingBottom: "1rem" }}>
          <Grid style={{ textAlign: "center" }}>
            <Grid
              container
              spacing={2}
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Grid
                item
                xs={12}
                md={6}
                style={{
                  display: "flex",

                  flexDirection: "row",
                }}
              >
                <Grid item xs={3.5} style={{marginTop:10, color:`${data.textColor}`}}>
                  <FmdGoodIcon fontSize="large"  />
                </Grid>
                <Grid item xs={3.5} style={{ fontSize: 35, marginTop: 10, color:`${data.textColor}` }}>
                  |
                </Grid>
                
                <Grid item xs={12} md={3.5} style={{textAlign:'left', fontSize: 16, marginTop: 10 }} > 
                <a href={data.googleMapLink} style={{textDecoration:'none', color:`${data.textColor}`}}>
                  {data.address1}
                  {data.address2}
                
                  {data.address3}
                  </a>
                </Grid>
              
              </Grid>
              <Grid
                item
                xs={6.8}
                md={6}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "row",

                }}
              >
                <Grid item xs={3.5} style={{marginTop:10, color:`${data.textColor}`}}>
                  <CallIcon fontSize="large" />
                </Grid>
                <Grid item xs={3.5} style={{ fontSize: 35, marginTop: 10, color:`${data.textColor}` }}>
                  |
                </Grid>
                <Grid item xs={3.5} style={{textAlign:'left', fontSize: 16, marginTop: 10, color:`${data.textColor}` }}>
                 {data.phoneNumber}
                  <br />
                  {data.phoneNumber1}
                  <br />
                  {data.phoneNumber2}
                  <br />
                  {data.phoneNumber3}
                </Grid>
              </Grid>
              <Grid
                item
                xs={6.8}
                md={6}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "row",
                }}
              >
                <Grid item xs={3.5} style={{marginTop:10, color:`${data.textColor}`}}>
                  <EmailIcon fontSize="large" />
                </Grid>
                <Grid item xs={3.5} style={{ fontSize: 35, marginTop: 10, color:`${data.textColor}` }}>
                  |
                </Grid>
                <Grid item xs={3.5} style={{ textAlign:'left',fontSize: 16, marginTop: 10, }}>
           <a href={`mailto:${data.mailId}`} style={{textDecoration:'none', color:`${data.textColor}`}}>      
{data.mailId}</a>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid style={{ paddingTop: "1rem", paddingBottom: "1rem" }}>
          <Grid style={{ textAlign: "center" }}>
            <Grid
              container
              spacing={2}
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <Grid item xs={12} md={4.5}>
                <Grid style={{display:"flex",flexDirection:'row',justifyContent:'center'}}>
                  <TextField
                  style={{width:'50%',backgroundColor:'#fff'}}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">+91</InputAdornment>
                      ),
                    }}
                    onChange={(e) => handleMessage(e)}
                    size="small"
                  />
                  <Button href={href} endIcon={<WhatsAppIcon />} variant="contained" style={{backgroundColor:'green',color:"white",width:'40%',marginLeft:10}}>
                   Send On
                  </Button>
                </Grid>
              </Grid>
              <Grid item xs={6} md={2.5}>
                <a>
                  {" "}
                  <Button style={{backgroundColor:`${data.buttonColor}`,color:`${data.buttonContentColor}`}} variant="contained" onClick={handleDownload}>
                    Add To Contact
                  </Button>
                </a>
              </Grid>
              
              <Grid item xs={6} md={2.5}>
                <Button
                  variant="contained"
                  endIcon={<ArrowDropDownIcon />}
                  onClick={handleButtonClick}
                  style={{backgroundColor:`${data.buttonColor}`,color:`${data.buttonContentColor}`}}
                >
                  Social Share
                </Button>
                <Box sx={{ display: open ? "block" : "none" }}>
                  <Grid container spacing={1}>
                    <Grid item>
                      <IconButton                   style={{backgroundColor:`${data.buttonColor}`,color:`${data.buttonContentColor}`,marginTop:10}}>
                        <FacebookIcon href={data.fbLink} />
                      </IconButton>
                    </Grid>
                    <Grid item>
                      <IconButton style={{backgroundColor:`${data.buttonColor}`,color:`${data.buttonContentColor}`,marginTop:10}} href={data.twitterLink}>
                        <TwitterIcon />
                      </IconButton>
                    </Grid>
                    <Grid item>
                      <IconButton style={{backgroundColor:`${data.buttonColor}`,color:`${data.buttonContentColor}`,marginTop:10}}href={data.linkdnLink}>
                        <LinkedInIcon />
                      </IconButton>
                    </Grid>
                  </Grid>
                  <Grid container spacing={1}>
                    <Grid item>
                      <IconButton style={{backgroundColor:`${data.buttonColor}`,color:`${data.buttonContentColor}`,marginTop:10}} href={ `sms:?body=${encodeURIComponent(data.smsBody)}`} >
                        <MessageIcon />
                      </IconButton>
                    </Grid>
                    <Grid item>
                      <IconButton style={{backgroundColor:`${data.buttonColor}`,color:`${data.buttonContentColor}`,marginTop:10}} href={data.instaLink}>
                        <InstagramIcon />
                      </IconButton>
                    </Grid>
                    <Grid item>
                      <IconButton style={{backgroundColor:`${data.buttonColor}`,color:`${data.buttonContentColor}`,marginTop:10}} href={data.pinterestLink}>
                        <PinterestIcon />
                      </IconButton>
                    </Grid>
                  </Grid>
                  <Grid container spacing={1}>
                    <Grid item>
                      <IconButton style={{backgroundColor:`${data.buttonColor}`,color:`${data.buttonContentColor}`,marginTop:10}} href={data.telegramLink}>
                        <TelegramIcon />
                      </IconButton>
                    </Grid>
                    <Grid item>
                      <IconButton style={{backgroundColor:`${data.buttonColor}`,color:`${data.buttonContentColor}`,marginTop:10}} href={data.whatsappLink}>
                        <WhatsAppIcon />
                      </IconButton>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
             
              <Grid item xs={6} md={2.5}>
                <Button
                  variant="contained"
                  onClick={() =>
                    handleClick(
                     `${data.title}`,
                      `${data.titleLink}`
                    )
                    
                  }
                  endIcon={<ShareIcon />}
                  style={{backgroundColor:`${data.buttonColor}`,color:`${data.buttonContentColor}`}}
                >
                  Share
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

      </Grid>
    </Grid>
  );
};

export default Hero;
