import React, { useState, useEffect }  from 'react'
import Hero from '../Template/Hero'
import About from '../Template/About'
import Products from '../Template/Products'
import Payment from '../Template/Payment'
import bgimage from '../../assets/back.png'
import ico from './chandlogo.ico'
import {ChandanJwellersContent} from './ChandanJwellersContent'
import '../../App.css'
import { Helmet } from 'react-helmet';
import Review from '../Template/Review'
import OurButton from '../Template/OurButton'

const ChandanJwellers = () => {
    const { hero,about,product,payment } = ChandanJwellersContent;
    const [visitCount, setVisitCount] = useState(0);
  useEffect(() => {
    const count = Number(localStorage.getItem('ChandanVisitCount')) || 0;
    setVisitCount(count + 1);
    localStorage.setItem('ChandanVisitCount', count + 1);
  }, []);
    return (
        <div style={{ backgroundImage:`url(${bgimage})`,
       backgroundBlendMode:'exclusion',
    
                
                 backgroundSize:'contain'
                 }} className="font-link2">
                     <div className="visit-count">
      {visitCount}
    </div>
                   <Helmet>
                   <meta charSet="utf-8" />
 
            <title>चन्दन ज्वैलर्स (गोरमी वाले)</title>
            <link rel="icon" href={ico} />
            <meta property="og:title" content="चन्दन ज्वैलर्स (गोरमी वाले)" />
<meta property="og:image" content={ico} />
<meta property="og:description" content="Chandan Jwellers" />
    
          </Helmet>
         
          <Hero data={hero}/>
          <About data={about}/>
          <Products data={product}/>
          <Review data={payment}/>
          <Payment data={payment}/>
          <OurButton data={payment}/>
              </div>
      )
}

export default ChandanJwellers
