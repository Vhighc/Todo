
import './Basket.css';
import { Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';




const myLink01 = "Back to shopping"
const myCartTitle01 ='Your cart items'
const myLink02 = "Remove"
const myParagraph01 ='Tax and shipping cost will be calculated later'

const Basket = (props) => {
    // const { addItems, onAdd, onRemove } = props;
    const { addItems, onAdd, onRemove, handleDelete } = props;
    const itemsPrice = addItems.reduce((acc, c) => acc + c.price * c.qty, 0);
    // const taxPrice = itemsPrice * 0.14;
    // const shippingPrice = itemsPrice > 100 ? 0 : 10;
    // const totalPrice = itemsPrice + taxPrice + shippingPrice;
      // const totalPrice = itemsPrice ;
  return (
    <div className='cartpg'>
      <Navbar />
      <div className='subcarthead'>
        <h1>{myCartTitle01}</h1>
        <Link to='/payment' >{myLink01}</Link>
      </div>
       
       
      <div className='cartsubhead01'>
          <div className='cartsubhead1stcont'>
              <p>Product</p>
          </div>
          <div className='cartsubhead2ndcont'>
              <p>Price</p>
              <p>Quantity</p>
              <p>Total</p>
          </div>
      </div>

        <div>
            {addItems.length === 0 && <div>Cart is empty</div>}
        </div>

      {addItems.map((item) => (
          <div key={item.id} className='precartsubhead202'>
            <div  className='cartsubhead202'>
                 <div className='cartsubhead202imgcont'>
                   <img src={item.image} alt="" />
                 </div>
              <div className='cartsubhead2002'>
                <h2>{item.name} Candleaf®</h2>
                {/* <button onClick={()=>onRemove(item)} >{myLink02}</button> */}
                <button onClick={() => handleDelete(item)}>{myLink02}</button>
              </div>
              <div className='calccont'>
                  <p>${item.price}</p>
                  <button>
                      <div onClick={() => onAdd(item)} >+</div>
                      <p>{item.qty}</p>
                      <div onClick={()=>onRemove(item)} >-</div>
                  </button>
                  <p>${itemsPrice.toFixed(2)}</p>
              </div>
          </div>
        </div>
        ))}
      <hr />
      <div className='lastseccartpg'>
        <p>Sub-total</p>
        <p>$ 9.99</p>
        <div>
          <button>
            <Link to='/shipping' >Check-out</Link>
          </button>
        </div>
      </div>
      <p>{myParagraph01}</p>
    </div>
  )
}

export default Basket;

// {cartItems.length !== 0 && (
//   <>
//   <hr></hr>
//   <div className='row'>
//   <div className='col-2'>Items Price</div>
//   <div className='col-1 text-right'>${itemsPrice.toFixed(2)}</div>
//   </div>
//   <div className='row'>
//   <div className='col-2'>Tax Price</div>
//   <div className='col-1 text-right'>${taxPrice.toFixed(2)}</div>
//   </div>
//   <div className='row'>
//   <div className='col-2'>Shipping Price</div>
//   <div className='col-1 text-right'>${shippingPrice.toFixed(2)}</div>
//   </div>
//   <div className='row'>
//   <div className='col-2'><strong>Total Price</strong></div>
//   <div className='col-1 text-right'>
//       <strong>${totalPrice.toFixed(2)}</strong>
//   </div>
//   </div>
//   <hr/>
//   <div className='row'>
//       <button onClick={()=>alert('Implement Checkout')}>
//           Checkout
//       </button>
//   </div>
//   </>
// )}