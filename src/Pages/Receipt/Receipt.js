import React from 'react'
import './Receipt.css'
import Receiptpgimg1s1 from '../../Components/Images/Receiptpgimg1s1.svg'

const Receipt = () => {
  return (
    <div className='thankspage'>
        <div className='receiptpgsec1cont'>
            <div className='receiptimgcont'>
                <img src={Receiptpgimg1s1} alt="" />
            </div>
            <div className='sec1headtxt'>
                <h3>Spiced Mint Candleaf®</h3>
                <h2>$ 9.99</h2>
            </div>
        </div>
        <div className='subship'>
            <div className='subshiptxt1'>
                <p>Subtotal</p>
                <p>Shipping</p>
            </div>
            <div className='subshiptxt2s2'>
                <h4>$  9.99</h4>
                <p>Free Shipping</p>
            </div>
        </div>
        <div className='paidolla'>
            <div>
                <p>Paid</p>
            </div>
            <div className='padolaprice'>
            <h2>$ 9.99</h2>
            </div>
        </div>
    </div>
  )
}

export default Receipt;