import { createContext, useContext, useState } from "react";



const CartContext = createContext()

export const useCart = () => useContext(CartContext);

export const CartProvider = ({children}) =>{

    const [ToggleSidebar, setToggleSidebar] = useState(false);

    return(
        
    <CartContext.Provider value={{ToggleSidebar, setToggleSidebar}}>
        {children}
    </CartContext.Provider>
    )

}