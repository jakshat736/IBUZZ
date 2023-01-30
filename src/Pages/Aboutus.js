import React from 'react'
import { Grid, Typography } from '@mui/material'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { useStyles } from './PackagePages/HoverCss';
const Aboutus = () => {
  const classes=useStyles()
  return (
     <Grid>
      <Grid container spacing={2}>
      <Grid item xs={12} md={12}><Navbar/></Grid>
      </Grid>
 
    <Grid container spacing={2}>  
    <Grid item xs={2} md={12}>
       <img src={require('../assets/aboutus.png')} style={{width:'98.92vw'}}/>
    </Grid>
  </Grid>
  <Grid container spacing={2} justifyContent={"space-around"} className="font-link">
  <Grid item xs={12} md={3}>
       <img src={require('../assets/about.png')} style={{width:280}} className={classes.hover}/>
           </Grid>
    <Grid item xs={12} md={7} >
        <div style={{color:'#2966be',fontSize:45}}>Our Story</div>
        <div>Ibuzz Digital Marketing Services is a full-service digital marketing agency based in Gwalior, India. We specialize in providing a wide range of digital marketing services to help businesses achieve their goals. Our services include website development, software development, digital marketing, branding, and content creation.</div>
<div>Our team of experts are dedicated to delivering the highest quality services to our clients and are constantly innovating to stay ahead in the industry. We have a team of experienced professionals who are skilled in their respective fields and have a passion for providing solutions that helps businesses succeed.</div>
<div>At Ibuzz Digital Marketing Services, we understand the importance of staying current with the latest technologies and trends in the digital marketing industry. That's why we invest in the training and development of our team members to ensure that we are always at the forefront of the industry.</div>
    <div>We believe that the key to success is building long-term relationships with our clients. That's why we are committed to providing exceptional customer service, and we always go the extra mile to ensure that our clients are completely satisfied with the work we do.</div>
    </Grid>
   </Grid>
 
<Grid >
    <Grid ><Footer/></Grid>
</Grid>
 
  </Grid>
  )
}

export default Aboutus
