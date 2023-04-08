import React from "react";
import { Divider, Grid, Typography, Button } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";


const About = ({data}) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down(900));
    const [isOpen, setIsOpen] = React.useState(false);

    function toggleOpen() {
      setIsOpen(!isOpen);
    }
  
    return (
    <Grid style={{ marginTop: "10%" }}>
      <Grid
        container
        spacing={2}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Grid
          item
          xs={12}
          md={12}
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: "2rem",
            fontWeight: "bold",
            color:`${data.textColor}`
          }}
        >
          About Us
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          style={{ display: "flex", justifyContent: "center", marginTop: -20, color:`${data.textColor}` }}
        >
          ______________________________________
        </Grid>
        <Divider variant="middle" textAlign="center" />
        <Grid
          item
          xs={12}
          md={12}
          style={{
            display: "flex",
            justifyContent: "center",
            textAlign:'justify',
            paddingRight:matches? "5%": "25%",
            paddingLeft:matches? "8%": "25%",
            fontSize:matches?15:20,
            color:`${data.textColor}`
          }}
        >
          {data.aboutContent}
        </Grid>

        <Grid item xs={6} md={2.5} style={{width:'50%',fontSize:matches?15:20, }}>
          <DoneIcon fontSize={matches?"medium":"large"} style={{color:`${data.buttonColor}`,marginBottom:matches?'-4%':'-2%'}}/>
         <b style={{marginTop:8, color:`${data.textColor}`}}>{data.quality1}</b>
        </Grid>
        <Grid item xs={6} md={2.5} style={{width:'50%',fontSize:matches?15:20}}> 
          <DoneIcon fontSize={matches?"medium":"large"} style={{color:`${data.buttonColor}`,marginBottom:matches?'-4%':'-2%'}}/>
          <b style={{marginTop:8, color:`${data.textColor}`}}>{data.quality2}</b>
        </Grid>
        <Grid item xs={6} md={2.5} style={{width:'50%',fontSize:matches?15:20}}>
          <DoneIcon fontSize={matches?"medium":"large"} style={{color:`${data.buttonColor}`,marginBottom:matches?'-4%':'-2%'}}/>
          <b style={{marginTop:8, color:`${data.textColor}`}}>{data.quality3}</b>
        </Grid>
        <Grid item xs={6} md={2.5} style={{width:'50%',fontSize:matches?15:20}}>
          <DoneIcon fontSize={matches?"medium":"large"} style={{color:`${data.buttonColor}`,marginBottom:matches?'-4%':'-2%'}}/>
          <b style={{marginTop:8, color:`${data.textColor}`}}>{data.quality4}</b>
        </Grid>

        <Grid item xs={12} md={12} style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
            <Button style={{backgroundColor:`${data.buttonColor}`,color:`${data.buttonContentColor}`}} onClick={toggleOpen} variant='contained'>Opening Hours</Button>
            {isOpen && (
        <div style={{transition:"ease-in-out",transitionDelay:'-moz-initial',fontSize:matches?15:20}}>
         
         <ul class="list-unstyled">

                        <li style={{color:`${data.textColor}`}}> 
                            <b class="text-uppercase" >Monday:  </b>
                            {data.mondayOpeningHours}

                        </li>
                        <li style={{color:`${data.textColor}`}}>
                            <b class="text-uppercase">Tuesday:  </b>
                            {data.tuesdayOpeningHours}
                        </li>
                        <li style={{color:`${data.textColor}`}}>
                            <b class="text-uppercase">Wednesday:  </b>
                            {data.wednesdayOpeningHours}

                        </li>
                        <li style={{color:`${data.textColor}`}}>
                            <b class="text-uppercase">Thursday:  </b>
                            {data.thursdayOpeningHours}

                        </li>
                        <li style={{color:`${data.textColor}`}}>
                            <b class="text-uppercase">Friday:  </b>
                            {data.fridayOpeningHours}

                        </li>
                        <li style={{color:`${data.textColor}`}}>
                            <b class="text-uppercase">Saturday:  </b>
                            {data.saturdayOpeningHours}

                        </li>
                    
                        <li style={{color:`${data.textColor}`}}>
                            <b class="text-uppercase">Sunday:  </b>
                            {data.sundayOpeningHours}

                        </li>
                    </ul>
        </div>
      )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default About;
