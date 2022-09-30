import React from 'react'
import './Thanks.css'
import Logo from '../../Components/Logo/Logo'
import Greathanarrow from '../..//Components//Images//Greathanarrow.svg'
import CheckCircleThankspg from '../..//Components//Images//CheckCircleThankspg.svg'
// import { link } from 'react-router-dom'
import { Link } from 'react-router-dom'


const Thanks = () => {
  return (
    <div className='thankspg'>
        <Logo />
        <div className='thankspghdnav'>
          <div>
          <p>Cart</p>
          <img src={Greathanarrow} alt="" />
          </div>
          <div>
          <p>Details</p>
          <img src={Greathanarrow} alt="" />
          </div>
          <div>
          <p>Shippng</p>
          <img src={Greathanarrow} alt="" />
          </div>
          <p>Payment</p>
        </div>
        <div className='checkpay'>
          <img src={CheckCircleThankspg} alt="" />
        </div>
        <h1>Payment Confirmed</h1>
        <h4>ORDER #2039</h4>
        <p> Thank you Joe for buying Candleaf. 
          The nature is grateful to you. 
          Now that your order is confirmed it will be ready to ship in 2 days. 
          Please check your inbox in the future for your order updates.
        </p>
        <button><Link to='/home'>Back to shopping</Link></button>
        <div className='recethank'><Link to='/receipt'>Print receipt</Link></div>
    </div>
  )
}

export default Thanks;