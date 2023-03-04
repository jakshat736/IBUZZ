import React from 'react'
import { Grid, Typography,Button } from '@mui/material'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

const websites = [
    {
      avatar: require('../assets/template1.png'),
    },
    {
      avatar: require('../assets/template2.png'),
    },
    {
      avatar: require('../assets/template3.png'),
    },
    {
      avatar: require('../assets/template4.png'),
    },
    {
      avatar: require('../assets/template5.png'),
    },
    {
      avatar: require('../assets/template6.png'),
    },
    {
      avatar: require('../assets/template7.png'),
    },
    {
      avatar: require('../assets/template8.png'),
    },
  
    {
      avatar: require('../assets/template10.png'),
    },
    ];

const logos = [
    {
      avatar: require('../assets/logotemplate1.png'),
    },
    {
      avatar: require('../assets/logotemplate2.png'),
    },
   
    {
      avatar: require('../assets/logotemplate4.png'),
    },
    
    ];

const Portfolio = () => {
  
    const WebsiteTemplate=()=>{
        return(
         websites.map((u, i) => { 
           return (
         <Grid item xs={12} md={4}>
           <img src={u.avatar} width="80%"/>
           </Grid>
       )})
       )}
  
    const LogoTemplate=()=>{
        return(
         logos.map((u, i) => { 
           return (
         <Grid item xs={12} md={4}>
           <img src={u.avatar} width="80%"/>
           </Grid>
       )})
       )}
  
  
  
  
    return (
    <Grid>
    <Grid container spacing={2}>
    <Grid item xs={12} md={12}><Navbar/></Grid>
    </Grid>
    <Grid
            style={{
              display: "flex",
              fontSize: 29,
              color: "#2966be",
              fontWeight: "bold",
              width: "100%",
             
             
            }}
          >
            <img src={require("../assets/vertical_line.png")} width={40} />
            <Grid style={{display:'flex',justifyContent:'center',textAlign:'center',alignItems:'center',width:'100%'}}>Portfolio Grid</Grid> </Grid>
   
   
   <Grid style={{display:'flex',flexDirection:'row',margin:20}}>
    <Grid>
    <Button
                    variant="contained"
                    type="submit"
                    size="medium"
                    style={{
                     
                      color: "#fff",
                     
                    }}
                  >
                    All(14)
                  </Button>
    </Grid>
    <Grid>
    <Button
                    variant="contained"
                    type="submit"
                    size="medium"
                    style={{
                     
                      color: "#fff",
                      marginLeft:10
                      
                    }}
                  >
                    Website
                  </Button>
    </Grid>

   </Grid>
   
   <Grid style={{display:'flex',flexDirection:'row',margin:20}}>
    <Grid>
    <Button
                    variant="contained"
                    type="submit"
                    size="medium"
                    style={{
                     
                      color: "#fff",
                     
                    }}
                  >
                    Logo
                  </Button>
    </Grid>
    <Grid>
    <Button
                    variant="contained"
                    type="submit"
                    size="medium"
                    style={{
                     
                      color: "#fff",
                      marginLeft:10
                      
                    }}
                  >
                    Social Media Posts
                  </Button>
    </Grid>

   </Grid>


   <Grid container spacing={2} style={{}}>
   <WebsiteTemplate/>
   <LogoTemplate/>

   </Grid>
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
    </Grid>
  )
}

export default Portfolio
