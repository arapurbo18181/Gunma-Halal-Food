import { createContext, useContext, useEffect, useState } from "react";



const CartContext = createContext()

export const useCart = () => useContext(CartContext);

export const CartProvider = ({children}) =>{

    
    const [ToggleSidebar, setToggleSidebar] = useState(false);
    const [Cart, setCart] = useState([]);
    const [TotalAmount, setTotalAmount] = useState(0);

    const [ShowProduct, setShowProduct] = useState();

    useEffect(() => {
      const amount = Cart.reduce((accumulator, currItem)=>{
        return accumulator + currItem.amount;
      },0)
      setTotalAmount(amount)
    }, [Cart])
    

    

    const addToCart = (product) => {
        const newItem = {...product, amount : 1};
        const exist = Cart.find(item=>{
            return product.img === item.img;
        })

        if (exist) {
            const updated = Cart.map(item=>{
                if (item.img === exist.img) {
                    item.amount += 1;
                    return item
                }else{
                    return item
                }
            });
            setCart(updated);
        } else{
            setCart([...Cart, newItem]);
        }
    }

    const clearCart = () => {
        setCart([]);
    }

    const removeFromCart = (item) =>{
        const updated = Cart.filter(elem=>{
            return elem != item;
        });
        setCart(updated);
    }
    


    return(
        
    <CartContext.Provider value={{ToggleSidebar, setToggleSidebar,  ShowProduct, setShowProduct, addToCart, Cart, TotalAmount, clearCart, removeFromCart}}>
        {children}
    </CartContext.Provider>
    )

}