import React from 'react'
import { Grid } from '@mui/material'
import firstimg from '../assets/first.png'

const DemoPage = () => {
  return (
    <Grid style={{backgroundImage:`url(${firstimg})`,height:'100vh',backgroundAttachment:'fixed',backgroundSize:'cover'}}>
        <Grid style={{background:'rgb(128,128,128,0.9)',height:'100vh',position:'relative'}}>
        <div style={{fontSize:100,position:'absolute'}}>
            AKshat
        </div>
        </Grid>
        
       

    </Grid>
  )
}

export default DemoPage
