import React, { useState, useEffect } from 'react';
import Hero from '../Template/Hero'
import About from '../Template/About'
import Products from '../Template/Products'
import Payment from '../Template/Payment'
import { RatiramContent } from './RatiramContent'
import bgimage from '../../assets/ratirambg.jpeg'
import '../../App.css'

const Ratiram = () => {
  
  const { hero,about,product,payment } = RatiramContent;
  const [visitCount, setVisitCount] = useState(0);
  useEffect(() => {
    const count = Number(localStorage.getItem('ratiramVisitCount')) || 0;
    setVisitCount(count + 1);
    localStorage.setItem('ratiramVisitCount', count + 1);
  }, []);
  console.log(visitCount)

  return (
    <div style={{backgroundImage:`url(${bgimage})`,
    backgroundBlendMode:'exclusion',
 
             
              backgroundSize:'contain'}} className="font-link2">
                  <div className="visit-count">
      {visitCount}
    </div>
       <Hero data={hero}/>
          <About data={about}/>
          <Products data={product}/>
      
    </div>
  )
}

export default Ratiram
