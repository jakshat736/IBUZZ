import React from 'react'
import { Grid,Button } from '@mui/material'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Plan, PlanProps } from "pricing-table-react";
import { useStyles } from './HoverCss';


const plans  = [
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
  

const Localseopackages = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
const classes =useStyles()
    



    
      return (
      <Grid>
     
      <Grid container spacing={2}>
  <Grid item xs={12} md={12}><Navbar/></Grid>
  </Grid>
  
  <Grid container spacing={2} style={{marginTop:matches?10:0,display:'flex',justifyContent:'space-around'}} className="font-link">  
        <Grid item xs={12} md={5} style={{width:'40vw',marginTop:matches?60:0}}>
        <Grid  style={{fontSize:matches?72:65,color:'#2966be',marginTop:15,marginBottom:20,display:'block'}}>
        Start Growing Your Busines
         
      </Grid>
      
      <Grid style={{padding:20}}>
      <Button variant='contained' size='large' style={{borderRadius:20,background:"linear-gradient(to right,#ff2500,#ff7100)",boxShadow:"0 0 0 6px rgb(255,113,0,0.25)"}} href='https://wa.link/clvo86'>Free Consultation</Button>

    </Grid>
      </Grid>
      <Grid item md={5} style={{width:'40vw',display:'flex',justifyContent:'center'}}>
         <img src={require('../../assets/localseobg.png')} style={{width:matches?'40vw':'80vw'}} className={classes.hover} />
      </Grid>
    </Grid>
  
  
     <Grid container spacing={2} style={{marginTop:20,display:'flex',justifyContent:'space-around'}} className="font-link">  
        
      <Grid item  md={5} style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
         <img src={require('../../assets/localseobg2.png')} style={{width:matches?'100%':'80vw',height:'80%'}} className={classes.hover} />
      </Grid>
      
      <Grid item xs={12} md={5} style={{width:'40vw',marginTop:60}}>
      <Grid item xs={12} md={12} style={{color:'#ff3900',fontSize:20,fontWeight:'bold'}}>
      INCREASE BUSINESS LOCALLY________
     </Grid>
     <Grid item xs={12} md={12} style={{color:'#2966be',fontSize:55,fontWeight:'bold'}}>
     Local SEO Packages
     </Grid>
        <Grid  style={{fontSize:22,color:'#1a1b1e',marginTop:30,marginBottom:20,display:'block'}}>
        With the help of a well optimized local SEO campaign, you can get your business seen by the ones closest to you. Local SEO makes your business visible on the online yellow pages and listings such as Google My Business (GMB) or Bing Places so that the ones who are near or in your area of business can see you. Local SEO works expertly well for both product-based as well as service-based businesses. Local SEO also allows your business to be visible on maps and GPS services such as Google Maps, Apple Maps, Bing Maps, etc. This adds a level of authenticity for the customers, as they trust the business they can find near them.
      </Grid>
        <Grid  style={{fontSize:22,color:'#1a1b1e',marginTop:30,marginBottom:20,display:'block'}}>
        IBUZZ masterfully creates and optimizes your local SEO so that your business comes up first when your ideal customer is searching for someone just like you or the services you offer near them. We offer local SEO at an affordable price.
      </Grid>
      </Grid>
    </Grid>
  
    
   <Grid container spacing={2} style={{marginTop:20}} className="font-link">
   <Grid item xs={12} md={12} style={{color:'#2966be',fontSize:55,textAlign:'center'}}>
   <b>Local Seo Packages</b> In India
   </Grid>
   <Grid item xs={12} md={12} style={{color:'#ff3900',fontWeight:'bold',textAlign:'center'}} >
   <Plan currency='a' Plans={plans} />
   </Grid>
   </Grid>



     <Grid>
          <Footer/>
      </Grid>
  
  </Grid>
    )
}

export default Localseopackages
