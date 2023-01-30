import React,{useState} from 'react'
import { Grid } from '@mui/material'
import Navbar from '../Components/Navbar'

import {TextField} from '@mui/material'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import {Button} from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import Footer from '../Components/Footer'
import { useStyles } from './PackagePages/HoverCss';


const Contactus = () => {
    const [service, setService] = React.useState('');
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [number,setNumber]=useState('')
  const [description,setDescription]=useState('')
  const form = useRef();
  const classes=useStyles()
  
  const handleChange = (event) => {
    setService(event.target.value);
  };


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_unv208h', 'template_kr0cfbf',form.current,'5jpqFVv9N8rs8tCYs')
      .then((result) => {
          console.log(result.p);
      }, (error) => {
          console.log(error.p);
      });
  };
  
  
  
    return (
    <Grid >

         <Grid container spacing={2}>
      <Grid item xs={12} md={12}><Navbar/></Grid>
      </Grid>

      <Grid container spacing={2}>  
    <Grid item xs={2} md={12}>
       <img src={require('../assets/contactus.png')} style={{width:'98.92vw'}}/>
    </Grid>
  </Grid>
     

  <Grid container spacing={2}  style={{display:'flex',flexDirection:'row',justifyContent:'center',width:'100%',marginTop:25}} className="font-link">
      
      
      <Grid item xs={12} md={6} style={{display:'flex',flexDirection:'column',justifyContent:'flex-end',paddingLeft:20}} >
      <Grid style={{color:'#ff3900',fontSize:20,}}>
            We Make Connections
      </Grid>
      <Grid style={{color:'#2966be',fontSize:45,}}>
      Tell us about your project
      </Grid>
    
   <form ref={form} onSubmit={sendEmail}>
    <Grid style={{display:'flex',flexDirection:"column",}}>
    
    <Grid style={{display:'flex',flexDirection:"row",width:'100%',marginTop:30}}>
    
    <Grid style={{width:'50%'}}>
      <div>Name</div>
      <TextField id="outlined-basic" label="Name" variant='standard' value={name} name='client_name' fullWidth onChange={(e)=>setName(e.target.value)} />
    </Grid>
    <Grid style={{marginLeft:10,width:'50%'}}>
      <div>Email</div>
      <TextField id="outlined-basic" label="Email Address" value={email} variant='standard' name='client_email' fullWidth onChange={(e)=>setEmail(e.target.value)} />
    </Grid>
    
    </Grid>

    <Grid style={{display:'flex',flexDirection:"row",marginTop:30}}>
    
    <Grid style={{width:'50%'}}>
      <div>Phone</div>
      <TextField id="outlined-basic" label="Phone Number" value={number} variant='standard' name='client_number' fullWidth onChange={(e)=>setNumber(e.target.value)}/>
    </Grid>
    <Grid style={{marginLeft:10,width:'50%'}}>
      <div>What Service Do You Want</div>
      <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          name='client_service'
          value={service}
          onChange={handleChange}
          label="Services"
          fullWidth
        >
          <MenuItem value={'MVP Development'}>MVP Development</MenuItem>
          <MenuItem value={'Static Website Development'}>Static Website Development</MenuItem>
          <MenuItem value={'Dynamic Website Development'}>Dynamic Website Development</MenuItem>
          <MenuItem value={'Website Design'}>Website Design</MenuItem>
          <MenuItem value={'Digital Marketing'}>Digital Marketing</MenuItem>
          <MenuItem value={'App Development'}>App Development</MenuItem>
        </Select>
    </Grid>

    
    </Grid>

    
    <Grid style={{display:'flex',flexDirection:"row",marginTop:30}}>
    
    <Grid style={{width:'100%'}} >
      <div>Description</div>
      <TextField id="outlined-basic" label="Enter The Project Description" value={description} name="project_description" variant='standard' fullWidth onChange={(e)=>setDescription(e.target.value)}/>
    </Grid>
    </Grid>
    
    <Grid style={{display:'flex',flexDirection:"row",marginTop:30}}>
    
    <Grid style={{width:'100%',display:"flex",justifyContent:'center'}} >
     <Button  variant='contained' type='submit'size='large' style={{background:"linear-gradient(to right,#ff2500,#ff7100)",boxShadow:"0 0 0 6px rgb(255,113,0,0.25)"}}>Submit</Button>
    </Grid>
    </Grid>

           </Grid>
           </form>

        </Grid>
       
       
        <Grid item xs={12} md={4} style={{display:'flex',flexDirection:'column',justifyContent:'flex-start'}} >

      <Grid style={{color:'#ff3900',fontSize:20,}}>
            GET IN TOUCH
      </Grid>

      <Grid style={{color:'#2966be',fontSize:45,}}>
      For work inquiry
      </Grid>
    
   
    <Grid style={{width:'100%',display:"flex",flexWrap:'wrap',justifyContent:'center'}}>
    
    <Grid style={{}}>
    
    <Grid>
    
    <Grid style={{display:'flex',flexDirection:'row',marginTop:20}}> 
    <LocationOnIcon fontSize={'large'} sx={{color:'#ff3900'}}/>
      
      <Grid style={{display:'flex',flexDirection:'column'}}>
           <div style={{fontSize:25,color:"#000"}}>Find US</div>
 <div style={{color:'#000',fontSize:20}}>Jinsi Rd Number 2, Lohiya Bazaar</div>
 <div style={{color:'#000',fontSize:20}}>Gwalior, Madhya Pradesh 474009</div>
 </Grid>

    </Grid>

    <Grid style={{display:'flex',flexDirection:'row',marginTop:20}}> 
    <CallIcon fontSize={'large'} sx={{color:'#ff3900'}}/>
      
      <Grid style={{display:'flex',flexDirection:'column'}}>
           <div style={{fontSize:25,color:"#000"}}>Call US</div>
 <div style={{color:'#000',fontSize:20}}>+918889430333</div>

 </Grid>

    </Grid>

    <Grid style={{display:'flex',flexDirection:'row',marginTop:20}}> 
    <EmailIcon fontSize={'large'} sx={{color:'#ff3900'}}/>
      
      <Grid style={{display:'flex',flexDirection:'column'}}>
           <div style={{fontSize:25,color:"#000"}}>Mail US</div>
 <div style={{color:'#000',fontSize:20}}>ibuzz@indiabuzz.co.in</div>
 </Grid>

    </Grid>

  </Grid>

    </Grid>

        </Grid>

        </Grid>

        </Grid>



     <Grid >
    <Grid ><Footer/></Grid>
</Grid>

    </Grid>
  )
}

export default Contactus
