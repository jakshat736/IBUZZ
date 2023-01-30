import React from 'react'
import { Grid,Button } from '@mui/material'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Plan, PlanProps } from "pricing-table-react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
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
  

const Staticwebsitepackages = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
    const classes=useStyles()
    


 

    
      return (
      <Grid>
     
      <Grid container spacing={2}>
  <Grid item xs={12} md={12}><Navbar/></Grid>
  </Grid>
  
  <Grid container spacing={2} style={{marginTop:matches?10:0,display:'flex',justifyContent:'space-around'}} className="font-link">  
        <Grid item xs={12} md={5} style={{width:'40vw',marginTop:matches?60:0}}>
        <Grid  style={{fontSize:matches?72:65,color:'#2966be',marginTop:15,marginBottom:20,display:'block'}}>
        <b>Static Website</b> Development
         
      </Grid>
      
      <Grid style={{padding:20}}>
      <Button variant='contained' size='large' style={{borderRadius:20,background:"linear-gradient(to right,#ff2500,#ff7100)",boxShadow:"0 0 0 6px rgb(255,113,0,0.25)"}} href='https://wa.link/clvo86'>Free Consultation</Button>

    </Grid>
      </Grid>
      <Grid item md={5} style={{width:'40vw',display:'flex',justifyContent:'center'}}>
         <img src={require('../../assets/staticwebsitebg.png')} style={{width:matches?'40vw':'80vw'}} className={classes.hover} />
      </Grid>
    </Grid>
  
  
     <Grid container spacing={2} style={{marginTop:20,display:'flex',justifyContent:'space-around'}} className="font-link">  
        
      <Grid item  md={5} style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
         <img src={require('../../assets/seoabout.png')} style={{width:matches?'100%':'80vw',height:'80%'}} className={classes.hover} />
      </Grid>
      
      <Grid item xs={12} md={5} style={{width:'40vw',marginTop:60}}>
      <Grid item xs={12} md={12} style={{color:'#ff3900',fontSize:20,fontWeight:'bold'}}>
      AESTHETIC AND FUNCTIONAL________
     </Grid>
     <Grid item xs={12} md={12} style={{color:'#2966be',fontSize:55,fontWeight:'bold'}}>
     Static Website Packages
     </Grid>
        <Grid  style={{fontSize:22,color:'#1a1b1e',marginTop:30,marginBottom:20,display:'block'}}>
        Get well-designed and expertly executed static websites for your business. Whether you want to get your business online or want to revamp the look and feel of your current website, we got you covered
      </Grid>
        <Grid  style={{fontSize:22,color:'#1a1b1e',marginTop:30,marginBottom:20,display:'block'}}>
        We at IBUZZ offer best-in-class website design, creation, and development solutions that set your business a class apart from the rest. Get the website fresh with the latest design trends, lightning fast loading speeds, and bespoke to the needs of your business.
      </Grid>
      </Grid>
    </Grid>
  
    
   <Grid container spacing={2} style={{marginTop:20}} className="font-link">
   <Grid item xs={12} md={12} style={{color:'#2966be',fontSize:55,textAlign:'center'}}>
   <b>Static Website Packages</b> In India
   </Grid>
   <Grid item xs={12} md={12} style={{color:'#ff3900',fontWeight:'bold',textAlign:'center'}}>
   <Plan currency='a' Plans={plans} />
   </Grid>
   </Grid>



     <Grid>
          <Footer/>
      </Grid>
  
  </Grid>
    )
}

export default Staticwebsitepackages
