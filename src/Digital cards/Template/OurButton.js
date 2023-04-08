import React from 'react'
import { Button, Grid } from '@mui/material';
import { WhatsApp } from '@mui/icons-material';

const OurButton = ({data}) => {
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
          fontSize: "1rem",
          fontWeight: "bold",
          color:`${data.textColor}`
        }}
      >
        To Get Your Digital Card Now
      </Grid>
      <Grid
        item
        xs={12}
        md={12}
        style={{ display: "flex", justifyContent: "center", marginTop: -20, color:`${data.textColor}` }}
      >
        ______________________________________
      </Grid>
      <Grid
        item
        xs={12}
        md={12}
        style={{ display: "flex", justifyContent: "center", marginTop: 10,marginBottom:10 }}
      >
        <Button variant='contained' href='https://api.whatsapp.com/send?phone=918889430333' style={{backgroundColor:'green'}} startIcon={            <WhatsApp/>}>
        @IBUZZ Tech Solution
        </Button>
      </Grid>
     
     
      
    </Grid>
  </Grid>
  )
}

export default OurButton
