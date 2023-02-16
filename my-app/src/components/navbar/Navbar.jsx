import React from 'react';
import './navbar.css';
import { useState, useEffect, useRef } from 'react'
import {FaAngleDown } from 'react-icons/fa';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'



const Menu = () => ( 
  <>
    <p><a href='#'>Peep</a></p>
    <p><a href='#'>Partnership</a></p>
    <p><a href='#'>Disbursement</a></p>
    <p><a href='#'>Blog</a></p>
  </>
)

const options = [
  {url: '#open',
  name: 'Link'
  }, 
  
  {url: '#open',
  name: 'Link'
  }, 
  
  {url: '#open',
  name: 'Link'
  }, 
   
  {url: '#open', 
  name : 'Link'}
  ]


const Navbar = () => {

  const [ToggleMenu, setToggleMenu] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

    const ref = useRef(null)
  
    const handleOutsideClick = (e) => {
      if(ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
  
    useEffect(() => {  
      document.addEventListener("click", handleOutsideClick, true); 
      return () => {
        document.removeEventListener("click", handleOutsideClick, true);
      };
    });  

  return (
    <div >
      <div className='nav-content'>
        <div className='nav-container__1'>
          <a href='#peep'>Peep</a>
          <a ref={ref} onClick={()=> setIsOpen(!isOpen)} className='dropdown-btn' href='#partnership'> Partnership <FaAngleDown className='FaAngleDown' /></a> 
          {isOpen && (<ul className='dropdown-content'>
    {options.map(item => (<li><a href={item.url}> {item.name} </a></li>))}
    </ul>)}
        </div>       
        
        <div className='nav-container__2'>
          <a href='#disbursement'>Disbursement</a>
          <a href='#blog'>Blog</a>
          <button type='button' className='login-btn'>Login</button>
          <button  type='button' className='join-now__btn'>Join Now</button></div>

        </div>
        <div className='navbar__mobile__container'>
          <h1>Mend </h1>
          <div className='navbar__mobile__btn'> 
          {ToggleMenu 
           ? <RiCloseLine color='black' size={30} onClick={() => setToggleMenu(false)}/>
           : <RiMenu3Line color='black' size={30} onClick={()=> setToggleMenu(true)} />
          }
          {ToggleMenu && (
            <div className='navbar__menu__list' >
              <div className='menu-list'>
              <div className='navbar__mobile__btns'>
             <p><button type='button'>Login</button></p>
             <p><button type='button'>Join Now</button></p>  
          </div>
          <Menu  />
          </div>
              
            </div>   
          )}
          </div>
        
          </div>
                  
          

        

    </div>
  )
}

export default Navbar