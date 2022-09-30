import React from 'react'
import classes from'./Prods.module.css'

const Prods = (props) => {
    const  { products, onAdd } = props;
  return (
    <div>

        <div className={classes.texts101}>
        {products.map((product) => (
          <div key={product.id} className={classes.imgs101cont}>
            <div className={classes.img201cont}>
              <img src={product.image} alt={product.name} />
            </div>
              <div className={classes.spimin} onClick={() => onAdd(product)}>
                <h4>{product.name}</h4>
                <p>{product.price}$</p>
              </div>
          </div>   
        ))}
        </div>
    </div>
  )
}

export default Prods;


// <div>
//   <div className='imgs101cont'>
//     <img src={spiceMint1s1} alt="spice mint" />
//   </div>
//   <div className='texts101'>
//    <Link to='/prodpage'>
//      <h4>Spiced Mint</h4>
//      <p >9.99$</p>
//    </Link>
//   </div>
// </div>
