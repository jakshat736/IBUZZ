import React from "react";
import { Divider, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { IconButton } from "@mui/material";
import { useRef } from "react";

const Products = ({data}) => {
  const theme = useTheme();
  var rs = useRef();
  const [display1, setDisplay1] = React.useState("block");
  const [display2, setDisplay2] = React.useState("block");
  const [display3, setDisplay3] = React.useState("block");
  const [display4, setDisplay4] = React.useState("block");
  const [display5, setDisplay5] = React.useState("block");
  const [display6, setDisplay6] = React.useState("block");
  const [display7, setDisplay7] = React.useState("block");
  const [display8, setDisplay8] = React.useState("block");
  const [display9, setDisplay9] = React.useState("block");
  const [display10, setDisplay10] = React.useState("block");
  const [display11, setDisplay11] = React.useState("block");
  const matches = useMediaQuery(theme.breakpoints.down(500));
  const matches1 = useMediaQuery(theme.breakpoints.down(1030));

  var settings = {
    arrows: false,
    infinite: true,
    scroll: true,
    autoplay:true,
    speed: 500,
    slidesToShow: matches ? 1 : matches1 ? 4 : 7,
    slidesToScroll: 1,
    swipeToSlide: true,
  };
  var settings1 = {
    arrows: false,
    infinite: true,
    scroll: true,
    autoplay:true,
    speed: 500,
    slidesToShow: matches ? 1 :3,
    slidesToScroll: 1,
    swipeToSlide: true,
  };
  var settings2 = {
    arrows: false,
    infinite: true,
    scroll: true,
    autoplay:true,
    speed: 500,
    slidesToShow: matches ? 1 :3,
    slidesToScroll: 1,
    swipeToSlide: true,
  };
  var settings3 = {
    arrows: false,
    infinite: true,
    scroll: true,
    autoplay:true,
    speed: 500,
    slidesToShow: matches ? 1 :3,
    slidesToScroll: 1,
    swipeToSlide: true,
  };
  var settings4 = {
    arrows: false,
    infinite: true,
    scroll: true,
    autoplay:true,
    speed: 500,
    slidesToShow: matches ? 1 :3,
    slidesToScroll: 1,
    swipeToSlide: true,
  };
  var settings5 = {
    arrows: false,
    infinite: true,
    scroll: true,
    autoplay:true,
    speed: 500,
    slidesToShow: matches ? 1 :3,
    slidesToScroll: 1,
    swipeToSlide: true,
  };
  var settings6 = {
    arrows: false,
    infinite: true,
    scroll: true,
    autoplay:true,
    speed: 500,
    slidesToShow: matches ? 1 :3,
    slidesToScroll: 1,
    swipeToSlide: true,
  };
  var settings7 = {
    arrows: false,
    infinite: true,
    scroll: true,
    autoplay:true,
    speed: 500,
    slidesToShow: matches ? 1 :3,
    slidesToScroll: 1,
    swipeToSlide: true,
  };
  var settings8 = {
    arrows: false,
    infinite: true,
    scroll: true,
    autoplay:true,
    speed: 500,
    slidesToShow: matches ? 1 :3,
    slidesToScroll: 1,
    swipeToSlide: true,
  };
  var settings9 = {
    arrows: false,
    infinite: true,
    scroll: true,
    autoplay:true,
    speed: 500,
    slidesToShow: matches ? 1 :3,
    slidesToScroll: 1,
    swipeToSlide: true,
  };
  var settings10 = {
    arrows: false,
    infinite: true,
    scroll: true,
    autoplay:true,
    speed: 500,
    slidesToShow: matches ? 1 :3,
    slidesToScroll: 1,
    swipeToSlide: true,
  };
  var settings11 = {
    arrows: false,
    infinite: true,
    scroll: true,
    autoplay:true,
    speed: 200,
    slidesToShow: matches ? 1 :3,
    slidesToScroll: 1,
    swipeToSlide: true,
  };

  const Product2Component = () => {
    return data.Product2.map((item) => {
      return (
        <Grid item xs={matches ? 12 : 6} md={4} style={{ display: display11 }}>
          <Card
            sx={{
              minWidth: 300,
              marginBottom: 3,
              marginLeft:1,
             
              backgroundImage: `url(${data.bgImage})`,
              backgroundSize: "contain",
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={item.image}
                alt="green iguana"
              />
              <CardContent
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography gutterBottom variant="h5" component="div">
                  {item.name}
                </Typography>
                <Typography
                  component="div"
                  style={{
                    backgroundColor: "green",
                    display: "flex",
                    justifyContent: "center",
                    color: "#fff",
                    width: 70,
                    textAlign: "center",
                    alignItems: "center",
                    verticalAlign: "center",
                    height: 40,
                    borderRadius: 30,
                  }}
                >
                  {item.status}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                href={data.whatsappLink}
                style={{ backgroundColor:`${data.buttonColor}`,color:`${data.buttonContentColor}` }}
                size="medium"
                color="primary"
                variant="contained"
              >
                Buy Now
              </Button>
            </CardActions>
          </Card>
        </Grid>
      );
    });
  };
  const Product3Component = () => {
    return data.Product3.map((item) => {
      return (
        <Grid item xs={matches ? 12 : 6} md={4} style={{ display: display9 }}>
          <Card
            sx={{
              minWidth: 300,
              marginBottom: 3,
              marginLeft:1,
              
              backgroundImage: `url(${data.bgImage})`,
              backgroundSize: "contain",
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={item.image}
                alt="green iguana"
              />
              <CardContent
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography gutterBottom variant="h5" component="div">
                  {item.name}
                </Typography>
                <Typography
                  component="div"
                  style={{
                    backgroundColor: "green",
                    display: "flex",
                    justifyContent: "center",
                    color: "#fff",
                    width: 70,
                    textAlign: "center",
                    alignItems: "center",
                    verticalAlign: "center",
                    height: 40,
                    borderRadius: 30,
                  }}
                >
                  {item.status}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                href={data.whatsappLink}
                style={{ backgroundColor:`${data.buttonColor}`,color:`${data.buttonContentColor}` }}
                size="medium"
                color="primary"
                variant="contained"
              >
                Buy Now
              </Button>
            </CardActions>
          </Card>
        </Grid>
      );
    });
  };
  const Product4Component = () => {
    return data.Product4.map((item) => {
      return (
        <Grid item xs={matches ? 12 : 6} md={4} style={{ display: display10 }}>
          <Card
            sx={{
              minWidth: 300,
              marginBottom: 3,
              marginLeft:1,
              
              backgroundImage: `url(${data.bgImage})`,
              backgroundSize: "contain",
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={item.image}
                alt="green iguana"
              />
              <CardContent
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography gutterBottom variant="h5" component="div">
                  {item.name}
                </Typography>
                <Typography
                  component="div"
                  style={{
                    backgroundColor: "green",
                    display: "flex",
                    justifyContent: "center",
                    color: "#fff",
                    width: 70,
                    textAlign: "center",
                    alignItems: "center",
                    verticalAlign: "center",
                    height: 40,
                    borderRadius: 30,
                  }}
                >
                  {item.status}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                href={data.whatsappLink}
                style={{ backgroundColor:`${data.buttonColor}`,color:`${data.buttonContentColor}` }}
                size="medium"
                color="primary"
                variant="contained"
              >
                Buy Now
              </Button>
            </CardActions>
          </Card>
        </Grid>
      );
    });
  };

  const Product1Component = () => {
    return data.Product1.map((item) => {
      return (
        <Grid item xs={matches ? 12 : 6} md={4} style={{ display: display1 }}>
          <Card
            sx={{
              minWidth: 300,
              marginBottom: 3,
              marginLeft:1,
              
              backgroundImage: `url(${data.bgImage})`,
              backgroundSize: "contain",
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={item.image}
                alt="green iguana"
              />
              <CardContent
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography gutterBottom variant="h5" component="div">
                  {item.name}
                </Typography>
                <Typography
                  component="div"
                  style={{
                    backgroundColor: "green",
                    display: "flex",
                    justifyContent: "center",
                    color: "#fff",
                    width: 70,
                    textAlign: "center",
                    alignItems: "center",
                    verticalAlign: "center",
                    height: 40,
                    borderRadius: 30,
                  }}
                >
                  {item.status}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                href={data.whatsappLink}
                style={{ backgroundColor:`${data.buttonColor}`,color:`${data.buttonContentColor}` }}
                size="medium"
                color="primary"
                variant="contained"
              >
                Buy Now
              </Button>
            </CardActions>
          </Card>
        </Grid>
      );
    });
  };

  const Product6Component = () => {
    return data.Product6.map((item) => {
      return (
        <Grid item xs={matches ? 12 : 6} md={4} style={{ display: display5 }}>
          <Card
            sx={{
              minWidth: 300,
              marginBottom: 3,
              marginLeft:1,
              
              backgroundImage: `url(${data.bgImage})`,
              backgroundSize: "contain",
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={item.image}
                alt="green iguana"
              />
              <CardContent
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography gutterBottom variant="h5" component="div">
                  {item.name}
                </Typography>
                <Typography
                  component="div"
                  style={{
                    backgroundColor: "green",
                    display: "flex",
                    justifyContent: "center",
                    color: "#fff",
                    width: 70,
                    textAlign: "center",
                    alignItems: "center",
                    verticalAlign: "center",
                    height: 40,
                    borderRadius: 30,
                  }}
                >
                  {item.status}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                href={data.whatsappLink}
                style={{ backgroundColor:`${data.buttonColor}`,color:`${data.buttonContentColor}` }}
                size="medium"
                color="primary"
                variant="contained"
              >
                Buy Now
              </Button>
            </CardActions>
          </Card>
        </Grid>
      );
    });
  };
  const Product7Component = () => {
    return data.Product7.map((item) => {
      return (
        <Grid item xs={matches ? 12 : 6} md={4} style={{ display: display6 }}>
          <Card
            sx={{
              minWidth: 300,
              marginBottom: 3,
              marginLeft:1,
              
              backgroundImage: `url(${data.bgImage})`,
              backgroundSize: "contain",
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={item.image}
                alt="green iguana"
              />
              <CardContent
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography gutterBottom variant="h5" component="div">
                  {item.name}
                </Typography>
                <Typography
                  component="div"
                  style={{
                    backgroundColor: "green",
                    display: "flex",
                    justifyContent: "center",
                    color: "#fff",
                    width: 70,
                    textAlign: "center",
                    alignItems: "center",
                    verticalAlign: "center",
                    height: 40,
                    borderRadius: 30,
                  }}
                >
                  {item.status}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                href={data.whatsappLink}
                style={{ backgroundColor:`${data.buttonColor}`,color:`${data.buttonContentColor}` }}
                size="medium"
                color="primary"
                variant="contained"
              >
                Buy Now
              </Button>
            </CardActions>
          </Card>
        </Grid>
      );
    });
  };

  const Product5Component = () => {
    return data.Product5.map((item) => {
      return (
        <Grid item xs={matches ? 12 : 6} md={4} style={{ display: display2 }}>
          <Card
            sx={{
              minWidth: 300,
              marginBottom: 3,
              marginLeft:1,
              
              backgroundImage: `url(${data.bgImage})`,
              backgroundSize: "contain",
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={item.image}
                alt="green iguana"
              />
              <CardContent
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography gutterBottom variant="h5" component="div">
                  {item.name}
                </Typography>
                <Typography
                  component="div"
                  style={{
                    backgroundColor: "green",
                    display: "flex",
                    justifyContent: "center",
                    color: "#fff",
                    width: 70,
                    textAlign: "center",
                    alignItems: "center",
                    verticalAlign: "center",
                    height: 40,
                    borderRadius: 30,
                  }}
                >
                  {item.status}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                href={data.whatsappLink}
                style={{ backgroundColor:`${data.buttonColor}`,color:`${data.buttonContentColor}` }}
                size="medium"
                color="primary"
                variant="contained"
              >
                Buy Now
              </Button>
            </CardActions>
          </Card>
        </Grid>
      );
    });
  };
  const Product8Component = () => {
    return data.Product8.map((item) => {
      return (
        <Grid item xs={matches ? 12 : 6} md={4} style={{ display: display3 }}>
          <Card
            sx={{
              minWidth: 300,
              marginBottom: 3,
              marginLeft:1,
              
              backgroundImage: `url(${data.bgImage})`,
              backgroundSize: "contain",
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={item.image}
                alt="green iguana"
              />
              <CardContent
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography gutterBottom variant="h5" component="div">
                  {item.name}
                </Typography>
                <Typography
                  component="div"
                  style={{
                    backgroundColor: "green",
                    display: "flex",
                    justifyContent: "center",
                    color: "#fff",
                    width: 70,
                    textAlign: "center",
                    alignItems: "center",
                    verticalAlign: "center",
                    height: 40,
                    borderRadius: 30,
                  }}
                >
                  {item.status}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                href={data.whatsappLink}
                style={{ backgroundColor:`${data.buttonColor}`,color:`${data.buttonContentColor}` }}
                size="medium"
                color="primary"
                variant="contained"
              >
                Buy Now
              </Button>
            </CardActions>
          </Card>
        </Grid>
      );
    });
  };
  const Product9Component = () => {
    return data.Product9.map((item) => {
      return (
        <Grid item xs={matches ? 12 : 6} md={4} style={{ display: display8 }}>
          <Card
            sx={{
              minWidth: 300,
              marginBottom: 3,
              marginLeft:1,
              
              backgroundImage: `url(${data.bgImage})`,
              backgroundSize: "contain",
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={item.image}
                alt="green iguana"
              />
              <CardContent
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography gutterBottom variant="h5" component="div">
                  {item.name}
                </Typography>
                <Typography
                  component="div"
                  style={{
                    backgroundColor: "green",
                    display: "flex",
                    justifyContent: "center",
                    color: "#fff",
                    width: 70,
                    textAlign: "center",
                    alignItems: "center",
                    verticalAlign: "center",
                    height: 40,
                    borderRadius: 30,
                  }}
                >
                  {item.status}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                href={data.whatsappLink}
                style={{ backgroundColor:`${data.buttonColor}`,color:`${data.buttonContentColor}` }}
                size="medium"
                color="primary"
                variant="contained"
              >
                Buy Now
              </Button>
            </CardActions>
          </Card>
        </Grid>
      );
    });
  };
  const Product10Component = () => {
    return data.Product10.map((item) => {
      return (
        <Grid item xs={matches ? 12 : 6} md={4} style={{ display: display4 }}>
          <Card
            sx={{
              minWidth: 300,
              marginBottom: 3,
              marginLeft:1,
              
              backgroundImage: `url(${data.bgImage})`,
              backgroundColor:`${data.bgcolor}`,
              backgroundSize: "contain",
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={item.image}
                alt="green iguana"
              />
              <CardContent
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography gutterBottom variant="h5" component="div">
                  {item.name}
                </Typography>
                <Typography
                  component="div"
                  style={{
                    backgroundColor: "green",
                    display: "flex",
                    justifyContent: "center",
                    color: "#fff",
                    width: 70,
                    textAlign: "center",
                    alignItems: "center",
                    verticalAlign: "center",
                    height: 40,
                    borderRadius: 30,
                  }}
                >
                  {item.status}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                href={data.whatsappLink}
                style={{ backgroundColor:`${data.buttonColor}`,color:`${data.buttonContentColor}` }}
                size="medium"
                color="primary"
                variant="contained"
              >
                Buy Now
              </Button>
            </CardActions>
          </Card>
        </Grid>
      );
    });
  };
  const Product11Component = () => {
    return data.Product11.map((item) => {
      return (
        <Grid item xs={matches ? 12 : 6} md={4} style={{ display: display7 }}>
          <Card
            sx={{
              minWidth: 300,
              marginBottom: 3,
              marginLeft:1,
              
              backgroundImage: `url(${data.bgImage})`,
              backgroundSize: "contain",
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={item.image}
                alt="green iguana"
              />
              <CardContent
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography gutterBottom variant="h5" component="div">
                  {item.name}
                </Typography>
                <Typography
                  component="div"
                  style={{
                    backgroundColor: "green",
                    display: "flex",
                    justifyContent: "center",
                    color: "#fff",
                    width: 70,
                    textAlign: "center",
                    alignItems: "center",
                    verticalAlign: "center",
                    height: 40,
                    borderRadius: 30,
                  }}
                >
                  {item.status}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                href={data.whatsappLink}
                style={{ backgroundColor:`${data.buttonColor}`,color:`${data.buttonContentColor}` }}
                size="medium"
                color="primary"
                variant="contained"
              >
                Buy Now
              </Button>
            </CardActions>
          </Card>
        </Grid>
      );
    });
  };


  const Product1Slider=()=>{
   return( <>
     <Typography style={{textAlign:'center',fontSize:30,fontWeight:'bold', color:`${data.textColor}`,marginLeft:matches?0:'-8%'}}>{data.category1}</Typography>
    <Slider {...settings1}  ref={rs}>
    {Product1Component()}
  </Slider>
  </>)
  }
  const Product2Slider=()=>{
   return( <>
     <Typography style={{textAlign:'center',fontSize:30,fontWeight:'bold', color:`${data.textColor}`,marginLeft:matches?0:'-8%'}}>{data.category2}</Typography>
    <Slider {...settings2}  ref={rs}>
    {Product2Component()}
  </Slider>
  </>)
  }
  const Product3Slider=()=>{
   return( <>
     <Typography style={{textAlign:'center',fontSize:30,fontWeight:'bold', color:`${data.textColor}`,marginLeft:matches?0:'-8%'}}>{data.category3}</Typography>
    <Slider {...settings3}  ref={rs}>
    {Product3Component()}
  </Slider>
  </>)
  }
  const Product4Slider=()=>{
   return( <>
     <Typography style={{textAlign:'center',fontSize:30,fontWeight:'bold', color:`${data.textColor}`,marginLeft:matches?0:'-8%'}}>{data.category4}</Typography>
    <Slider {...settings4}  ref={rs}>
    {Product4Component()}
  </Slider>
  </>)
  }
  const Product5Slider=()=>{
   return( <>
     <Typography style={{textAlign:'center',fontSize:30,fontWeight:'bold', color:`${data.textColor}`,marginLeft:matches?0:'-8%'}}>{data.category5}</Typography>
    <Slider {...settings5}  ref={rs}>
    {Product5Component()}
  </Slider>
  </>)
  }
  const Product6Slider=()=>{
   return( <>
     <Typography style={{textAlign:'center',fontSize:30,fontWeight:'bold', color:`${data.textColor}`,marginLeft:matches?0:'-8%'}}>{data.category6}</Typography>
    <Slider {...settings6}  ref={rs}>
    {Product6Component()}
  </Slider>
  </>)
  }
  const Product7Slider=()=>{
   return( <>
     <Typography style={{textAlign:'center',fontSize:30,fontWeight:'bold', color:`${data.textColor}`,marginLeft:matches?0:'-8%'}}>{data.category7}</Typography>
    <Slider {...settings7}  ref={rs}>
    {Product7Component()}
  </Slider>
  </>)
  }
  const Product8Slider=()=>{
   return( <>
     <Typography style={{textAlign:'center',fontSize:30,fontWeight:'bold', color:`${data.textColor}`,marginLeft:matches?0:'-8%'}}>{data.category8}</Typography>
    <Slider {...settings8}  ref={rs}>
    {Product8Component()}
  </Slider>
  </>)
  }
  const Product9Slider=()=>{
   return( <>
     <Typography style={{textAlign:'center',fontSize:30,fontWeight:'bold', color:`${data.textColor}`,marginLeft:matches?0:'-8%'}}>{data.category9}</Typography>
    <Slider {...settings9}  ref={rs}>
    {Product9Component()}
  </Slider>
  </>)
  }
  const Product10Slider=()=>{
   return( <>
     <Typography style={{textAlign:'center',fontSize:30,fontWeight:'bold', color:`${data.textColor}`,marginLeft:matches?0:'-8%'}}>{data.category10}</Typography>
    <Slider {...settings10}  ref={rs}>
    {Product10Component()}
  </Slider>
  </>)
  }
  const Product11Slider=()=>{
   return( <>
     <Typography style={{textAlign:'center',fontSize:30,fontWeight:'bold', color:`${data.textColor}`,marginLeft:matches?0:'-8%'}}>{data.category11}</Typography>
    <Slider {...settings11}  ref={rs}>
    {Product11Component()}
  </Slider>
  </>)
  }




  return (
    <Grid style={{ marginTop: "10%" }}>
      <Grid
        container
        spacing={2}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Grid
          item
          xs={12}
          md={12}
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: "1rem",
            fontWeight: "bold", color:`${data.textColor}`
          }}
        >
          Products
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          style={{ display: "flex", justifyContent: "center", marginTop: -20, color:`${data.textColor}` }}
        >
          ______________________________________
        </Grid>
        
        <Grid item xs={10} md={10} style={{fontColor:'#000'}}>
         
       <Product1Slider/>
       <Product2Slider/>
       <Product3Slider/>
       <Product4Slider/>
       <Product5Slider/>
       <Product6Slider/>
       <Product7Slider/>
       <Product8Slider/>
       <Product9Slider/>
       <Product10Slider/>
       <Product11Slider/>

          
       
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Products;
