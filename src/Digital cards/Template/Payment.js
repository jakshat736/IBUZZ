import React from "react";
import { Divider, Grid, Typography, Button } from "@mui/material";
const Payment = ({data}) => {
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
          }}
        >
          Payment
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          style={{ display: "flex", justifyContent: "center", marginTop: -20 }}
        >
          ______________________________________
        </Grid>
       <Grid item xs={6} md={3} style={{backgroundColor:"#fff",width:'10vw',height:"30vh",borderRadius:5,marginTop:10}}>
     <b> {data.bankName}</b><br></br>
Name: {data.name}<br></br>
Account:{data.accountNumber}<br></br>
IFSC:{data.ifscCode}

       </Grid>
       <Grid item xs={12} md={4} style={{display:'flex',justifyContent:'center'}}>
        <img src={data.qrImage} width={250}/>

       </Grid>
      </Grid>
    </Grid>
    
  )
}

export default Payment
