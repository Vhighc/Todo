import React from 'react'
import './Cards3.css'

const Cards3 = () => {
  return (
    <div className='section3'>
        <div>
            <figure>
            <img src="./Images/profimg1s3.svg" alt="profimg" />
            <figcaption><img src="./Images/Star1s3.svg" alt="Star" /></figcaption>
            </figure>
            <div className='sec3text'>
                <p>“I love it! No more air fresheners”</p>
                <h6>Luisa</h6>
            </div>
        </div>
        <div>
            <figure>
            <img src="./Images/profimg2s3.svg" alt="profimg" />
            <figcaption><img src="./Images/Star2s3.svg" alt="Star" /></figcaption>
            </figure>
            <div className='sec3text'>
                <p>“Reccomended for <br />everyone”</p>
                <h6>Edoardo</h6> 
            </div>
        </div>
        <div>
            <figure>
            <img src="./Images/profimg3s3.svg" alt="profimg" />
            <figcaption><img src="./Images/Star3s3.svg" alt="Star" /></figcaption>
            </figure>
            <div className='sec3text'>
                 <p>“Looks very natural, the <br /> smell is awesome”</p>
                <h6>Mart</h6> 
            </div>
        </div>
    </div>
  )
}

export default Cards3;