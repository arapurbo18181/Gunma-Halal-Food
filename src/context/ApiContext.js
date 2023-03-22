import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const ApiContext = createContext();

export const useApi = () => useContext(ApiContext);

export const ApiProvider = ({ children }) => {
  const [CategoryApi, setCategoryApi] = useState();
  const [ProductsApi, setProductsApi] = useState([]);
  const [SubCatProductsApi, setSubCatProductsApi] = useState([]);
  const [IsApi, setIsApi] = useState(false);
  const [SubCatProIsApi, setSubCatProIsApi] = useState(false);
  const [SubCatname, setSubCatname] = useState();
  const [Catname, setCatname] = useState();
  const [BreadCrumbs, setBreadCrumbs] = useState([]);
  const [LargeImage] = useState("http://localhost:8000/images/product_images/large");
  const [SmallImage] = useState("http://localhost:8000/images/product_images/small");
  const [AllProducts, setAllProducts] = useState([]);
  const [SubProducts, setSubProducts] = useState([]);
  const [Register, setRegister] = useState({});
  const [Login, setLogin] = useState({});
  const [ValidationErrors, setValidationErrors] = useState({});
  const [ConfirmPassError, setConfirmPassError] = useState();
  const [IsConfirmError, setIsConfirmError] = useState(false);
  const [LoginError, setLoginError] = useState();
  const [LoginValidationErrors, setLoginValidationErrors] = useState({})
  const [IsLoginError, setIsLoginError] = useState(false);


  useEffect(() => {
    console.log(ValidationErrors)
  }, [ValidationErrors])
  useEffect(() => {
    setTimeout(() => {
      setIsConfirmError(false)
    }, 5000);
  }, [IsConfirmError])

  useEffect(() => {
    setTimeout(() => {
      setIsLoginError(false)
    }, 5000);
  }, [IsLoginError])
  
  

  
  const registerSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: Register.name,
      email: Register.email,
      password: Register.password,
      confirm_password: Register.confirmPassword
    };
    axios.get("/sanctum/csrf-cookie").then((response) => {
      axios.post(`/api/registration`, data ).then((res) => {
        // console.log(res);
        if (res.data.status === 204) {
            setValidationErrors(res.data.errors);
        }
        if (res.data.status === 205) {
          console.log(res.data.error_message);
          setConfirmPassError(res.data.error_message);
          setIsConfirmError(true);
        }
      });
    });
  };

  const loginSubmit = (e) => {
    e.preventDefault();

    const data = {
      email: Login.email,
      password: Login.password,
    };
    axios.get("/sanctum/csrf-cookie").then((response) => {
      axios.post(`/api/login`, data ).then((res) => {
        console.log(res);
        if (res.data.status === 202) {
          console.log(res.data.error_message)
          setLoginError(res.data.error_message);
          setIsLoginError(true);
        }
        if (res.data.status === 204) {
          setLoginValidationErrors(res.data.errors);
        }
      });
    });

  }

  useEffect(() => {
    const getdata = async () => {
      await axios.get(`/api/`).then((res) => {
        // console.log(res.data);
        setCategoryApi(res.data.categories);
        setProductsApi(res.data.products);
      });
    };
    getdata();
  },[]);

  useEffect(() => {
    setAllProducts(ProductsApi.map((item) => {
      return {...item, quantity:0, discountedPrice: 0}
    }));
  }, [ProductsApi])

  useEffect(() => {
    setSubProducts(SubCatProductsApi.map((item) => {
      return {...item, quantity:0, discountedPrice: 0}
    }));
  }, [SubCatProductsApi])



  const getProducts = async (category, sub_category) =>{
    await axios.get(`/api/${category}/${sub_category}`).then((res) => {
          setSubCatProductsApi(res.data.products);
      });
  }

  useEffect(() => {
    if (CategoryApi && ProductsApi) {
        setIsApi(true)
    }
    if (SubProducts) {
      setSubCatProIsApi(true)
    }
  }, [CategoryApi, SubProducts])

  useEffect(() => {
    if (SubCatProductsApi) {
      setSubCatProIsApi(true)
    }
  }, [SubCatProductsApi])
  
  return (
    <ApiContext.Provider value={{ CategoryApi, setCategoryApi, IsApi, ProductsApi, getProducts, SubCatProductsApi, SubCatProIsApi, SubCatname, setSubCatname, Catname, setCatname, BreadCrumbs, setBreadCrumbs, LargeImage, AllProducts, setAllProducts, SmallImage, SubProducts, Register, setRegister, registerSubmit, Login, setLogin, loginSubmit, ValidationErrors, ConfirmPassError, IsConfirmError, LoginError, IsLoginError, LoginValidationErrors }}>
      {children}
    </ApiContext.Provider>
  );
};
