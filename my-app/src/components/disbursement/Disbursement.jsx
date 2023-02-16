import React from 'react'
import './disbursement.css'
import mobile__screen from '../../assets/screen.png'

const Disbursement = () => {
  return (
    <div className='disburse__container'>
        <h1 className='section__header'>Instant comission disbursement among business partners </h1>
        <div className='disbursement__grid__container'>
            <div className='fast__and__efficient__grid'>
                <h1>Fast & Efficient </h1>
                <p>Because Peep supports multicurrency, you can have partners and affiliates  from anywhere in the world, Peep disburse any commission from the partnership instantly in their local  local bank account or via PayPal. We simply convert the currency to their local currency and pay them automatically.</p>
                <img src={mobile__screen} alt='phone screen'/>
            </div>
            <div className='secured__and__trusted__grid'>
                <h1>Secured & Trusted </h1>
                <p>We deliver seamless strategic partnership which gives your business that visibility it needs to thrive locally and internationally </p>
                <img src={mobile__screen} alt='phone screen'/>
            </div>
        </div>
    </div>
  )
}

export default Disbursement