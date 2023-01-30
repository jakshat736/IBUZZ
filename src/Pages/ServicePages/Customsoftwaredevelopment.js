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
      name: 'Bespoken software development',
      description:"High-quality custom software development services supported by knowledgeable resources and technological prowess boost the overall business strategy. Our prototyping approach and robust custom applications from scratch across mobile, web, and cloud platforms ensure seamless integration, flexibility, and business profitability.",
      avatar: require('../../assets/bespoke.png'),
    },
    {
      name: 'Application migration',
      description:"By restructuring, reworking, or migrating facilities to a completely tailored functionally rich application, you can modernize an existing software system and improve performance. Our software experts guarantee error-free software re-engineering with advanced augmentation of new features, improved UI/UX, and contemporary security based on cutting-edge technology.",
      avatar: require('../../assets/migration.png'),
    },
    {
      name: 'Software application maintenance',
      description:"Utilize your software application's full potential by optimizing its performance and doing routine software maintenance. With the help of our custom software development services, you can easily manage all of the post-development tasks, including software upgrades regularly and the swift fix of any problems.",
      avatar: require('../../assets/maintenance.png'),
    },
    {
     name: 'Maintenance and support',
      description:"Enhance application performance by implementing transformative changes as part of software maintenance and upkeep catered to particular bespoke requirements. We facilitate clients with custom software support at different levels from infrastructural changes, operation system integration changes, web services support, or cloud support for seamless business continuity.",
      avatar: require('../../assets/support.png'),
    },
    ];

    const reasons=[
        {
        name: 'Progressive Roadmap',
        description:"We thoroughly examine the client's business and portfolio before recommending a comprehensive digital transformation plan that takes a variety of factors into account.",
        avatar: require('../../assets/prog.png'),
    },
        {
        name: 'Efficient software project management',
        description:"Our holistic project management approach offers timely responses to proposals, on-time schedules, meeting project deadlines, and fulfilling end-user expectations.",
        avatar: require('../../assets/Eff.png'),
    },
        {
        name: 'Flexible engagement model',
        description:"With a unique amalgamation of skilled developers and cutting technologies, we enable transparency and scalability at all engagement levels",
        avatar: require('../../assets/flex.png'),
    },
        {
        name: 'Consistent delivery',
        description:"Depending on the needs of the project, we employ a variety of software development methodologies, including scrum, scrum ban, and scaled agile framework.",
        avatar: require('../../assets/consistency.png'),
    },
      
]

const Customsoftwaredevelopment = () => {

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const classes=useStyles()
    const CardComponent=()=>{
      return(
        services.map((u, i) => { 
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
               <div gutterBottom variant="h5" className='font-link' component="div" style={{width:'100%',textAlign:'center',color:'#2966be',fontSize:30,fontWeight:'bold'}}>
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
          
             <Card sx={{ maxWidth:matches?250:380,margin:5 ,display:'flex',justifyContent:'center'}} className={classes.hover}>
             <CardActionArea  >
               <CardMedia
                 component="img"
                  sx={{width:80,paddingLeft:matches?10:14}}
                 image={u.avatar}
                 alt="green iguana"
               
               />
               <CardContent >
                 <div gutterBottom variant="h5" className='font-link' component="div" style={{width:'100%',textAlign:'center',color:'#2966be',fontSize:30,fontWeight:'bold'}}>
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
      <Grid  style={{fontSize:matches?72:51,color:'#2966be',marginTop:matches?15:0,display:'block'}}>
      <b>Custom Software</b>
    </Grid>
      <Grid  style={{fontSize:matches?72:55,color:'#2966be',marginBottom:20,display:'block'}}>
      Development Services
    </Grid>
      <Grid  style={{fontSize:20,color:'#1a1b1e',marginTop:30,marginBottom:20,display:'block'}}>
      IBUZZ can help you gain a competitive edge for your specific and complicated company needs. Utilize our abilities to create scalable, nimble, and agile custom software solutions and applications to hasten the business's journey toward digital transformation.
    </Grid>
    </Grid>
    <Grid item md={5} style={{width:'40vw',display:'flex',justifyContent:'center'}}>
       <img src={require('../../assets/customsoftwaredevelopmentbg.png')} style={{width:matches?'40vw':'80vw'}} className={classes.hover} />
    </Grid>
  </Grid>


  <Grid container spacing={2} style={{marginTop:20}} className="font-link">
   
   <Grid item xs={12} md={12} style={{color:'#ff3900',fontSize:20,fontWeight:'bold',textAlign:'center'}}>
      What We Offer________
   </Grid>
   <Grid item xs={12} md={12} style={{color:'#2966be',fontSize:matches?55:45,fontWeight:'bold',textAlign:'center'}}>
   We offer the best software development service
   </Grid>
    <Grid style={{color:'#1a1b1e',paddingRight:matches?110:0,paddingLeft:matches?110:25,fontSize:matches?20:24,textAlign:'center'}}>
    Designing, creating, deploying, and managing custom software solutions and services are all included in the custom software development process. As a premier provider of custom software, we explain the client's viewpoints to our subject specialists, who then build a strategic plan to improve each step of the software development life cycle. Our talented team of architects, software developers, and project managers, along with our industry-focused experience, creates a strong foundation for creating custom software solutions with consistently high-quality outcomes, a committed QA practice, and a commitment to meeting deadlines and spending limits.
    </Grid> 
    <Grid item xs={12}   style={{display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'center',alignItems:'center'}}>
<CardComponent/>
   </Grid>
   </Grid>

  

   
   <Grid container spacing={2} style={{marginTop:20,paddingLeft:25}}>
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

export default Customsoftwaredevelopment
