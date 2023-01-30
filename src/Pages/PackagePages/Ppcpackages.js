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
  

const Ppcpackages = () => {
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
        PPC <b>(Pay Per Click)</b>
         
      </Grid>
      
      <Grid style={{padding:20}}>
      <Button variant='contained' size='large' style={{borderRadius:20,background:"linear-gradient(to right,#ff2500,#ff7100)",boxShadow:"0 0 0 6px rgb(255,113,0,0.25)"}} href='https://wa.link/clvo86'>Free Consultation</Button>

    </Grid>
      </Grid>
      <Grid item md={5} style={{width:'40vw',display:'flex',justifyContent:'center'}}>
         <img src={require('../../assets/ppcbg.png')} style={{width:matches?'40vw':'80vw'}} className={classes.hover} />
      </Grid>
    </Grid>
  
  
     <Grid container spacing={2} style={{marginTop:20,display:'flex',justifyContent:'space-around'}} className="font-link">  
        
      <Grid item  md={5} style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
         <img src={require('../../assets/ppcbg2.png')} style={{width:matches?'100%':'80vw',height:'80%'}} className={classes.hover}/>
      </Grid>
      
      <Grid item xs={12} md={5} style={{width:'40vw',marginTop:60}}>
      <Grid item xs={12} md={12} style={{color:'#ff3900',fontSize:20,fontWeight:'bold'}}>
      CAMPAIGNS WITH RESULTS________
     </Grid>
     <Grid item xs={12} md={12} style={{color:'#2966be',fontSize:55,fontWeight:'bold'}}>
     PPC Packages
     </Grid>
        <Grid  style={{fontSize:22,color:'#1a1b1e',marginTop:30,marginBottom:20,display:'block'}}>
        Ads are the best way you can instantly reach your target audience. With pay-per-click campaigns, you pay only when your target audience engages with your ads. We are the IBUZZ experts in masterfully placing bids on the right keywords that result in superior ad ROI for you. We are experts in running ads on the SEPR networks, display networks, as well as on platforms such as YouTube.
      </Grid>
        <Grid  style={{fontSize:22,color:'#1a1b1e',marginTop:30,marginBottom:20,display:'block'}}>
       We at IBUZZ are the one-stop solution for all your PPC paid marketing needs. We specialize in expert growth hacking that allows you to increase the business while receiving a high return on your investment.
      </Grid>
      </Grid>
    </Grid>
  
    
   <Grid container spacing={2} style={{marginTop:20}} className="font-link">
   <Grid item xs={12} md={12} style={{color:'#2966be',fontSize:55,textAlign:'center'}}>
   <b>PPC Packages</b> In India
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

export default Ppcpackages
