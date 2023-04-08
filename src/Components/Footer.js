import React from 'react'

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import IconButton from "@mui/material/IconButton";
import { Divider, Grid, Typography,Button } from '@mui/material';
import  LanguageOutlinedIcon  from "@mui/icons-material/LanguageOutlined";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AdUnitsIcon from '@mui/icons-material/AdUnits';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate()
  const [number,setNumber]=React.useState('')
  const [href,setHref]=React.useState('')

    return (
        <Grid style={{    backgroundImage:'linear-gradient(to right,#513eff, #52e5ff)',height:'50%',marginTop:30,paddingBottom:1}} className="font-link1">
        <Grid container spacing={2} style={{ display: 'flex',flexDirection: 'row',justifyContent:'space-around',width:'100%'}}>
            <Grid item xs={12} md={3} style={{display: 'flex',flexDirection: 'column',textAlign: 'left',width:'25%',}}>
                <p style={{ fontSize: '20px',color: '#fff',marginBottom: '20px',fontWeight: 'bold',paddingLeft:10}} >About us</p>
                <div style={{textAlign:'justify',fontSize: '16px',color: '#fff',paddingLeft:10}}>IBUZZ is a company that offers a wide range of services and products to help businesses grow and succeed. From digital marketing and website development to branding and strategic planning, our team of experts is dedicated to providing the tools and support that companies need to thrive in today's competitive marketplace. Whether you're a small start-up or a large corporation, we have the expertise and resources to help you achieve your goals and reach new heights of success.</div>
            </Grid>
            <Grid item xs={12} md={3} style={{display: 'flex',flexDirection: 'column',textAlign: 'left',width:'25%'}}>
                <p style={{ fontSize: '20px',color: '#fff',marginBottom: '20px',fontWeight: 'bold'}} >Services We Offer</p>
        <div style={{ fontSize: '20px',color: '#fff',cursor:'pointer'}} onClick={()=>{window.open("/seoservices")}} ><ArrowForwardIosIcon/>SEO </div>
        <div style={{ fontSize: '20px',color: '#fff',cursor:'pointer'}} onClick={()=>{window.open("/smoservices")}}><ArrowForwardIosIcon/>SMO </div>
        <div style={{ fontSize: '20px',color: '#fff',cursor:'pointer'}} onClick={()=>{window.open("/googleads")}}><ArrowForwardIosIcon/>Google Ads </div>
        <div style={{ fontSize: '20px',color: '#fff',cursor:'pointer'}} onClick={()=>{window.open("/branding")}} ><ArrowForwardIosIcon/>Branding</div>
        <div style={{ fontSize: '20px',color: '#fff',cursor:'pointer'}} onClick={()=>{window.open("/contentmarketing")}}><ArrowForwardIosIcon/>Content Marketing </div>
        <div style={{ fontSize: '20px',color: '#fff',cursor:'pointer'}} onClick={()=>{window.open("/webdevelopmentservices")}}><ArrowForwardIosIcon/>Website  Development</div>
        <div style={{ fontSize: '20px',color: '#fff',cursor:'pointer'}} onClick={()=>{window.open("/appdevelopment")}}><ArrowForwardIosIcon/>Application  Development</div>
        <div style={{ fontSize: '20px',color: '#fff',cursor:'pointer'}} onClick={()=>{window.open("/customsoftwaredevelopment")}}><ArrowForwardIosIcon/>Custom Software  Development</div>
        {/* <div style={{ fontSize: '20px',color: '#fff'}} ><ArrowForwardIosIcon/>Application Development </div>
                   */}
            </Grid>
            <Grid item xs={12} md={3} style={{display: 'flex',flexDirection: 'column',textAlign: 'left',width:'50%'}}>
                <Grid style={{display:'flex',height:"40%"}}>
                <span style={{}}><IconButton href='https://www.facebook.com/profile.php?id=100087551284445'  size='large' ><FacebookIcon style={{width:100,height:100,color:'white'}} /></IconButton></span>
            <span style={{}}> <IconButton href='https://twitter.com/indiabuzz247' size='large'><TwitterIcon style={{width:100,height:100,color:'white'}} /></IconButton></span>
                <span style={{}}> <IconButton href='https://www.instagram.com/ibuzz247/' size='large'><InstagramIcon style={{width:100,height:100,color:'white'}} /></IconButton></span>
             
                </Grid>
                <Grid style={{height:"50%"}}>
                <p style={{ fontSize: '20px',color: '#fff',marginBottom: '20px',fontWeight: 'bold'}}>Contact Us</p>
                <div style={{ fontSize: '20px',color: '#fff'}} ><AdUnitsIcon/>+918889430333</div>
        <a style={{ fontSize: '20px',color: '#fff',textDecoration:'none'}} href="mailto:ibuzz@indiabuzz.co.in?subject=Me&body=Hello! I Want To Take Knowledge About Your Services"><EmailIcon/>ibuzz@indiabuzz.co.in</a>
<a href='https://goo.gl/maps/VurxKFRojURe5FrG6' target="_blank" style={{textDecoration:'none'}}> <div style={{color:'#fff',fontSize:20,}}><LocationOnIcon/>Jinsi Rd Number 2, Lohiya Bazaar</div>
 <div style={{color:'#fff',fontSize:20}}>Gwalior, Madhya Pradesh 474009</div></a>  
 </Grid>
            </Grid>
          
            
         
        </Grid>
        <Divider variant='middle' />
       <Grid container spacing={2} justifyContent={'center'}>
        <Grid item xs={8} md={6} style={{display:'flex'}}>
        <a style={{margin:'10px 0px 40px 75px',textDecoration:'none',color:'#fff'}} href="https://indiabuzz.co.in/">© 2022 IBUZZ, Inc. </a>
        </Grid>
        <Grid item xs={8} md={6} style={{display:'flex',justifyContent:'center'}}> 
           
                </Grid>
      </Grid>
      </Grid>


  
  )
}

export default Footer
