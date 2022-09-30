
import { BrowserRouter as Router, Route, Routes,} from 'react-router-dom';
import Prodpage from './Pages/Prodpage/Prodpage'
import Footer from './Components/Footer/Footer'
import Home from './Pages/Home/Home'
import Basket from './Pages/Basket/Basket'
import { useState } from 'react';
import data from '../src//Data'
 import Receipt from './Pages/Receipt/Receipt';
 import Thanks from './Pages/Thanks/Thanks'
 import Payment from './Pages/Payment/Payment';
 import Shipping from './Pages/Shipping/Shipping'

 
function App() {
  const {products} = data;
  const [addItems, setAddItems] = useState([]);
  const onAdd = (good) => {
    const exist = addItems.find(x => x.id === good.id);
    if (exist) {
      setAddItems(addItems.map(x => x.id === good.id ? {...exist, qty: exist.qty + 1} : x
        )
        );
      } else {
      setAddItems([...addItems, {...good, qty: 1}]);
    }
  }
  
const onRemove = (product) => {
  const exist = addItems.find((x) => x.id === product.id);
  if (exist.qty === 1) {
      setAddItems(addItems.filter((x) => x.id !== product.id));
    } else {
        setAddItems(
            addItems.map((x) =>
              x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
            )
          );
        }
      };

     const handleDelete = (id) => {
    const newAdd = addItems.filter(item => item.id !== id);
    setAddItems(newAdd);
   }
  
  return (
    <Router>
      <div className="App">
        <Routes>
         <Route path='/' element={<Home onAdd={onAdd} products={products} />} />
         <Route path='/prodpage' element={<Prodpage onAdd={onAdd} onRemove={onRemove} addItems={addItems} />} />      
         <Route path='/basket' element={  <Basket products={products} addItems={addItems} onRemove={onRemove} onAdd={onAdd} handleDelete={handleDelete} />} />
         <Route path="/shipping" element={<Shipping />} />
         <Route path="/payment" element={<Payment />} />
         <Route path="/thanks" element={<Thanks />} />
         <Route path="/receipt" element={<Receipt />} />        
        </Routes>
        <Footer />
      </div>
      </Router>
  );
}

export default App;





    