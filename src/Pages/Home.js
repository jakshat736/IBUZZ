import { Button, Grid, TextField } from '@mui/material'
import React,{useState} from 'react'
import Navbar from '../Components/Navbar'
import firstimg from '../assets/first.png'
import firstimg1 from '../assets/akkk.jpg'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import Footer from '../Components/Footer';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useStyles } from './PackagePages/HoverCss';
import { HoverableCard } from 'react-hoverable-card'
import 'react-hoverable-card/dist/index.css'

const services = [
   {
     name: 'Website Design',
     description:"Get the future ready, aesthetically pleasing websites that are as unique as you are. Impress your customers or that next client with the beautifully designed website that is built to impress.",
     avatar: require('../assets/webdesign.png'),
   },
   {
     name: 'Website Development',
     description:"We develop a website that conforms to the needs of your business. With in -depth and diligent development,we materialise the ideas that you have in your mind, to create technological solutions that are a classapart from the rest.",
     avatar: require('../assets/webdev.png'),
   },
   {
     name: 'eCommerce Solution',
     description:"Whether you are in for selling the services, or product, or both. We've got you covered with the complete ground-up development of the website e-Commerce solutions. Get your online business ready for your customers on a whim with our full-fledged eCommerce solutions.",
     avatar: require('../assets/ecommerce.png'),
   },
   {
    name: 'Digital Marketing',
     description:"Find your customers where they spend most of their time, on the internet, with IBUZZ Digital  Marketing. Ads campaigns that are result oriented, and the search engine optimisation (SEO) that sets your  business apart from the rest. We've got you covered in all the departments of digital marketing",
     avatar: require('../assets/digital.png'),
   },
   {
     name: 'Mobile Application',
     description:"Get your business in the palm of the hand of the customers with the IBUZZ Tech Mobile Application Development. The best in class Android, IOS, Windows, cross platform or responsive application that are as per your needs.",
     avatar: require('../assets/app.png'),
   },
   {
    name: 'Multimedia Solutions',
     description:"A picture is worth more than a thousand words, and a well designed visual asset wins customers like nothing else would. Get designs that showcase your store and connect with the audience that you seek to please.",
     avatar: require('../assets/multimedia.png'),
   },
   ];

   const Projects = [
    {
      name: 'Travel Booking App',
       avatar: require('../assets/image1.jpg'),
    },
    {
      name: 'Bus Booking App',
      avatar: require('../assets/image2.jpg'),
    },
    {
      name: 'SAAS',
      avatar: require('../assets/image3.jpg'),
    },
    {
      name: 'Hotel Booking App',
      avatar: require('../assets/image4.jpg'),
    },
    {
      name: 'Flight Booking App',
      avatar: require('../assets/image5.jpg'),
    },
  
    ];

    const qualities = [
      {
        name: 'Unmatched aesthetics',
        description:"Designs that are aesthetically amazing, neatly executed, and as per the needs of your business and personality. We show the best version of you.",
        avatar: require('../assets/responsive.png'),
      },
      {
        name: 'Awesome in all sizes',
        description:"IBUZZ Gives Responsive websites and applications that run smoothly in all screen sizes and aspect ratios, so that your business looks awesome in all screen sizes.",
        avatar: require('../assets/idea.png'),
      },
      {
        name: 'Commitments matter to us',
        description:"IBUZZ We understand the value of your time, and we take our commitments very seriously. From the promise we made to the time we promised, we don't get back on our words.",
        avatar: require('../assets/handshake.png'),
      },
      {
       name: 'We are here for you',
        description:"We are here to answer all your questions. Anytime . With full tech and after-sales support, we are here to help you, whenever you need us.",
        avatar: require('../assets/techsupport.png'),
      },
      ];
    

      const Faq=[{question:"What does IBUZZ actually do?",
                  answer:"IBUZZ is the industry leading software development and digital marketing company that works with your business to provide software and digital marketing related solutions that can help your business to achieve its goals and objectives."},
                  
                  {question:"Do my business really need web design and development ?",
                  answer:"Your website is the first thing that your prospective clients or customers see. With a well-put-together and aesthetically pleasing website, you increase your chances of winning over that crucial client and selling that product. It also benefits your customers user experience,which in turn encourages them to work with you."},
                  
                  {question:"Why is IBUZZ the best Software Development and Digital Marketing firm ?",
                  answer:"With best-in-class service and experienced staff, IBUZZ is equipped to handle every type of project with expert execution, which means you always get the best business solutions that are bespoke to your business needs."},
                  
                  {question:"How Can a Beginner Start Web Development ?",
                  answer:"With best-in-class service and experienced staff,IBUZZ is equipped to handle every type of project with expert execution, which means you always get the best business solutions that are bespoke to your business needs."},
                
                ]
                
                
const Home = () => {
  const [service, setService] = React.useState('');
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [number,setNumber]=useState('')
  const [description,setDescription]=useState('')
  const form = useRef();
  const  classes=useStyles()

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  const handleChange = (event) => {
    setService(event.target.value);
  };


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_unv208h', 'template_kr0cfbf',form.current,'5jpqFVv9N8rs8tCYs')
      .then((result) => {
          console.log(result.Typography);
      }, (error) => {
          console.log(error.Typography);
      });
  };
   const CardComponent=()=>{
      return(
       services.map((u, i) => { 
         return (
            <Card sx={{ maxWidth: 345,margin:5, }} className={classes.hover} >
            <CardActionArea  >
              <CardMedia
                component="img"
                 sx={{width:80,marginLeft:15}}
                image={u.avatar}
                alt="green iguana"
              />
              <CardContent  >
                <div gutterBottom variant="h5" component="div" style={{width:'100%',display:'flex',justifyContent:'center',color:'#2966be',fontSize:30,fontWeight:'bold'}}>
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

    
     const QualitiesCardComponent=()=>{
      return(
       qualities.map((u, i) => { 
         return (
       
          <Card sx={{ maxWidth:matches?200:380,margin:5,display:'flex',justifyContent:'center'}} className={classes.hover} >
              <CardActionArea  >
                <CardMedia
                  component="img"
                   sx={{width:80,paddingLeft:matches?7:15,alignItems:'center',display:'flex',justifyContent:'center'}}
                  image={u.avatar}
                  alt="green iguana"
                
                />
                <CardContent >
                  <div className='font-link' gutterBottom variant="h5" component="div" style={{width:'100%',textAlign:'center',color:'#2966be',fontSize:25,fontWeight:'bold'}}>
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

     const FaqComponent =()=>{
      return(
        Faq.map((item)=>{
          return(
          <Accordion className="font-link">
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

     const ProjectComponents =()=>{
return( Projects.map((item)=>{
  return(
    <Grid style={{width:matches?'20%':'80%'}}>
    <HoverableCard
    cardTitle={item.name}
    // cardDescription="Phasellus tincidunt vestibulum elit vel laoreet. Vivamus tincidunt augue eget lacus blandit tempor."
    cardImage={item.avatar}
    hoverBgColor="grey"
  /></Grid>
  )})
 
)
     }
   
     

  return (
   <Grid >

    {/* Header */}
    <Grid container spacing={2}>
      <Grid item xs={12} md={12}><Navbar/></Grid>
      </Grid>

{/* 1st Section */}
   
   <Grid container spacing={2} style={{marginTop:0,display:'flex',justifyContent:'space-around',backgroundImage:`url(${firstimg1})`,backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>  
      {/* <Grid item xs={12} md={5} style={{width:'40vw',marginTop:matches?60:0}}>
      <Grid  style={{fontSize:72,color:'#ffff00',marginTop:matches?15:0,marginBottom:20,display:'block'}} className="font-link">
       Responsive
       <Grid style={{fontWeight:'bold',fontSize:matches?72:55}} >
        Website Design
        </Grid> 
    </Grid>
    <Grid style={{color:'#1a1b1e',fontSize:20}} className="font-link">
    Building dream website with great expertise and extreme extensive experience for the best mobile and desktop experience
    </Grid>
    
    </Grid> */}
    <Grid style={{background:'rgb(128,128,128,0.6)',height:'100vh',width:'100vw',position:'relative'}}>
    <Grid  style={{marginTop:matches?60:0,}}>
      <Grid  style={{fontSize:72,color:'#000',marginTop:matches?15:0,marginBottom:20,textAlign:'center'}} className="font-link">
       Responsive
       <Grid style={{fontWeight:'bold',color:'#FECA04',fontSize:matches?72:55}} >
        Website Design
        </Grid> 
    </Grid>
    <Grid style={{color:'#1a1b1e',fontSize:20,textAlign:'center'}} className="font-link">
    Building dream website with great expertise and extreme extensive experience for the best mobile and desktop experience
    </Grid>
    
    </Grid>
    </Grid>
    
   
{/*    
    <Grid item md={5} style={{width:'40vw',height:460,display:'flex',justifyContent:'center'}}>
       <img src={firstimg1} style={{width:matches?'40vw':'80vw',opacity:0.5,background:'rgb(128,128,128,0.9)'}}  />
       <Grid  style={{fontSize:72,color:'#ffff00',marginTop:matches?15:0,marginBottom:20,display:'flex',flexDirection:'column',justifyContent:'center',alignItems:"center",position:'absolute',top:200}} className="font-link">
       Responsive
       <Grid style={{fontWeight:'bold',fontSize:matches?72:55,color:'#000'}} >
        Website Design
        </Grid>
    </Grid>
      </Grid>  */}

  </Grid>


{/* 2nd Section */}



<Grid container spacing={2} style={{marginTop:20,width:"100%",display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}} className="font-link">
   
   <Grid item xs={12} md={12} style={{color:'#000',fontSize:20,fontWeight:'bold',textAlign:'center'}}>
      What We Offer________
   </Grid>
   <Grid item xs={12} md={12} style={{color:'#2966be',fontSize:matches?55:30,fontWeight:'bold',textAlign:'center'}}>
   Complete Software Development and Digital 
   </Grid>
   <Grid item xs={12} md={12} style={{color:'#2966be',fontSize:matches?55:30,fontWeight:'bold',textAlign:'center'}}>
   Marketing Solution
   </Grid>
    <Grid item xs={12} md={12} style={{color:'#1a1b1e',paddingRight:matches?110:0,paddingLeft:matches?110:30,fontSize:matches?20:24,textAlign:'center'}}>
    We offer a complete software and Digital Marketing solution bespoke to the needs of your business. From ideation to creation and implementation of solutions 
   that are tailored to meet your requirements, With services such as the ecommerce website designing services. Complete Mobile Application development, digital marketing solutions, as well as web design and development. We are your one-stop shop for all your IT and digital marketing needs.
    </Grid> 

    <Grid item xs={12} md={12} style={{color:'#1a1b1e',paddingRight:matches?110:0,paddingLeft:matches?110:30,fontSize:matches?20:24,marginTop:0,textAlign:'center'}}>
   Our team is studded with well-experienced and passionate web designers, mobile application developers, web
   developers, graphic designers, content writers, as 
   </Grid>
   <Grid style={{color:'#1a1b1e',paddingRight:matches?110:0,paddingLeft:matches?110:30,fontSize:matches?20:24,textAlign:'center'}}>
   well as well-experienced digital marketers, that are committed to offering best-in-class service that is result-oriented.
   </Grid>
   <Grid style={{display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'center'}}>
   <CardComponent/>
</Grid>
   </Grid>


{/* Section 3 */}

<Grid  style={{display:'flex',justifyContent:'center'}} className="font-link">
  <Grid container spacing={2} style={{width:"70%",background:"linear-gradient(to right,#ff2500,#ff7100)",borderRadius:5,display:'flex',flexDirection:'row'}}>
  <Grid item xs={12} md={6} style={{display:'flex',flexDirection:'column',justifyContent:'center',width:'70%',paddingLeft:40}}>
    <Grid style={{color:'#fff',fontSize:40}}>
    Let's Discuss Your Project
    </Grid>
    <Grid style={{color:'#fff',fontSize:20}}>
    Get free consultation and let us know your project idea to trun it into an amazing digital product.
    </Grid>
    <Grid style={{padding:20}}>
      <Button variant='contained' style={{borderRadius:20}} href='https://wa.link/clvo86'>Get Consultation</Button>

    </Grid>
  </Grid>
  
  <Grid item xs={12} md={6} style={{display:'flex',justifyContent:'center',alignItems:'flex-end'}}>
    <img src={require("../assets/seoranking.png")} style={{width:279,height:226}}/>
  </Grid>

  </Grid>
</Grid>


{/* Section 4 */}

<Grid container spacing={2} className="font-link" style={{display:'flex',justifyContent:'center',flexDirection:'row',marginTop:80,paddingRight:matches?60:0,paddingLeft:matches?90:0,alignItems:'center'}} >
  <Grid item xs={12} md={5} style={{display:'flex'}}>
    <img src={require("../assets/growyourbusiness.png")} style={{width:"100%"}} className={classes.hover}/>
  </Grid>
  <Grid item xs={12} md={6} style={{display:'flex',flexDirection:'column',margin:7}}>
  <Grid style={{color:'#000',fontSize:20,fontWeight:'bold'}}>
      About Us________
   </Grid>
    <Grid style={{fontSize:50,color:'#2966be',fontWeight:'bold'}}>
    Grow Your Business With
    </Grid>
    <Grid style={{fontSize:50,color:'#2966be',fontWeight:'bold'}}>
    Our Agency
    </Grid>
    <Grid style={{color:'#1a1b1e',paddingRight:matches?110:0,paddingLeft:matches?110:0,fontSize:matches?28:24,marginTop:20}}>
      We are your one-stop-shop for all your Software Development and Digital Marketing needs. We at IBUZZ specialize in designing, developing, and deploying best-in-class websites and mobile software solutions that are bespoke to your needs.
    </Grid>
    <Grid style={{color:'#1a1b1e',paddingRight:matches?110:0,paddingLeft:matches?110:0,fontSize:20,marginTop:20}}>
      We provide the express solution for all your ecommerce needs with limitless integrations and customizability, so that you can cater to all kinds of customers with all kinds of products. With our express mobile development solutions, you can get your business on the mobile phones of millions of users, allowing your business to grow exponentially. With complete software and digital marketing solutions, we conform to your needs and materialise a solution that is ahead of the curve.
          </Grid>

  </Grid>
  </Grid>


  {/* Section 5 */}
   
   <Grid style={{display:'flex',flexDirection:'column',marginTop:80}} className="font-link">
    
    <Grid style={{}}>
      <Grid style={{color:'#000',fontSize:40,TypographyAlign:'center'}}>
      Our Projects
      </Grid>
      <Grid style={{color:'#2966be',fontSize:35,TypographyAlign:'center'}}>
       Some of Our Featured Works
      </Grid>
    </Grid>
   
    <Grid style={{display:'flex',flexDirection:matches?"row":'column',justifyContent:'center',alignItems:'center'}}>
   <ProjectComponents/>
           
    </Grid>
   </Grid>


{/* Section 6 */}

<Grid container spacing={2} style={{marginTop:20,paddingLeft:25}} className="font-link">
    
      <Grid item xs={12} md={8} style={{color:'#000',fontSize:20}} >
      Our Qualities
      </Grid>
      <Grid item xs={12} md={8}  style={{color:'#2966be',fontSize:45}}>
      Why Choose IBUZZ ?
      </Grid>

   
    <Grid item xs={12}  style={{display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'center'}}>
    <QualitiesCardComponent/>
        </Grid>
   </Grid>


{/* Section 7 */}

<Grid style={{display:'flex',flexDirection:'column',marginTop:80,marginLeft:20}} className="font-link">
    
    <Grid style={{}}>
      <Grid style={{color:'#000',fontSize:20,textAlign:'center'}}>
            FAQ_____
      </Grid>
      <Grid style={{color:'#2966be',fontSize:45,textAlign:'center'}}>
      Frequently Asked Questions
      </Grid>
    </Grid>
   
    <Grid style={{width:'100%',display:"flex",flexWrap:'wrap',justifyContent:'center',paddingRight:20}}>
    
    <Grid style={{width:matches?'70%':'100%'}}>
<FaqComponent/>
    </Grid>
        </Grid>
   </Grid>


{/* Section 8 */}


    
    <Grid container spacing={2}  style={{display:'flex',flexDirection:'row',justifyContent:'center',width:'100%',marginTop:25}} className="font-link">
      
      
      <Grid item xs={12} md={6} style={{display:'flex',flexDirection:'column',justifyContent:'flex-end',paddingLeft:20}}>
      <Grid style={{color:'#000',fontSize:20,}}>
            We Make Connections
      </Grid>
      <Grid style={{color:'#2966be',fontSize:45,}}>
      Tell us about your project
      </Grid>
    
   <form ref={form} onSubmit={sendEmail}>
    <Grid style={{display:'flex',flexDirection:"column",}}>
    
    <Grid style={{display:'flex',flexDirection:"row",width:'100%',marginTop:30}}>
    
    <Grid style={{width:'50%'}}>
      <div >Name</div>
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
          <MenuItem value={'MVP Development'} className="font-link">MVP Development</MenuItem>
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
     <Button variant='contained' type='submit'size='large' style={{background:"linear-gradient(to right,#ff2500,#ff7100)",boxShadow:"0 0 0 6px rgb(255,113,0,0.25)"}}>Submit</Button>
    </Grid>
    </Grid>

           </Grid>
           </form>

        </Grid>
       
       
        <Grid item xs={12} md={4} style={{display:'flex',flexDirection:'column',justifyContent:'flex-start'}} >

      <Grid style={{color:'#000',fontSize:20}}>
            GET IN TOUCH
      </Grid>

      <Grid style={{color:'#2966be',fontSize:45}}>
      For work inquiry
      </Grid>
    
   
    <Grid style={{width:'100%',display:"flex",flexWrap:'wrap',justifyContent:'center'}}>
    
    <Grid style={{}}>
    
    <Grid>
    
    <Grid style={{display:'flex',flexDirection:'row',marginTop:20}}> 
    <LocationOnIcon fontSize={'large'} sx={{color:'#000'}}/>
      
      <Grid style={{display:'flex',flexDirection:'column'}}>
           <div style={{fontSize:25,color:"#000"}}>Find US</div>
 <a href='https://goo.gl/maps/VurxKFRojURe5FrG6' style={{textDecoration:'none'}}><div style={{color:'#000',fontSize:20}}>Jinsi Rd Number 2, Lohiya Bazaar</div>
 <div style={{color:'#000',fontSize:20}}>Gwalior, Madhya Pradesh 474009</div></a>
 </Grid>

    </Grid>

    <Grid style={{display:'flex',flexDirection:'row',marginTop:20}}> 
    <CallIcon fontSize={'large'} sx={{color:'#000'}}/>
      
      <Grid style={{display:'flex',flexDirection:'column'}}>
           <div style={{fontSize:25,color:"#000"}}>Call US</div>
 <div style={{color:'#000',fontSize:20}}>+918889430333</div>

 </Grid>

    </Grid>

    <Grid style={{display:'flex',flexDirection:'row',marginTop:20}}> 
    <EmailIcon fontSize={'large'} sx={{color:'#000'}}/>
      
      <Grid style={{display:'flex',flexDirection:'column'}}>
           <div style={{fontSize:25,color:"#000"}}>Mail US</div>
 <a style={{color:'#000',fontSize:20,textDecoration:'none'}} href="mailto:ibuzz@indiabuzz.co.in?subject=Me&body=Hello! I Want To Take Knowledge About Your Services">ibuzz@indiabuzz.co.in</a>
 </Grid>

    </Grid>

  </Grid>

    </Grid>

        </Grid>

        </Grid>

        </Grid>


<Grid>
  <Footer/>
</Grid>



   </Grid>
  )
}

export default Home
