import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd ) => {
    const existingCartItem = cartItems.find(
        (cartItem)=> cartItem.id === productToAdd.id)

        if(existingCartItem){
            return cartItems.map((cartItem) => cartItem.id === productToAdd.id ? 
            {...cartItem, quantity: cartItem.quantity + 1}: cartItem
            )
        }

    return [...cartItems, {...productToAdd, quantity: 1}]
}

export const CartContext = createContext({
    isCartOpen : false,
    setIsCartOpen : () => {},
    cartItems: [],
    AddItemToCart: () => {},
    quantity : 0
})


export const CartProvider = ({ children }) => {
    const [ isCartOpen , setIsCartOpen ]  = useState(false)
    const [cartItems, setCartItem ] = useState([]);
    const [totalQuantity, setTotalQuantity] = useState(0);

    useEffect(() => {
        const newTotalQuantity = cartItems.reduce((acc, { quantity }) => acc + quantity, 0);
        setTotalQuantity(newTotalQuantity);
    }, [cartItems]);

    const AddItemToCart = (productToAdd) => {
        setCartItem(addCartItem(cartItems, productToAdd))
    }

    const value = { isCartOpen, setIsCartOpen, AddItemToCart, cartItems, totalQuantity }

    return(
        <CartContext.Provider value={ value }>
            { children }
        </CartContext.Provider>
    )
}