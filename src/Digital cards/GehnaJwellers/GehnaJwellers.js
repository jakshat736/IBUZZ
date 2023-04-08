import React, { useState, useEffect }  from 'react'
import Hero from '../Template/Hero'
import About from '../Template/About'
import Products from '../Template/Products'
import Payment from '../Template/Payment'
import bgimage from './assets/bg.png'
import ico from './chandlogo.ico'
import {GehnaJwellersContent} from './GehnaJwellersContent'
import '../../App.css'
import { Helmet } from 'react-helmet';
import Review from '../Template/Review'
import OurButton from '../Template/OurButton'

const GehnaJwellers = () => {
    const { hero,about,product,ourButton,review } = GehnaJwellersContent;
    const [visitCount, setVisitCount] = useState(0);
  useEffect(() => {
    const count = Number(localStorage.getItem('GehnaVisitCount')) || 0;
    setVisitCount(count + 1);
    localStorage.setItem('GehnaVisitCount', count + 1);
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
 
            <title>Gehna Jewellers</title>
         
            <meta property="og:title" content="Gehna Jewellers" />

<meta property="og:description" content="Gehna Jewellers" />
    
          </Helmet>
         
          <Hero data={hero}/>
          <About data={about}/>
          <Products data={product}/>
          <Review data={review}/>
          <OurButton data={ourButton}/>
              </div>
      )
}

export default GehnaJwellers
