
import './Prodpage.css'
import Navbar from '../../Components/Navbar/Navbar';

import { Link } from 'react-router-dom';



const Prodpage = (props) => {
  const { addItems, onAdd, onRemove, } = props;
  // let className = props.nav ? 'nav' : ""
  
  return (
    <div className='main'>
      <Navbar />
      {addItems.map((item) =>(

        <div key={item.id} className='page2prod'>
        <div className='propg2prod'>
          <div className='prodpgsec01imgcont'>
            <img src={item.image} alt="" />
          </div>
            <p>All hand-made with natural soy wax, Candleaf is made for your pleasure moments.</p>
            <span id='freeship'>FREE SHIPPING</span>
        </div>
         
        <div className='presimica'>
          <h3>{item.name}Candleaf®</h3>
          <div className='simica'>
            <div className='subsimica01'>
              <h2>${item.price}</h2>
              <p>Quantity</p>  
              <div className='prodpagebutt'>
                <button>
                  <div onClick={()=>onAdd(item)}>+</div>
                  <p>{item.qty}</p> 
                  <div  onClick={()=>onRemove(item)}>-</div>
                </button>
              </div>
            </div> 
              <div className='prodpgradiosec'>
                  <div>
                    <input type="radio" name='pay mode' />
                    <label htmlFor="">One time purchase</label>
                  </div>
                  <div className='preradiosecoptpg'>
                    <div className='radiosecoptpg'>
                      <input type="radio" name='pay mode' />
                      <label htmlFor="">Subscribe and delivery every </label>
                      <select>
                      <option value="4 weeks">4 weeks</option>
                      </select>
                    </div>
                    <div className='subsecoptpg'>
                      <p>Subscribe now and get the 10% of discount on every recurring order.  The discount will be applied at checkout. <span className='seedet'>See details</span></p>
                    </div>
                  </div>
                  <Link to='/basket' >
                    <button onClick={() => onAdd(item)}>
                    <img src="./Images/Vectorcartbutt.svg" alt="" />
                    <p> + Add to cart</p> 
                    </button>
                  </Link>
              </div>
              </div>
                <div className='waxfragburn'>
                  <p><strong>Wax: </strong>Top grade Soy wax that delivers a smoke less,  consistent burn</p>
                  <p><strong>Fragrance: </strong>Premium quality ingredients with natural essential oils</p>
                  <p><strong>Burning Time: </strong>70-75 hours <strong> Dimension: </strong>10cm x 5cm <strong> Weight: </strong>400g</p>
                </div>
        </div>
      </div>
    ))}
    </div>
  )
}

export default Prodpage;

