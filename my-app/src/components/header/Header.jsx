import React from 'react'
import './header.css'
import group__image from '../../assets/group.png';
import wiki__image from '../../assets/wikipedia.png';
import small__image1 from '../../assets/small__image-1.png'
import small__image2 from '../../assets/small__image-2.png'
import small__image3 from '../../assets/small__image-3.png'
import line__image from '../../assets/line__image.png'
import black__rectangle from '../../assets/black_rectangle.png'

const Header = () => {
  return (
    <div>
        <div className='header-container' >
            <div className='header-content__text'>
              <h1>The Best way to find global partnership and disbursement</h1>
              <h4>We help you find global partners for your startup, business, facilitate the partnership and disbursement of commissions </h4>
              <div className='header-content__btns'>
                <button className='header-content__button-1' type='button'>Join our waitlist</button>
                <button type='button'>schedule a demo</button>
              </div>     
            </div>
            
            <div className='image__container'>
              <div className='header-content__img'> 
                <div>
                <img className='group-img' src={group__image} alt= 'group picture'/>
                <img className='black-bar' src={black__rectangle} alt= 'black rectangle' />
                <img className='wiki-img' src={wiki__image} alt= 'wikipedia' />
                <img className='line-img' src={line__image} alt= 'line' />
                </div>
                <p>Don't do it alone, find a partner</p>         
            </div>
            <div className='header-content__img2'>
                <p className='together__we-can'>...Together we can </p>
                <img className='small-img1' src={small__image1} alt='miniatures' />
                <img className='small-img2' src={small__image2} alt='miniatures' />
                <img className='small-img3' src={small__image3} alt='miniatures' />  
             </div>
            </div>
        </div> 
       <div className='mobile__image__design'>
                <img className='small-img1' src={small__image1} alt='miniatures' />
                <img className='small-img2' src={small__image2} alt='miniatures' />
                <img className='small-img3' src={small__image3} alt='miniatures' />  
                <p className='together__we-can'>...Together we can </p>
        </div>
    </div>
  )
}

export default Header