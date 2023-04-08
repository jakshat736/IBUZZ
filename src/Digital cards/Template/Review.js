import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Grid } from '@mui/material';
const Review = ({data}) => {
    const ratingChanged = (newRating) => {
        console.log(newRating);
      };
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
          Review Us
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          style={{ display: "flex", justifyContent: "center", marginTop: -20 ,color:`${data.textColor}` }}
        >
          ______________________________________
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          style={{ display: "flex", justifyContent: "center", marginTop: -20 }}
        >
           <ReactStars
    count={5}
    onChange={ratingChanged}
    size={50}
    activeColor="#ffd700"
  />
        </Grid>
       
        
      </Grid>
    </Grid>
  )
}

export default Review
