import React from 'react'
import './footer.css'
import {FaFacebook, FaTwitterSquare, FaLinkedin, FaInstagram} from 'react-icons/fa'


const Footer = () => {
  return (
    <div>
        <div className='footer__white__space'>
            
            <div className='above__footer__line'>
                <div className='react-icons__container'>
                <a><FaFacebook /> </a> <a><FaTwitterSquare /></a>  <a><FaLinkedin /></a> <a><FaInstagram /> </a>
                <p>usemend@outlook.com</p>
                </div>

            <div className='footer__small__container'>
                <div className='partners__container'>
                <h5>Partnership</h5>
                <p><small>Platforms</small></p>
                <p><small>Blog</small></p>
                </div>    
                
                <div>
                <h5>Disbursement</h5>
                <p><small>Resident</small></p>
                <p><small>Rent</small></p>
                <p><small>Find Home</small></p>
                </div>
            </div>
            </div>
                
            <hr className='footer__line'/>

            <div className='below__footer__line'>
                <div><span>© Powered by Peep  2023</span> </div>
               
                <div className='privacy__and__terms'>
                <span>Privacy Policy</span>
                <span>Terms & Conditions</span>
                </div>
                
            </div>
            
            

        </div>

    </div>
  )
}

export default Footer