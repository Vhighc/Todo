
import { BrowserRouter as Router, Route, Routes,} from 'react-router-dom';
import Home from './Pages/Home/Home'
// import { useState } from 'react';
// import data from '../src//Data'
//  import Auth from './Pages/Auth/Auth';
// import RoutesPath from './routes';

 
function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
         <Route path='/' element={<Home />} />       
         {/* <Route path="/auth" element={<Auth />} />         */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;





    