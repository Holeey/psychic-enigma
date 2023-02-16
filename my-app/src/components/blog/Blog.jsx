import React from 'react'
import './blog.css'
import blog__ellipse from '../../assets/blog__ellipse.png'

const Blog = () => {
  return (
    <div className='blog__container'>
        <div className='blog__section__header'>
            <h1>How it Works </h1>
        </div>
        <div className='blog__grid__content'>
            <div className='simple__to__use__grid'>
                <img src={blog__ellipse} alt='A black colored circle '/>
                <h1>Simple to use </h1>
                <p>Get an overview of your portfolio property in a single pocket app, Mend. Send professional payment invoice, verify Tenant identity and many more</p>
            </div>
            <div className='trusted__grid'>
                <img src={blog__ellipse} alt='A black colored circle '/>
                <h1>Trusted </h1>
                <p>Attending to resident's maintenance needs just got faster. But a maintenance package to take care of your property management. It's a win-win.</p>
            </div>
            <div className='guaranteed__partnership__grid'>
                <img src={blog__ellipse} alt='A black colored circle '/>
                <h1>Guaranteed partnership </h1>
                <p>Residents get to pay on-time by offering them flexible payment scheduling, credit reporting and other financial stabilizers. Mend pays you whilst residents pay us.</p>
                <h6>Coming soon</h6>
            </div>
        </div>
        <div className='join__startups__and__businesses'>Join other startups & Businesses already doing business on Peep </div>
    </div>
  )
}

export default Blog