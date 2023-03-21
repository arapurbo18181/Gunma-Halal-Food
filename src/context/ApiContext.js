import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const ApiContext = createContext();

export const useApi = () => useContext(ApiContext);

export const ApiProvider = ({ children }) => {
  const [CategoryApi, setCategoryApi] = useState();
  const [ProductsApi, setProductsApi] = useState([]);
  const [SubCatProductsApi, setSubCatProductsApi] = useState();
  const [IsApi, setIsApi] = useState(false);
  const [SubCatProIsApi, setSubCatProIsApi] = useState(false);
  const [SubCatname, setSubCatname] = useState();
  const [Catname, setCatname] = useState();
  const [BreadCrumbs, setBreadCrumbs] = useState([]);
  const [LargeImage] = useState("http://localhost:8000/images/product_images/large");
  const [SmallImage] = useState("http://localhost:8000/images/product_images/small");
  const [AllProducts, setAllProducts] = useState([]);

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
      return {...item, quantity:0}
    }));
  }, [ProductsApi])



  const getProducts = async (category, sub_category) =>{
    await axios.get(`/api/${category}/${sub_category}`).then((res) => {
          setSubCatProductsApi(res.data.products);
      });
  }

  useEffect(() => {
    if (CategoryApi && ProductsApi) {
        setIsApi(true)
    }
    if (SubCatProductsApi) {
      setSubCatProIsApi(true)
    }
  }, [CategoryApi, SubCatProductsApi])

  useEffect(() => {
    if (SubCatProductsApi) {
      setSubCatProIsApi(true)
    }
  }, [SubCatProductsApi])
  
  return (
    <ApiContext.Provider value={{ CategoryApi, setCategoryApi, IsApi, ProductsApi, getProducts, SubCatProductsApi, SubCatProIsApi, SubCatname, setSubCatname, Catname, setCatname, BreadCrumbs, setBreadCrumbs, LargeImage, AllProducts, setAllProducts, SmallImage }}>
      {children}
    </ApiContext.Provider>
  );
};
