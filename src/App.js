import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Shop from './pages/Shop';
import UserAccount from './pages/UserAccount';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import PrivacyPolicy from './pages/PrivacyPolicy';
import SubCategory from './pages/SubCategory';
import ProductsOfSubCategory from './pages/ProductsOfSubCategory';
import ViewProduct from './pages/ViewProduct';
import Login from './pages/Login';
import Signup from './pages/Signup';

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
        <Route path='/privacypolicy' element={ <PrivacyPolicy/> } />
        <Route path='/product-category/:id' element={ <SubCategory/> } />
        <Route path='/product-category/:id/:id' element={ <ProductsOfSubCategory/> } />
        <Route path='/product/:id' element={ <ViewProduct/> } />
        <Route path='/login' element={ <Login/> } />
        <Route path='/signup' element={ <Signup/> } />
      </Routes>
    </div>
  );
}

export default App;
