import React from 'react'
import './Payment.css'
import Logo from '../../Components/Logo/Logo'
import Greathanarrow from '../..//Components//Images//Greathanarrow.svg'
import CreditCardFillpaypg from '../..//Components//Images//CreditCardFillpaypg.svg'
import LockFillpaypg from '../..//Components//Images//LockFillpaypg.svg'
import InfoSquareFillpaypg from '../..///Components///Images///InfoSquareFillpaypg.svg'
import { Link }  from 'react-router-dom'

const myTitle01 = 'Payment method';
const myTitle02 = 'Tax Informations';
const myTitle03 ='Billing address';

// const heading = {
//   fontSize: '60px',
//   color: 'red'
// }

const Payment = () => {
  return (
    <div className='paypage'>
        <Logo />
        <div className='paymentpg'>
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
        <div className='continfo'>
            <div className='subcontinfo'>
            <h5>Contact</h5>
            <p>joe.spagnuolo@uxbly.com</p>
            <h6>Edit</h6>
            </div>
            <hr />
            <div>
            <h5>Ship to</h5>
            <p>Via Firenze 23, 92023, Campobello di  Licata AG, Italia</p>
            <h6>Edit</h6>
            </div>
            <hr />
            <div className='subcontinfo'>
            <h5>Method</h5>
            <p>Standard Shipping - FREE</p>
            <h6>Edit</h6>
            </div>
        </div>
        <h2>{ myTitle01 }</h2>
        <div className='paylinbgimg'>
            <div>
                <img src={CreditCardFillpaypg} alt="" />
                <p>Credit card</p>
            </div>
        </div>
        <form>
          <div className='formcont'>
            <div className='place1'>
               <input type="text" placeholder='Card Number' />
               <img src={LockFillpaypg} alt="" />
               <br />
               <input type="text" placeholder='Holder Name' />
            </div>
            <div className='place2'>
               <input type="text" placeholder='Expiration (MM/YY)' />
               <input type="text" placeholder='CVV' />
               <img src={InfoSquareFillpaypg} alt="" /> 
            </div>
          </div>
        </form>
        <h2>{myTitle02}</h2>
        <div className='taxinfocont'>
          <div className='taxinfoplace'>
            <input type="text" placeholder='VAT number  (optional)' />
          </div>
          <div className='taxinfoplace'>
            <input type="text" placeholder='Tax number  (optional)' />
          </div>
        </div>
        <h2>{myTitle03}</h2>
        <div className='radiocont'>
          <div>
            <div className='subradiocont orcont02'>
            <input type="radio" name='shipping address' />
            <label htmlFor="">Same as the shipping address</label>
            </div>
          </div>
          <hr />
          <div>
            <div className='subradiocont  andcont01'>
            <input type="radio" name='shipping address'/>
            <label htmlFor=""> Use a different address for billing</label>
            </div>
          </div>
        </div>
        <div className='clickins'>
          <div>
            <Link to='/shipping'>Back to shipping</Link>
          </div>
          <div>
            <button>
              <Link to='/thanks'>Pay now</Link>
            </button>
          </div>
        </div>
    </div>
  )
}

export default Payment;