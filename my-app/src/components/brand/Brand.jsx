import React from 'react'
import './brand.css'
import brand__image from '../../assets/brand.png'

const Brand = () => {
  return (
    <div>
      <div className='brand-container'>
        <h1 className='brand-text'>Trusted by</h1>
        <img className='brand-img' src={brand__image} alt='brand images' />
      </div>  
    </div>
  )
}

export default Brand