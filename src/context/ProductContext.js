import { createContext, useContext, useState } from "react";


const ProductContext = createContext();

export const useProduct = () => useContext(ProductContext);

export const ProductProvider = ({children}) => {
    const [ToggleProductTopbar, setToggleTopbar] = useState(0)

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
        <ProductContext.Provider value={{productTopbar, ToggleProductTopbar, setToggleTopbar}}>
            {children}
        </ProductContext.Provider>
    )
}