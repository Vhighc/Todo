import React from 'react'
import './Shipping.css'
import Logo from '../../Components/Logo/Logo'
import Greathanarrow from '../../Components/Images/Greathanarrow.svg'
import { Link } from 'react-router-dom'


const myShipHeader01 = 'Shipping method'


const Shipping = () => {
  return (
    <div className='shippnpg'>
      <Logo />
      <div className='shippg'>
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
        <div className='continfoshippg'>
          <div className='subcontinfoshippg'>
            <h5>Contact</h5>
            <p>joe.spagnuolo@uxbly.com</p>
            <h6>Edit</h6>
          </div>
            <hr />
          <div className='subcontinfoshippgsec2'>
            <h5>Ship to</h5>
            <p>Via Firenze 23, 92023, Campobello di  Licata AG, Italia</p>
            <h6>Edit</h6>
          </div>
        </div>
        <h1>{myShipHeader01}</h1>
        <div className='shippgsec4'>
          <div className='subshippgsec4'>
          <input type="radio" name='billing address' />
          <label htmlFor="">Standard Shipping</label>
          </div>
          <div className='subshippgsec04'><p>Free</p></div>
        </div>
        <div className='shippgclickins'>
          <div >
            <Link to='/basket'>Back to shipping</Link>
          </div>        
          <div>
            <button>
              <Link to='/payment'>Pay now</Link>
            </button>
          </div>
          
        </div>
    </div>
  )
}

export default Shipping;