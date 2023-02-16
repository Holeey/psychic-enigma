import React from 'react'
import './partnership.css'
import affiliate__img1 from '../../assets/Ellipse.png'
import affiliate__img2 from '../../assets/Rectangle.png'
import affiliate__img3 from '../../assets/Rectangle.png'
import startup__img from '../../assets/Ellipse.png'
import business__img from '../../assets/Ellipse.png'

const Partnership = () => {
  return (
    <div>
    <div className='container'>
        <h1 className='grid__title'>The world first startups & Business Partnership Hub</h1>
        <div className='partnership-grid'>
        <div className='start-up__grid'>
        <h3>Startups</h3>
        <p>We bring together everything that's required to facilitate global and local API partnership and instant disbursement of commissions within your product.
            Advisory + Technology + Compliance
        </p>
        
        <h6>
        <img src={startup__img} alt='start up' />
          SilfricaHQ <br />Brand marketing platform Lagos Nigeria Connect Decline </h6>
       </div>        
        <div className='business__grid'>
         <h3>Business </h3>
        <p>
          Peep grow  powers embedded affiliate sales  for business, content creators, logistics tech, e-commerce businesses, and everything in between.
        </p>
       
        <h6> 
        <img src={business__img} alt='business' />
          MendHQ Technologies <br /> Real Estate investment marketplace Lagos Nigeria </h6>  
        </div>
        <div className='affiliate__grid'>
          <h3 >Affiliates</h3>
          <p>
            Create an affiliate marketing system for free, and only give a commission when a sale is facilitated.
          </p>
          
           <h6> 
          <img className='affiliate__img-1' src={affiliate__img1} alt='affiliates 1' />
            MendHQ Technologies <br /> Real Estate investment marketplace Lagos Nigeria 
          <img className='affiliate__img-2' src={affiliate__img2} alt='affiliates 2' />
          <img className='affiliate__img-3' src={affiliate__img3} alt='affiliates 3' /></h6> 
            
        </div>
       </div> 
    </div>
    </div>
  )
}

export default Partnership