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
  

const Dynamicwebsitepackages = () => {
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
        <b>Dynamic Website</b> Go Online
         
      </Grid>
      
      <Grid style={{padding:20}}>
      <Button variant='contained' size='large' className="font-link" style={{borderRadius:20,background:"linear-gradient(to right,#ff2500,#ff7100)",boxShadow:"0 0 0 6px rgb(255,113,0,0.25)"}} href='https://wa.link/clvo86'>Free Consultation</Button>

    </Grid>
      </Grid>
      <Grid item md={5} style={{width:'40vw',display:'flex',justifyContent:'center'}}>
         <img src={require('../../assets/dynamicwebsitebg.png')} style={{width:matches?'40vw':'80vw'}} className={classes.hover} />
      </Grid>
    </Grid>
  
  
     <Grid container spacing={2} style={{marginTop:20,display:'flex',justifyContent:'space-around'}} className="font-link">  
        
      <Grid item  md={5} style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
         <img src={require('../../assets/dynamicwebsitebg2.png')} style={{width:matches?'100%':'80vw',height:'80%'}} className={classes.hover}  />
      </Grid>
      
      <Grid item xs={12} md={5} style={{width:'40vw',marginTop:60}}>
      <Grid item xs={12} md={12} style={{color:'#ff3900',fontSize:20,fontWeight:'bold'}}>
      ONE WEBSITE FOR ALL YOUR BUSINESS NEEDS________
     </Grid>
     <Grid item xs={12} md={12} style={{color:'#2966be',fontSize:55,fontWeight:'bold'}}>
     Dynamic Website Packages
     </Grid>
        <Grid  style={{fontSize:22,color:'#1a1b1e',marginTop:30,marginBottom:20,display:'block'}}>
        Dynamic websites allow you to give your users a unique browsing experience with personalized browsing. If your business works by sending or receiving user data to provide them with a user experience tailored only for them, then dynamic websites are what you were searching for.
      </Grid>
        <Grid  style={{fontSize:22,color:'#1a1b1e',marginTop:30,marginBottom:20,display:'block'}}>
        We at IBUZZ offer the best in class, dynamic websites that allow you to offer a tailor-made user experience to your customers, thereby increasing the revenue of the business. We offer website building on the latest technological architecture with endless customizations bespoke to the needs of your business.
      </Grid>
      </Grid>
    </Grid>
  
    
   <Grid container spacing={2} style={{marginTop:20}} className="font-link">
   <Grid item xs={12} md={12} style={{color:'#2966be',fontSize:55,textAlign:'center'}}>
   <b>Dynamic Website Packages</b> In India
   </Grid>
   <Grid item xs={12} md={12} style={{color:'#ff3900',fontWeight:'bold',textAlign:'center'}}  >
   <Plan  currency='a' Plans={plans} />
   </Grid>
   </Grid>



     <Grid>
          <Footer/>
      </Grid>
  
  </Grid>
    )
}

export default Dynamicwebsitepackages
