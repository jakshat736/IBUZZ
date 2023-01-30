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


const services = [
    {
      name: 'Custom application development',
      description:"93% of online interactions start with a search engine, therefore SEO services are essential if your business wants to boost website traffic, leads, and sales. Higher keyword ranks produced by SEO lead to more qualified website visitors, leads, and sales over the internet. We help you increase the number of high-quality, previously undiscovered visitors to your website so you can benefit from the increased revenue generation.",
      avatar: require('../../assets/web-development.png'),
    },
    {
      name: 'Portal Development',
      description:"Since users of social media spend an average of 3 hours each day browsing their preferred sites, social media marketing is a profitable ad strategy to improve leads and engage with your local community. Increase the number of people who like and follow your page on well-known platforms like Facebook, Instagram, LinkedIn, Twitter, and more! Your internet presence will rise thanks to our unique concepts and engaging content. It's time to leave your brand's impression on your audience's minds and hearts.",
      avatar: require('../../assets/browser.png'),
    },
    {
      name: 'eCommerce Website development',
      description:"Email marketing allows for daily, personalized engagement with customers, bringing you one step closer to them. With our inventive email marketing services, we represent your brand identity.",
      avatar: require('../../assets/ecommerce.png'),
    },
    {
     name: 'E-Commerce development',
      description:"Your reputation matters a lot. According to studies, 75%, of consumers are more likely to trust a local business if there are positive evaluations, whereas 60% of consumers claim that negative reviews make them less likely to hire a company. IBUZZ Tech's reputation management services assist you in increasing the number of reviews for your business and in managing and responding to unfavorable ones.",
      avatar: require('../../assets/laptop.png'),
    },
    ];


const Webdevelopment = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const classes=useStyles()
  
  const CardComponent=()=>{
    return(
     services.map((u, i) => { 
       return (
          <Card sx={{ maxWidth:matches?250:380,height:matches?575:350,margin:5}} className={classes.hover}>
          <CardActionArea  >
            <CardMedia
              component="img"
               sx={{width:80,paddingLeft:matches?11:14}}
              image={u.avatar}
              alt="green iguana"
            
            />
            <CardContent >
              <div gutterBottom variant="h5" component="div" className='font-link' style={{width:'100%',textAlign:'center',color:'#2966be',fontSize:30,fontWeight:'bold'}}>
                {u.name}
              </div>
              <div className='font-link' style={{width:'100%',fontSize:17}}>
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
      <Grid item xs={12} md={5} style={{width:'40vw',marginTop:matches?60:0}}>
      <Grid  style={{fontSize:matches?72:65,color:'#2966be',marginTop:15,marginBottom:20,display:'block'}}>
      What is <b>WEB</b>
       <Grid style={{fontWeight:'bold'}}>
        Development
        </Grid> 
    </Grid>
      <Grid  style={{fontSize:20,color:'#1a1b1e',marginTop:30,marginBottom:20,display:'block'}}>
      Web development refers to the building, creating, and maintaining of websites. It includes aspects such as web design, web publishing, web programming, and database management. It is the creation of an application that works over the internet i.e. websites.
    </Grid>
    </Grid>
    <Grid item md={5} style={{width:'40vw',display:'flex',justifyContent:'center'}}>
       <img src={require('../../assets/webdevelopment.png')} style={{width:matches?'40vw':'80vw'}} className={classes.hover} />
    </Grid>
  </Grid>


  <Grid container spacing={2} style={{marginTop:20}} className="font-link">
   
   <Grid item xs={12} md={12} style={{color:'#ff3900',fontSize:20,fontWeight:'bold',textAlign:'center'}} >
      What We Offer________
   </Grid>
   <Grid item xs={12} md={12} style={{color:'#2966be',fontSize:55,fontWeight:'bold',textAlign:'center'}}>
   What is web application development
   </Grid>
    <Grid style={{color:'#1a1b1e',paddingRight:matches?110:0,paddingLeft:matches?110:25,fontSize:matches?20:24,textAlign:'center'}}>
    Web app development is the process of developing, testing, and deploying a web-based app. A web-based app does not need to be downloaded from the store. It runs on a web server and is accessed through a web browser. 
    </Grid> 
   </Grid>

   <Grid container spacing={2} style={{marginTop:20,display:'flex',justifyContent:'space-around'}} className="font-link">  
      
    <Grid item  md={5} style={{width:'40vw',display:'flex',justifyContent:'center'}}>
       <img src={require('../../assets/webdevelopmenttwo.png')} style={{width:matches?'40vw':'80vw'}} className={classes.hover}/>
    </Grid>
    
    <Grid item xs={12} md={5} style={{width:'40vw',marginTop:60}}>
    <Grid item xs={12} md={12} style={{color:'#ff3900',fontSize:20,fontWeight:'bold'}}>
      About Us________
   </Grid>
   <Grid item xs={12} md={12} style={{color:'#2966be',fontSize:55,fontWeight:'bold'}}>
   Overview of our web development service
   </Grid>
      <Grid  style={{fontSize:22,color:'#1a1b1e',marginTop:30,marginBottom:20,display:'block'}}>
      <b style={{}}>Clients choose IBUZZ for web development because of our team's expertise and experience in creating visually appealing, user-friendly and responsive websites that are tailored to their specific needs and goals.</b>
    <ul>
        <li>Our team stays up-to-date with the latest web development technologies and industry trends, ensuring that our clients receive cutting-edge solutions.</li>
        <li>We work closely with our clients to understand their business objectives and create a website that aligns with their branding and marketing goals.</li>
        <li>Our developers use clean, optimized code to ensure fast loading times and a seamless user experience.</li>
        <li>We provide ongoing maintenance and support to ensure that the website is always up-to-date and functioning smoothly.</li>
        <li>Our team will work with you to create a website that is easy to use and navigate, ensuring that your visitors can find the information they need quickly and easily.</li>
    </ul>
    </Grid>
    </Grid>
  </Grid>


  <Grid container spacing={2} style={{marginTop:20}} className="font-link">
   
   <Grid item xs={12} md={12} style={{color:'#ff3900',fontSize:20,fontWeight:'bold',textAlign:'center'}}>
      What We Offer________
   </Grid>
   <Grid item xs={12} md={12} style={{color:'#2966be',fontSize:55,fontWeight:'bold',textAlign:'center'}}>
   Web Development Services We Offer
   </Grid>
    <Grid style={{color:'#1a1b1e',paddingRight:matches?110:0,paddingLeft:matches?110:25,fontSize:matches?20:24,textAlign:'center'}}>
    We offer many different services. To give the greatest web app solution, we at IBUZZ go above and beyond to fully comprehend the goals and particular business difficulties of our clients. 
    </Grid> 
   
    <Grid item xs={12}   style={{display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'center',alignItems:'center'}}>
<CardComponent/>
   </Grid>
   
   </Grid>

   <Grid container spacing={2} style={{marginTop:20,display:matches?'flex':'none'}} className="font-link">
   
   
   <Grid item xs={12} md={12} style={{color:'#2966be',fontSize:55,fontWeight:'bold',textAlign:'center'}}>
   Our Process
   </Grid>
   
   <Grid item md={5} style={{width:'40vw',}}>
       <img src={require('../../assets/process.png')} style={{width:'90vw'}} className={classes.hover}/>
    </Grid>
   
   </Grid>

   <Grid>
        <Footer/>
    </Grid>

</Grid>
  )
}

export default Webdevelopment
