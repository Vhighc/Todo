import React from 'react'
import Productname2s1 from '../Images/Productname2s1.svg'
import FragrantCinnamon2s1 from '../Images/FragrantCinnamon2s1.svg'
import SummerCherries2s1 from '../Images/SummerCherries2s1.svg'
import CleanLavander2s1 from '../Images/CleanLavander2s1.svg'
import './Product2s1.css'
import { Link } from 'react-router-dom';
import { useState } from 'react'

const Produvt2s1 = (props) => {
  const {onAdd} = props;
  
  const [goods, setGoods] = useState([ 
    {id: '01', name: 'Productname', price: '9.99', image: Productname2s1 },
    {id: '02', name: 'FragrantCinnamon', price: '9.99', image: FragrantCinnamon2s1 },
    {id: '03', name: 'SummerCherries', price: '9.99', image: SummerCherries2s1 },
    {id: '04', name: 'CleanLavander', price: '9.99', image: CleanLavander2s1 }
  ]);


  // const handleDelete = (id) => {
  //   const newAdd = goods.filter(good => good.id !== id);
  //   setGoods(newAdd);
  //  }

  return (
     <div className='prodnam'>
            {goods.map((good) => (
        <div  key={good.id}>
            <div className='imgcon2s1'>
              <img src={good.image} alt="Product name" />
            </div>
            <Link to='/prodpage'>
            <div className='textcon2s1'  onClick={() => onAdd(good)}>
            {/* <div className='textcon2s1'  onClick={() => handleDelete(good.id)}> */}
              <h4>{good.name}</h4>
              <p>{good.price}$</p>
            </div>
            </Link>
        </div>    
            ))} 
     </div>
  )
}

export default Produvt2s1;
