import './Products.css'
import { Link } from 'react-router-dom';



const Products = ({products, onAdd}) => {

  return (
    <div className='spimin'>
      {products.map((product) => (
    <div key={product.id}>
      <div className='imgs101cont'>
      <img src={product.image} alt="spice mint" />
      </div>
        <Link to='/prodpage'>
        <div className='texts101' onClick={() => onAdd(product)}>
        <h4>{product.name}</h4>
        <p>{product.price}$</p>
         </div>
        </Link>
    </div>
    ))}
</div>
    
  )
}

export default Products;


    // {/* <div>
    // <div className='imgs101cont'>
    //   <img src={SweetStraweberry1s1} alt="Sweet Straweberry" />
    //   </div>
    //   <div className='texts101'>
    //   <h4>Sweet Straweberry</h4>
    //     <p>9.99$</p>
    //   </div>
    // </div> 
    // <div>
    //   <div className='imgs101cont'>
    //   <img src={CoolBlueberries1s1} alt="Cool Blueberries" />
    //   </div>
    //     <div className='texts101'>
    //     <h4>Cool Blueberries</h4>
    //     <p>9.99$</p>
    //     </div>
    // </div>
    // <div>
    //   <div className='imgs101cont'>
    //   <img src={JuicyLemon1s1} alt="Juicy Lemon" />
    //   </div>
    // <div className='texts101'>
    // <h4>Juicy Lemon</h4>
    // <p>9.99$</p>
    // </div> */}
    // {/* </div> */}