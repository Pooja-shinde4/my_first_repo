import React from 'react'
import logo from './codeseed-logo-horizontal.png'

const Footer = () => {
  return (
    <>
    <div className='bg-black h-90 text-white'>
        <div className='p-14'>
            <img src={logo} alt="no img" style={{height:'100px',width:'400px'}}/><br/>
            Quick Links <br/>
            Javascript <br/>
            Cources<br/>
            </div>
        <div className='p-10 space-x-7 ml-14'>
            <a href=""><u>Terms and Conditions</u></a>
            <a href=""><u>Refund Policy</u></a>
            <a href=""><u>Cancellation Policy</u></a>
            <a href=""><u>Pricing Policy</u></a>
            <a href=""><u>Privacy Policy</u></a>

             2024 @codeseed All rights reserved.
        </div>
    </div>
    </>





  )
}

export default Footer