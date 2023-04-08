import React from 'react'
import About from './About'
import Hero from './Hero'
import Payment from './Payment'
import Products from './Products'
import bgimage from '../assets/back.png'
import ico from './chandlogo.ico'
import {content} from './Content'

import { Helmet } from 'react-helmet';


const Template = () => {
  const { hero,about,product,payment } = content;
 
  return (
    <div style={{ backgroundImage:`url(${bgimage})`,
   backgroundBlendMode:'exclusion',

            
             backgroundSize:'contain'
             }}>
             
               {/* <Helmet>
        <title>चन्दन ज्वैलर्स (गोरमी वाले)</title>
        <link rel="icon" href={ico} />
      </Helmet> */}
      <Helmet>
  <title>My Page Title</title>
  <link rel="icon" href={ico} />
  <meta property="og:title" content="My Page Title" />
  <meta property="og:image" content={ico} />
  <meta name="description" content="This is a brief description of my page." />
  // Other meta tags...
</Helmet>
      <Hero data={hero}/>
      <About data={about}/>
      <Products data={product}/>
      <Payment data={payment}/>
          </div>
  )
}

export default Template
