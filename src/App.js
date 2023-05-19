import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import UserAccount from "./pages/UserAccount";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import SubCategory from "./pages/SubCategory";
import ProductsOfSubCategory from "./pages/ProductsOfSubCategory";
import ViewProduct from "./pages/ViewProduct";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Wishlist from "./pages/Wishlist";
import RingLoader from "react-spinners/RingLoader";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import LoadingBar from "react-top-loading-bar";
import { useProduct } from "./context/ProductContext";
import axios from "axios";
import { useApi } from "./context/ApiContext";
import ErrorPage from "./pages/ErrorPage";
import Forgot_password from "./pages/Forgot_password";
import SetNewPass from "./pages/SetNewPass";
import ShippingPolicy from "./pages/ShippingPolicy";

// axios.defaults.baseURL = "http://gunma.myesdev.xyz/";
// axios.defaults.baseURL = "https://gunma-admin.getthemeplugin.com/";
axios.defaults.baseURL = "https://admin.softtech-it.org/";
// axios.defaults.baseURL = "http://localhost:8000/";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Accept"] = "application/json";
axios.defaults.withCredentials = true;

function App() {
  const { progress, setProgress } = useProduct();
  const { IsApi } = useApi();
  const [Loader, setLoader] = useState(true);

  useEffect(() => {
    // setLoader(true);
    // setTimeout(() => {
    //   setLoader(false);
    // }, 4000);
  }, []);

  return (
    <>
      {IsApi ? (
        <div className="">
          <LoadingBar
            color="#FF2D00"
            progress={progress}
            // onLoaderFinished={() => setProgress(0)}
          />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/forgotpassword" element={<Forgot_password />} />
            <Route path="/setpassword/:id" element={<SetNewPass />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/useraccount" element={<UserAccount />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/privacypolicy" element={<PrivacyPolicy />} />
            <Route path="/:id" element={<SubCategory />} />
            <Route path="/:id/:id" element={<ProductsOfSubCategory />} />
            <Route path="/:id/:id/:id" element={<ViewProduct />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/shippingpolicy" element={<ShippingPolicy />} />
            <Route path="/error" element={<ErrorPage/>} />
            <Route path="/*" element={<ErrorPage/>} />
          </Routes>
        </div>
      ) : (
        <div className="w-full h-[90vh] flex justify-center items-center">
          <RingLoader
            color={"#FF380D"}
            loading={Loader}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      )}
    </>
  );
}

export default App;
