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
      name: 'Android UI/UX design',
      description:"Great UI and UX matter the most for making an app successful. Appoint us to provide an Android programmer with the necessary design talents and expertise to provide top-notch UI designs and a better user experience for your app.",
      avatar: require('../../assets/androidlogo.png'),
    },
    {
      name: 'Custom Android App Development',
      description:"To provide feature-rich and high-performance apps for your company, a skilled team of Android app developers is available. With the platform and the newest app development technologies, our staff is highly skilled and experienced.",
      avatar: require('../../assets/customandroid.png'),
    },
    {
      name: 'Testing and maintenance',
      description:"We are right here to take care of your product post-release worries by helping you with bug fixing, performance tuning, system monitoring, and performing on-demand updates.",
      avatar: require('../../assets/testing.png'),
    },
    {
     name: 'Android App Security',
      description:"We offer you end-to-end app security support as a defense against data loss or hacker attempts. Enable the required security measures to preserve the application's hassle-free performance.",
      avatar: require('../../assets/security.png'),
    },
    ];

    const reasons=[
        {
        name: 'Design and prototyping of apps',
        description:"Our mobile app development services have always placed a priority on creating visually stunning apps that are both engaging and user-friendly. Our mobile app design team strives to develop highly engaging, intuitive, and standardized user interfaces for various mobile platforms.",
        avatar: require('../../assets/8.png'),
    },
        {
        name: 'Native app development',
        description:"Our team of skilled Android app developers will work with you to create custom, secure, and engaging mobile apps that will help you achieve your aims and goals. IBUZZ is the ideal location if you're looking for a mobile application development firm.",
        avatar: require('../../assets/9.png'),
    },
        {
        name: 'Cross-platform app development',
        description:"We have succeeded in developing robust and cutting-edge cross-platform hybrid apps for small, medium, and large businesses thanks to our hands-on experience with react native, Flutter, and Xamarin technologies. Create unique mobile apps that are quick to launch, affordable, and can reach a larger audience.",
        avatar: require('../../assets/10.png'),
    },
      
]
const process=[
    {
    name: 'Discovery',
    description:"Whether you are consulting us for the very first time or thinking of revving your fledgling app, we will spend an adequate amount of time assessing your project. We provide recommendations only after brainstorming different ideas and reviewing your business processes, and architectural and infrastructural concerns.",
    avatar: require('../../assets/1.png'),
},
    {
    name: 'UI/UX Design',
    description:"Whether you are planning to develop an interface for a brand new mobile app or thinking of upgrading an existing one, our android application developer’s team provides you with a design that targets your key performance indicators and hits the right spots in terms of usability and appeal.",
    avatar: require('../../assets/2.png'),
},
    {
    name: 'Development',
    description:"After thriving for so long in an agile development setting, we have gained a deep understanding and the importance of providing timely updates and deliverables to the client. We strongly believe in continuous delivery, update, and development of code.",
    avatar: require('../../assets/3.png'),
},
    {
    name: 'API integration',
    description:"Depending on the client's requirement, we integrate their app with 3rd party and custom API applications like Instagram and YouTube, a payment gateway for carrying out secure transactions as well as numerous other applications and data sources.",
    avatar: require('../../assets/4.png'),
},
    {
    name: 'Testing',
    description:"Quality assurance is a critical step only during the development lifecycle of the app but also post-development. We make sure that all types of necessary functional and nonfunctional testing are performed in the given lifecycle of app development.",
    avatar: require('../../assets/5.png'),
},
    {
    name: 'Deployment',
    description:"Lastly, it’s now time to deploy your app on the google play store and other similar platforms. We also assist in the app configuration process by taking care of various factors.",
    avatar: require('../../assets/6.png'),
},
    {
    name: 'Maintenance',
    description:"The job is not over once the app is deployed initially since maintenance, support, and optimization are required regularly as we move along. one also needs to evolve the feedback they receive and keep deploying updated versions of the app.",
    avatar: require('../../assets/7.png'),
},
]
const Appdevelopment = () => {
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
              <div gutterBottom variant="h5" component="div" style={{width:'100%',textAlign:'center',color:'#2966be',fontSize:30,fontWeight:'bold'}}>
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
                  <div gutterBottom variant="h5" component="div" style={{width:'100%',textAlign:'center',color:'#2966be',fontSize:30,fontWeight:'bold'}}>
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
       const ProcessCardComponent=()=>{
        return(
          process.map((u, i) => { 
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
                 <div gutterBottom variant="h5" component="div" style={{width:'100%',textAlign:'center',color:'#2966be',fontSize:30,fontWeight:'bold'}}>
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
      <Grid  style={{fontSize:matches?72:60,color:'#2966be',marginTop:matches?15:0,marginBottom:20,display:'block'}}>
      <b>Android App </b>Development Services
    </Grid>
      <Grid  style={{fontSize:20,color:'#1a1b1e',marginTop:30,marginBottom:20,display:'block'}}>
      Developing high-performing, feature-packed custom android applications is what we are experts at. We build business-critical android applications for our clients that amplify user engagement and work for every device.
    </Grid>
    </Grid>
    <Grid item md={5} style={{width:'40vw',display:'flex',justifyContent:'center'}}>
       <img src={require('../../assets/appdevelopmentbg.png')} style={{width:matches?'40vw':'80vw'}} className={classes.hover}/>
    </Grid>
  </Grid>


  <Grid container spacing={2} style={{marginTop:20}} className="font-link">
   
   <Grid item xs={12} md={12} style={{color:'#ff3900',fontSize:20,fontWeight:'bold',textAlign:'center'}}>
      What We Offer________
   </Grid>
   <Grid item xs={12} md={12} style={{color:'#2966be',fontSize:55,fontWeight:'bold',textAlign:'center'}}>
   We offer the best android app development service
   </Grid>
    <Grid style={{color:'#1a1b1e',paddingRight:matches?110:0,paddingLeft:matches?110:25,fontSize:matches?20:24,textAlign:'center'}}>
    Our Android app development services assist your business in reaching a large portion of the target market. Join us and take part in the expanding app business, which Android has greatly influenced. Android is thought to be the most potent and widely used app platform, offering your company a competitive edge.
    </Grid> 
    <Grid style={{color:'#1a1b1e',marginTop:10,paddingRight:matches?110:0,paddingLeft:matches?110:25,fontSize:matches?20:24,textAlign:'center'}}>
    Our digital team at IBUZZ makes sure to boost customer loyalty, increase business accessibility, and redefine the whole retail experience. We guarantee an improved cloud mobility solution, app conceptualizing, and app prototyping with our comprehensive suite of mobile development services.
    </Grid> 
    <Grid item xs={12}   style={{display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'center',alignItems:'center'}}>
<CardComponent/>
   </Grid>
   </Grid>

   
   <Grid container spacing={2} style={{marginTop:20,paddingLeft:25}} className="font-link">
   <Grid item xs={12} md={12} style={{color:'#2966be',fontSize:55,fontWeight:'bold',textAlign:'center'}}>
   Our App Development Process
   </Grid>

   <Grid item xs={12} style={{display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'center'}} >
    <ProcessCardComponent/>
   </Grid>
   </Grid>

   
   <Grid container spacing={2} style={{marginTop:20,paddingLeft:25}} className="font-link">
   <Grid item xs={12} md={12} style={{color:'#2966be',fontSize:55,fontWeight:'bold',textAlign:'center'}}>
   Why Choose IBUZZ
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

export default Appdevelopment
