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


const Faq=[{question:"What does IBUZZ actually do?",
answer:"IBUZZ is the industry leading software development and digital marketing company that works with your business to provide software and digital marketing related solutions that can help your business to achieve its goals and objectives."},

{question:"Do my business really need web design and development ?",
answer:"Your website is the first thing that your prospective clients or customers see. With a well-put-together and aesthetically pleasing website, you increase your chances of winning over that crucial client and selling that product. It also benefits your customers user experience,which in turn encourages them to work with you."},

{question:"Why is IBUZZ the best Software Development and Digital Marketing firm ?",
answer:"With best-in-class service and experienced staff, IBUZZ is equipped to handle every type of project with expert execution, which means you always get the best business solutions that are bespoke to your business needs."},

{question:"How Can a Beginner Start Web Development ?",
answer:"With best-in-class service and experienced staff,IBUZZ is equipped to handle every type of project with expert execution, which means you always get the best business solutions that are bespoke to your business needs."},

]
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
  

const Seopackages = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
    const classes=useStyles()

    

const FaqComponent =()=>{
  return(
    Faq.map((item)=>{return(<Accordion className="font-link">
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1a-content"
      id="panel1a-header"
    >
      <div className="font-link" style={{color:'#2966be',fontSize:'24px'}} >{item.question}</div>
    </AccordionSummary>
    <AccordionDetails>
      <div className="font-link">
       {item.answer}
      </div>
    </AccordionDetails>
  </Accordion>)}))
 }
 

    
      return (
      <Grid>
     
      <Grid container spacing={2}>
  <Grid item xs={12} md={12}><Navbar/></Grid>
  </Grid>
  
  <Grid container spacing={2} style={{marginTop:matches?10:0,display:'flex',justifyContent:'space-around'}} className="font-link">  
        <Grid item xs={12} md={5} style={{width:'40vw',marginTop:matches?60:0}}>
        <Grid  style={{fontSize:matches?72:65,color:'#2966be',marginTop:15,marginBottom:20,display:'block'}}>
        SEO Packages in <b>India</b>
         
      </Grid>
        <Grid  style={{fontSize:20,color:'#1a1b1e',marginTop:30,marginBottom:20,display:'block'}} >
        Building dream website with great expertise and extreme extensive experience for the best mobile and desktop experience
      </Grid>
      <Grid style={{padding:20}}>
      <Button variant='contained' size='large' style={{borderRadius:20,background:"linear-gradient(to right,#ff2500,#ff7100)",boxShadow:"0 0 0 6px rgb(255,113,0,0.25)"}} href='https://wa.link/clvo86'>Free Consultation</Button>

    </Grid>
      </Grid>
      <Grid item md={5} style={{width:'40vw',display:'flex',justifyContent:'center',}}>
         <img src={require('../../assets/seobackground.png')} style={{width:matches?'40vw':'80vw',Hover:{}}}  className={classes.hover}/>
      </Grid>
    </Grid>
  
  
     <Grid container spacing={2} style={{marginTop:20,display:'flex',justifyContent:'space-around'}} className="font-link">  
        
      <Grid item  md={5} style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
         <img src={require('../../assets/seoabout.png')} style={{width:matches?'100%':'80vw',height:'80%'}} className={classes.hover}/>
      </Grid>
      
      <Grid item xs={12} md={5} style={{width:'40vw',marginTop:60}}>
      <Grid item xs={12} md={12} style={{color:'#ff3900',fontSize:20,fontWeight:'bold'}}>
      WE OFFER BEST IN CLASS________
     </Grid>
     <Grid item xs={12} md={12} style={{color:'#2966be',fontSize:55,}}>
     Affordable <b>SEO Plans</b>
     </Grid>
     <Grid item xs={12} md={12} style={{color:'#2966be',fontSize:55,}}>
     On-site, Technical and Off-site SEO that sets you up for success.
     </Grid>
        <Grid  style={{fontSize:22,color:'#1a1b1e',marginTop:30,marginBottom:20,display:'block'}}>
        A website is meant to be ranked first on the search engine results page, and we at IBUZZ specialise in just that. Get all-round SEO services at an affordable price point that encompasses all the major domains of SEO optimization. With in-depth keyword research and backed up with competitor analysis, we ensure that your SEO strategy is on point and you are all set for success.
      </Grid>
        <Grid  style={{fontSize:22,color:'#1a1b1e',marginTop:30,marginBottom:20,display:'block'}}>
        With in-depth keyword research and content optimisation, we with On-site SEO ensure that your website follows all the SERP compliances, which in turn has a huge impact on the rank of your site on the SERP. A well-idealised and implemented content cluster and internal link building with a tinch of alt-tag optimisation is all your business needs to ride the #1 wave and grow exponentially. Add the magic of a bit of perfect link management and audit, and you are #1 wherever you can see.
      </Grid>
      </Grid>
    </Grid>
  
    <Grid container spacing={2} style={{marginTop:20}} className="font-link">
   
   <Grid item xs={12} md={12} style={{color:'#ff3900',fontSize:20,fontWeight:'bold',textAlign:'center'}}>
   AS UNIQUE AS YOU________
   </Grid>
   <Grid item xs={12} md={12} style={{color:'#2966be',fontSize:55,fontWeight:'bold',textAlign:'center'}}>
   SEO Packages bespoke to you.
   </Grid>
    <Grid style={{color:'#1a1b1e',paddingRight:matches?110:0,paddingLeft:matches?110:25,fontSize:matches?20:24,textAlign:'center'}}>
    Whether you are a small budding enterprise or a big conglomerate and everything in between, our SEO plans will fit right in with your business goals and plans. With three core SEO packages as well as endless customizations, we ensure that our services are as malleable as your business needs. We also offer the best in class and renowned ecommerce SEO solutions that cater to all types of ecommerce businesses. 
    </Grid> 
    <Grid style={{color:'#1a1b1e',marginTop:20,paddingRight:matches?110:0,paddingLeft:matches?110:25,fontSize:matches?20:24,textAlign:'center'}}>
    Contact us and we will be happy to work with you on providing the perfect SEO solution that your business needs. Grow globally or penetrate the market locally with the best-in-class SEO marketing from IBUZZ 
    </Grid> 
   </Grid>

   <Grid container spacing={2} style={{marginTop:20}} className="font-link">
   <Grid item xs={12} md={12} style={{color:'#2966be',fontSize:55,textAlign:'center'}}>
   <b>SEO Packages</b> In India
   </Grid>
   <Grid item xs={12} md={12} style={{color:'#ff3900',fontWeight:'bold',textAlign:'center'}}>
   <Plan currency='a' Plans={plans} />
   </Grid>
   </Grid>

   <Grid container spacing={2} style={{marginTop:20,display:'flex',justifyContent:'space-around'}} className="font-link">  
        <Grid item xs={12} md={5} style={{width:'40vw',marginTop:60}}>
        <Grid item xs={12} md={12} style={{color:'#ff3900',fontSize:20,fontWeight:'bold'}}>
        SEO SERVICES WITH RESULTS________
       </Grid>
       <Grid item xs={12} md={12} style={{color:'#2966be',fontSize:55,fontWeight:'bold'}}>
       SEO increases rank, increases traffic, and boosts your sales.
       </Grid>
          <Grid  style={{fontSize:22,color:'#1a1b1e',marginTop:30,marginBottom:20,display:'block'}}>
          We at IBUZZ offer SEO services that are focused on increasing the ranking of your website by following all the best practices so that every time someone searches for something related to you, you show up right in front of them.
        </Grid>
          <Grid  style={{fontSize:22,color:'#1a1b1e',marginTop:30,marginBottom:20,display:'block'}}>
          We also work keenly to increase the traffic on your website by creating, implementing and optimising excellent link building strategy that is focussed on increasing the user traffic on your business
        </Grid>
          <Grid  style={{fontSize:22,color:'#1a1b1e',marginTop:30,marginBottom:20,display:'block'}}>
          Sales is the ultimate goal of the business, and we understand it, thus by implementing best seo strategies we ensure that your business gets the qualified user traffic that converts into sales that you seek
        </Grid>
        </Grid>
        <Grid item  md={5} style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
           <img src={require('../../assets/seobg.png')} style={{width:matches?'100%':'80vw',height:'80%'}} className={classes.hover} />
        </Grid>
      </Grid>
      
      
      
      
      <Grid  style={{display:'flex',justifyContent:'center',marginTop:80}} className="font-link">
  <Grid container spacing={2} style={{width:"70%",background:"linear-gradient(to right,#ff2500,#ff7100)",borderRadius:5,display:'flex',flexDirection:'row',padding:30}}>
  <Grid item xs={12} md={12} style={{display:'flex',flexDirection:'column',justifyContent:'center',textAlign:'center'}}>
    <Grid style={{color:'#fff',fontSize:40,fontWeight:'bold'}}>
    SEO packages that suit you
    </Grid>
    <Grid style={{color:'#fff',fontSize:20,textAlign:'center',marginTop:25}}>
    Each business has different needs, and we understand that one size does not fit all. A startup has different needs than a growing business, and a SME has different needs than an enterprise. So we have created SEO plans by taking your needs into consideration, so that no matter where you are in your business journey, we will always have something in store for you.Our plan range caters to Startups, SME business, Growth-oriented business, and Enterprises. With the best-in-class and well-thought-out SEO plans, we ensure that you get the bespoke solutions and services that cater to your specific needs.
    </Grid>
  </Grid>

  </Grid>
</Grid>

<Grid style={{display:'flex',flexDirection:'column',marginTop:80,marginLeft:20}} className="font-link">
    
    <Grid style={{}}>
      <Grid style={{color:'#ff3900',fontSize:20,textAlign:'center'}}>
            FAQ_____
      </Grid>
      <Grid style={{color:'#2966be',fontSize:45,textAlign:'center'}}>
      Frequently Asked Questions
      </Grid>
    </Grid>
   
    <Grid style={{width:'100%',display:"flex",flexWrap:'wrap',justifyContent:'center'}}>
    
    <Grid style={{width:matches?'70%':'100%'}}>
<FaqComponent/>
    </Grid>
        </Grid>
   </Grid>


     <Grid>
          <Footer/>
      </Grid>
  
  </Grid>
    )
}

export default Seopackages
