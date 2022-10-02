
import { BrowserRouter as Router, Route, Routes,} from 'react-router-dom';
// import TodoList from './Components/Todos/TodoList';
import Home from './Pages/Home/Home'
import Auth from './Pages/Auth/Auth';



 
function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
         <Route path='/' element={<Home />} />       
         <Route path='/auth' element={<Auth />} />         
        </Routes>
      </div>
    </Router>
  );
}

export default App;





    