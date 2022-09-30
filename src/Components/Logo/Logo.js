import React from 'react'
import './Logo.css'
import CandLeafLogo from '../Images/CandLeafLogo.svg'
import NavWordmarkLogo from '../Images/NavWordmarkLogo.svg'

const Logo = () => {
  return (
    <div>
        <div className='logcompcont'>
        <img src={CandLeafLogo} alt="" />
        <img src={NavWordmarkLogo} alt="" />
        </div>
    </div>
  )
}

export default Logo;