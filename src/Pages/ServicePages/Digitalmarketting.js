import React from 'react'
import { Grid } from '@mui/material'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useStyles } from '../PackagePages/HoverCss';

const qualities = [
    {
      name: 'Initial Project Requirements',
      description:"Before taking any further action, we evaluate your brand, its goal, its stage, and its competition.",
      avatar: require('../../assets/project.png'),
    },
    {
      name: 'Finding Next-Level Ideas',
      description:"Great and useful ideas guarantee successful outcomes and assist you in realizing your full potential",
      avatar: require('../../assets/idea (1).png'),
    },
    {
      name: 'Start Optimization',
      description:"For your website or app, we design and perform end-to-end platform optimization.",
      avatar: require('../../assets/page-speed.png'),
    },
    {
     name: 'React to the Target Market',
      description:"We start the appropriate digital marketing techniques once we have a clear picture of your target market segment.",
      avatar: require('../../assets/target.png'),
    },
    ];
    const services = [
        {
          name: 'Search Engine Optimization (SEO)',
          description:"93% of online interactions start with a search engine, therefore SEO services are essential if your business wants to boost website traffic, leads, and sales. Higher keyword ranks produced by SEO lead to more qualified website visitors, leads, and sales over the internet. We help you increase the number of high-quality, previously undiscovered visitors to your website so you can benefit from the increased revenue generation.",
          avatar: require('../../assets/seo.png'),
        },
        {
          name: 'Social Media Marketing',
          description:"Since users of social media spend an average of 3 hours each day browsing their preferred sites, social media marketing is a profitable ad strategy to improve leads and engage with your local community. Increase the number of people who like and follow your page on well-known platforms like Facebook, Instagram, LinkedIn, Twitter, and more! Your internet presence will rise thanks to our unique concepts and engaging content. It's time to leave your brand's impression on your audience's minds and hearts.",
          avatar: require('../../assets/smo.png'),
        },
        {
          name: 'Email Marketing',
          description:"Email marketing allows for daily, personalized engagement with customers, bringing you one step closer to them. With our inventive email marketing services, we represent your brand identity. Our team strongly believes in expanding your brand up the growth graph.",
          avatar: require('../../assets/email.png'),
        },
        {
         name: 'Online Reputation Management',
          description:"Your reputation matters a lot. According to studies, 75%, of consumers are more likely to trust a local business if there are positive evaluations, whereas 60% of consumers claim that negative reviews make them less likely to hire a company. IBUZZ Tech's reputation management services assist you in increasing the number of reviews for your business and in managing and responding to unfavorable ones.",
          avatar: require('../../assets/onlinereputation.png'),
        },
        ];



        const reasons=[
            {
            name: 'Knowing your needs',
            description:"Before starting any project. We analyze the requirements, document them, and then specify what must be done and how long it will take to complete them. Our focus is to support your vision, comprehend your challenges, and determine how best to assist you in achieving your goals.",
            avatar: require('../../assets/mindset.png'),
        },
            {
            name: 'Fast & Effective Solutions',
            description:"We are a group of skilled, well-trained individuals who are constantly up to the challenge. We are capable and obedient to deadlines.",
            avatar: require('../../assets/jigsaw.png'),
        },
            {
            name: 'Attention to Details',
            description:"We guide you through the entire procedure step by step in all phases since the personal touch and preference throughout the entire process are vital.",
            avatar: require('../../assets/file.png'),
        },
            {
            name: 'Teamwork Makes Dream Work',
            description:"IBUZZ gets empowered by investing in talented people in our company to develop a team and encourage everyone to contribute their share",
            avatar: require('../../assets/teamwork.png'),
        },
            {
            name: 'Our commitment',
            description:"By delivering high-caliber, cost-effective, and timely solutions, we have been committed to reaching high levels of client satisfaction",
            avatar: require('../../assets/commitment.png'),
        },
            {
            name: 'Achieve more with IBUZZ',
            description:"unlike other companies out there, we don't just develop code or design websites - we help you achieve your goals through innovative ideas and well-thought-out strategies.",
            avatar: require('../../assets/success.png'),
        },
    ]

const Digitalmarketting = () => {
  
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const classes=useStyles()
    const CardComponent=()=>{
        return(
         services.map((u, i) => { 
           return (
              <Card sx={{ maxWidth:matches?250:380,height:matches?522:350,margin:5}} className={classes.hover}>
              <CardActionArea  >
                <CardMedia
                  component="img"
                   sx={{width:80,paddingLeft:matches?11:14}}
                  image={u.avatar}
                  alt="green iguana"
                
                />
                <CardContent >
                  <div gutterBottom variant="h5" component="div" className="font-link" style={{width:'100%',textAlign:'center',color:'#2966be',fontSize:30,fontWeight:'bold'}}>
                    {u.name}
                  </div>
                  <div style={{width:'100%',fontSize:17}} className="font-link">
                   {u.description}
                  </div>
                </CardContent>
              </CardActionArea>
            </Card>
            )})
       )}
       const ReasonCardComponent=()=>{
        return(
         reasons.map((u, i) => { 
           return (
              <Card sx={{ maxWidth:380,margin:5,marginLeft:5 ,display:'flex',justifyContent:'center'}} className={classes.hover}>
              <CardActionArea  >
                <CardMedia
                  component="img"
                   sx={{width:80,marginLeft:15}}
                  image={u.avatar}
                  alt="green iguana"
                
                />
                <CardContent >
                  <div gutterBottom variant="h5" component="div" className="font-link" style={{width:'100%',textAlign:'center',color:'#2966be',fontSize:30,fontWeight:'bold'}}>
                    {u.name}
                  </div>
                  <div style={{width:'100%',fontSize:17}} className="font-link">
                   {u.description}
                  </div>
                </CardContent>
              </CardActionArea>
            </Card>
            )})
       )}
       const QualitiesCardComponent=()=>{
        return(
         qualities.map((u, i) => { 
           return (
         
            <Card sx={{ maxWidth:matches?250:380,margin:5 ,display:'flex',justifyContent:'center'}} className={classes.hover}>
            <CardActionArea  >
              <CardMedia
                component="img"
                 sx={{width:80,paddingLeft:matches?10:14}}
                image={u.avatar}
                alt="green iguana"
              
              />
              <CardContent >
                <div gutterBottom variant="h5" component="div" className="font-link" style={{width:'100%',textAlign:'center',color:'#2966be',fontSize:30,fontWeight:'bold'}}>
                  {u.name}
                </div>
                <div style={{width:'100%',fontSize:17}} className="font-link">
                 {u.description}
                </div>
              </CardContent>
            </CardActionArea>
          </Card>
       )})
       )}
  
    return (
    <Grid>
          <Grid container spacing={2}>
      <Grid item xs={12} md={12}><Navbar/></Grid>
      </Grid>

      <Grid container spacing={2} style={{marginTop:matches?10:0,display:'flex',justifyContent:'space-around'}} className="font-link">   
      <Grid item xs={12} md={5} style={{width:'40vw'}}>
      <Grid  style={{fontSize:65,color:'#2966be',marginTop:matches?15:0,marginBottom:20,display:'block'}}>
      What is <b>DIGITAL</b>
       <Grid style={{fontWeight:'bold'}}>
        MARKETING SERVICE
        </Grid> 
    </Grid>
      <Grid  style={{fontSize:20,color:'#1a1b1e',marginTop:30,marginBottom:20,display:'block'}}>
      We assist with online business promotion, lead generation, and sales growth. We deliver better ROI and faster results.
    </Grid>
    </Grid>



    <Grid item xs={12} md={5} style={{width:'40vw',display:'flex',justifyContent:'center'}}>
       <img src={require('../../assets/digitalbg.png')} style={{width:matches?'40vw':'80vw'}} className={classes.hover} />
    </Grid>
  </Grid>
   
   <Grid container spacing={2} style={{marginTop:20}} className="font-link">
   
   <Grid item xs={12} md={12} style={{color:'#ff3900',fontSize:20,fontWeight:'bold',textAlign:'center'}}>
      What We Offer________
   </Grid>
   <Grid item xs={12} md={12} style={{color:'#2966be',fontSize:55,fontWeight:'bold',textAlign:'center'}}>
   We offer the best digital marketing service
   </Grid>
    <Grid style={{color:'#1a1b1e',paddingRight:matches?110:0,paddingLeft:matches?110:30,fontSize:matches?20:24,textAlign:'center'}}>
    IBUZZ's digital marketing service helps businesses increase their online presence and reach more customers through a variety of digital channels. Our team of experts specializes in search engine optimization (SEO), pay-per-click (PPC) advertising, social media marketing, email marketing, content marketing, and more. By leveraging data and technology, we create personalized, effective marketing campaigns tailored to your business's specific goals. 
    </Grid>
    <Grid style={{color:'#1a1b1e',paddingRight:matches?110:0,paddingLeft:matches?110:30,fontSize:matches?20:24,textAlign:'center',marginTop:10,fontWeight:'bold'}}>
    With IBUZZ's digital marketing service, you can rest assured that your business will be visible to the right audience at the right time, resulting in increased engagement and sales. 
    </Grid>
   <Grid item xs={12}   style={{display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'center',alignItems:'center'}}>
<CardComponent/>
   </Grid>
   
   </Grid>


   <Grid container spacing={2} style={{marginTop:20,paddingLeft:25}} className="font-link">
   <Grid item xs={12} md={8} style={{color:'#ff3900',fontSize:20,fontWeight:'bold',}}>
      Our Ways________
   </Grid>
   <Grid item xs={12} md={8} style={{color:'#2966be',fontSize:55,fontWeight:'bold',}}>
   How we work
   </Grid>

   <Grid item xs={12} style={{display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'center'}}>
    <QualitiesCardComponent/>
   </Grid>
   </Grid>


   <Grid container spacing={2} style={{marginTop:20,paddingLeft:25}} className="font-link">
   <Grid item xs={12} md={8} style={{color:'#ff3900',fontSize:20,fontWeight:'bold',}}>
      Why Us________
   </Grid>
   <Grid item xs={12} md={8} style={{color:'#2966be',fontSize:55,fontWeight:'bold',}}>
   Why IBUZZ is Important for You
   </Grid>

   <Grid item xs={12} style={{display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'center'}}>
    <ReasonCardComponent/>
   </Grid>
   </Grid>
    

    <Grid>
        <Footer/>
    </Grid>
    
    </Grid>
  )
}

export default Digitalmarketting
