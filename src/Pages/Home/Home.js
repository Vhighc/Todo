
import './Home.css'
import Soywax from '../../Components/Soywax/Soywax'
import Products from '../../Components/Products/Products'
import Produvt2s1 from '../../Components/Product2s1/Produvt2s1'
import '../../heroStyles.css'
import styles from '../../heroStyles.module.css'
import Cards3 from '../../Components/Cards3/Cards3'
import Hero from '../../Components/Hero/Hero'
import Navbar from '../../Components/Navbar/Navbar'
// import data from '../../Components/Data'
// import { useState } from 'react'


const myTitle1 = 'Products';
const myParagraph1 = 'Order it for you or for your beloved ones';
const myTitle2 ='Testimonials';
const myParagraph2 ='Some quotes from our happy customers';
const myParagraph3 ='Our top selling product that you may like';

// const {products} = data;

const Home = (props) => {

  const { onAdd, products }= props;

  // const [addItems, setAddItems] = useState([]);
  // const handleAdd = (product) => {
  //   const exist = addItems.find(x => x.id === product.id);
  //   if (exist) {
  //     setAddItems(addItems.map(x => x.id === product.id ? {...exist, qty: exist.qty + 1} : x
  //       )
  //     );
  //   } else {
  //     setAddItems([...addItems, {...product, qty: 1}]);
  //   }
  // }

  return (
    <div >
    {/* <Navbar nav={true}/> */}
    <Navbar />
        <div className={styles.herosec}>
            <Hero />
        </div>
        <div className='subhero'>
           <h1>{ myTitle1 }</h1>
           <p>{ myParagraph1 }</p>
        </div>
        <Products products={products} onAdd={onAdd} />
        <>
        <Produvt2s1 onAdd={onAdd}/>
        </>
        <Soywax context1s2 = {true} />
        <div className='sec3'>
           <h1>{ myTitle2 }</h1>
           <p>{ myParagraph2 }</p>
        <Cards3 />
        </div>
         <div className='subhero'>
           <h1>{ myTitle1 }</h1>
           <p>{ myParagraph3 }</p>
         </div>
         <div className='prodsec4'>
         <Products products={products} />
        </div> 
    </div>
  )
}

export default Home;