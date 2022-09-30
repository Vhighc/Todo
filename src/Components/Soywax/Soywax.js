import React from 'react'
import './Soywax.css'
import Vect1s2 from '../Images/Vect1s2.svg'
import mockupimg1s2 from '../Images/mockupimg1s2.svg'

const Soywax = (props) => {
    let className = props.context1s2 ? 'context1s2' : '';
  return (
    <div className='section2'>
        <div className='subtextsec2'>
            <div className={className}>
                <h2>Clean and <br /> fragrant soy wax</h2>
                <p>Made for your home and for your wellness</p>
            </div>
            <div className='precontext2s2' >
                <div className='context2s2'>
                    <img src={Vect1s2} alt="Vector" />
                    <p>Eco-sustainable:All recyclable materials, 0% CO2 emissions</p>
                </div>
                <div className='context2s2'>
                    <img src={Vect1s2} alt="Vector" />
                    <p>Hyphoallergenic: 100% natural, human friendly ingredients </p>
                </div>
                <div className='context2s2'>
                    <img src={Vect1s2} alt="Vector" />
                    <p>Handmade: All candles are craftly made with love.</p>
                </div>
                <div className='context2s2'>
                    <img src={Vect1s2} alt="Vector" />
                    <p>Long burning: No more waste. Created for last long.</p>
                </div>
            </div>
            <button>Learn more</button>
        </div>
        <div>
            <div  className='mockupcont'>
            <img src={mockupimg1s2} alt="mockups" />
            </div>
        </div>
    </div>
  )
}

export default Soywax;