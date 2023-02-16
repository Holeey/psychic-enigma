import React from 'react'
import './peep.css'
import vector__img from '../../assets/vector.png'
import peep__img from '../../assets/peep__image.png'

const Peep = () => {
  return (
    <div> 
      
    <div className='peep__container' id='#peep'>
      <h1 className='peep-title'>Peep partnership </h1>
      <div className='test'>
        <div className='scales'>
           <div className='partner-and-scale'>
            <h4>Partner and scale fast </h4>
            <p>Discover other verified  startup<br />
            Search 1,000s of vetted startups to find your perfect match. 
            Derisk potential partnership and project returns using key financial metrics. 
            Be paired up with other businesses in as little as 30 days.
            </p>  
          </div>
          <div className='sub__partner-and-scale'>
            <h5>Sell around the world with Affiliate </h5>
            <p>Create an affiliate marketing system for free, onboard add affiliates and scale your product.</p>
            <h6>Learn more </h6>
      <div className='discover'>
            <h5>Discover more community</h5>
            <h6>Join globalcommunity of startups and businesses</h6>
      </div>  
     </div>
        </div>
       
          <img className='background__vector-img' src={vector__img} alt='vector' />
            <div><img className='peep__img' src={peep__img} alt='community' /></div>
          </div>  

       
  
         
      </div>
    </div>
  
  
    
    
  )
}

export default Peep