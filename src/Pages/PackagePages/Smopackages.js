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
  

const Smopackages = () => {
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
        Bring out traffice through  <b>SMO</b>
         
      </Grid>
        <Grid  style={{fontSize:20,color:'#1a1b1e',marginTop:30,marginBottom:20,display:'block'}}>
        Building dream website with great expertise and extreme extensive experience for the best mobile and desktop experience
      </Grid>
      <Grid style={{padding:20}}>
      <Button variant='contained' size='large' style={{borderRadius:20,background:"linear-gradient(to right,#ff2500,#ff7100)",boxShadow:"0 0 0 6px rgb(255,113,0,0.25)"}} href='https://wa.link/clvo86'>Free Consultation</Button>

    </Grid>
      </Grid>
      <Grid item md={5} style={{width:'40vw',display:'flex',justifyContent:'center'}}>
         <img src={require('../../assets/seobackground.png')} style={{width:matches?'40vw':'80vw'}} className={classes.hover}/>
      </Grid>
    </Grid>
  
  
     <Grid container spacing={2} style={{marginTop:20,display:'flex',justifyContent:'space-around'}} className="font-link">  
        
      <Grid item  md={5} style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
         <img src={require('../../assets/seoabout.png')} style={{width:matches?'100%':'80vw',height:'80%'}} className={classes.hover} />
      </Grid>
      
      <Grid item xs={12} md={5} style={{width:'40vw',marginTop:60}}>
      <Grid item xs={12} md={12} style={{color:'#ff3900',fontSize:20,fontWeight:'bold'}}>
      Social Media Optimization________
     </Grid>
     <Grid item xs={12} md={12} style={{color:'#2966be',fontSize:55,fontWeight:'bold'}}>
     SMO Packages
     </Grid>
        <Grid  style={{fontSize:22,color:'#1a1b1e',marginTop:30,marginBottom:20,display:'block'}}>
        Your customers spend most of their time on social media. This makes your social media account a powerful tool to connect with your target audience and potential customers. It allows you to have meaningful interactions with your audience, which results in increased reach, market penetration, and eventually sales for the brand. A well-executed and managed social media account can do wonders for your brand, and a mismanaged one can spell disaster.
      </Grid>
        <Grid  style={{fontSize:22,color:'#1a1b1e',marginTop:30,marginBottom:20,display:'block'}}>
        IBUZZ with the expert knowledge of handling and creating social media accounts that optimise your social media presence so that your brand message is clearly received and resonated by your intended target audiences. With expertly managed accounts, we make sure that your accounts get more engagement and followers. We also make sure to manage your brand's reputation across all the social media channels so that your brand is as spotless as it gets. So browse through our social media plans, choose what interests you the most, and leave everything to us.
      </Grid>
      </Grid>
    </Grid>
  
    
   <Grid container spacing={2} style={{marginTop:20}} className="font-link">
   <Grid item xs={12} md={12} style={{color:'#2966be',fontSize:55,textAlign:'center'}}>
   <b>SMO Packages</b> In India
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

export default Smopackages
