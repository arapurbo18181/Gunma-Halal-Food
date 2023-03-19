import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const ApiContext = createContext();

export const useApi = () => useContext(ApiContext);

export const ApiProvider = ({ children }) => {
  const [CategoryApi, setCategoryApi] = useState();
  const [ProductsApi, setProductsApi] = useState();
  const [SubCatProductsApi, setSubCatProductsApi] = useState();
  const [IsApi, setIsApi] = useState(false);
  const [SubCatProIsApi, setSubCatProIsApi] = useState(false);

  useEffect(() => {
    const getdata = async () => {
      await axios.get(`http://localhost:8000/api/`).then((res) => {
        // console.log(res.data);
        setCategoryApi(res.data.categories);
        setProductsApi(res.data.products);
      });
    };
    getdata();
  },[]);



  const getProducts = async (category, sub_category) =>{
    await axios.get(`http://localhost:8000/api/${category}/${sub_category}`).then((res) => {
          console.log(res.data.products);
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
    <ApiContext.Provider value={{ CategoryApi, setCategoryApi, IsApi, ProductsApi, getProducts, SubCatProductsApi, SubCatProIsApi }}>
      {children}
    </ApiContext.Provider>
  );
};
