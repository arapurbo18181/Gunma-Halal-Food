import { createContext, useContext, useRef, useState } from "react";


const ProductContext = createContext();

export const useProduct = () => useContext(ProductContext);

export const ProductProvider = ({children}) => {
    const [ToggleProductTopbar, setToggleTopbar] = useState(0)
    const [MyRef, setMyRef] = useState(false);
    const [progress, setProgress] = useState(0);
    const [Register, setRegister] = useState({
        name: "",
        email: "",
        password: "",
        error_list: [],
      });

    const myRefForFlyToCart = useRef();

    const productTopbar = [
        {
            id: 0,
            tag: "Description"
        },
        {
            id: 1,
            tag: "Reviews"
        }
    ]

    return (
        <ProductContext.Provider value={{productTopbar, ToggleProductTopbar, setToggleTopbar,MyRef, setMyRef, myRefForFlyToCart, progress, setProgress, Register, setRegister}}>
            {children}
        </ProductContext.Provider>
    )
}