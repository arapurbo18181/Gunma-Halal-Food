import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Shop from './pages/Shop';
import UserAccount from './pages/UserAccount';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/about' element={ <About/> } />
        <Route path='/contact' element={ <Contact/> } />
        <Route path='/shop' element={ <Shop/> } />
        <Route path='/useraccount' element={ <UserAccount/> } />
        <Route path='/cart' element={ <Cart/> } />
        <Route path='/checkout' element={ <Checkout/> } />
      </Routes>
    </div>
  );
}

export default App;
