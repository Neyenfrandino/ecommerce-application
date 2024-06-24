import { useContext } from 'react'
// import { ReactComponent as ShoppingIcon } from '../../assests/shopping-bag.svg'
import { CartContext } from '../../contexts/cart.context'
import { ShoppingIcon, CartIconContainer, ItemCount } from './cart-icon.style'

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, totalQuantity } = useContext(CartContext);
    
    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    return (
        <CartIconContainer onClick={toggleCart}>
            <ShoppingIcon/>
            <ItemCount >{ totalQuantity }</ItemCount>
        </CartIconContainer>
    );
    
}

export default CartIcon
