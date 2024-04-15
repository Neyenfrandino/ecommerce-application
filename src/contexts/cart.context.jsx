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

const removeCartItem = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        (cartItem)=> cartItem.id === cartItemToRemove.id)

    if(existingCartItem.quantity === 1){
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }

    return cartItems.map((cartItem) => cartItem.id === cartItemToRemove.id ? 
    {...cartItem, quantity: cartItem.quantity - 1}: cartItem
    )
}

const clearCartItem = (cartItems, cartItemToClear) => {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id)

}


export const CartContext = createContext({
    isCartOpen : false,
    setIsCartOpen : () => {},
    cartItems: [],
    AddItemToCart: () => {},
    clearItemFromCart: () => {},
    removeItemFromCart: () => {},
    cartTotal: 0,
    quantity: 0,
})


export const CartProvider = ({ children }) => {
    const [ isCartOpen , setIsCartOpen ]  = useState(false)
    const [cartItems, setCartItem ] = useState([]);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        const newTotalQuantity = cartItems.reduce((acc, { quantity }) => acc + quantity, 0);
        setTotalQuantity(newTotalQuantity);
    }, [cartItems]);

    useEffect(() => {
        const newCartTotal = cartItems.reduce((acc, cartItem) => acc + (cartItem.quantity * cartItem.price), 0);
        setCartTotal(newCartTotal)
    }, [cartItems]);

    const AddItemToCart = (productToAdd) => {
        setCartItem(addCartItem(cartItems, productToAdd))
    }

    const removeItemToCart = (cartItemToRemove) => {
        setCartItem(removeCartItem(cartItems, cartItemToRemove))
    }

    const clearItemFromCart = (cartItemToClear) => {
        setCartItem(clearCartItem(cartItems, cartItemToClear))
    }


  
    const value = { 
        isCartOpen, 
        setIsCartOpen, 
        AddItemToCart, 
        cartItems, 
        totalQuantity, 
        removeItemToCart, 
        clearItemFromCart,
        cartTotal,
    }

    return(
        <CartContext.Provider value={ value }>
            { children }
        </CartContext.Provider>
    )
}