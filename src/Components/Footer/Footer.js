import React from 'react'
import './Footer.css'
import footLogo1s4 from '../Images/footLogo1s4.svg'



const Footer = () => {
  return (
    <div className='pre4sec'>
      <div className='prehr'>
        <br />
      </div>
      <hr />
      <div className='section4'>
        <div className='subsec4'>
            <div className='sec4logocont'>
                <img src={footLogo1s4} alt="footer logo" />
                <div>
                  <img src="./Images/wodmak1s4.svg" alt="word mark" />
                </div>
            </div>
            <div>
              <p>Your natural candle made for your home and for your wellness.</p>
            </div>
        </div>
        <div className='widgets4'>
          <div className='headgets4 and5'>
            <h5>Discovery</h5>
            <p>New season</p>
            <p>Most searched</p>
            <p>Most sold</p>
          </div>
          <div className='headgets4 and5'>
           <h5>About</h5>
            <p>Help</p>
            <p>Shipping</p>
            <p>Affiliate</p>
          </div>
          <div className='headgets4'>
           <h5>Info</h5>
            <p>Contact us</p>
            <p>Privacy Policies</p>
            <p>Terms & Conditions</p>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Footer;