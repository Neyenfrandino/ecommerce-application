import { useContext } from 'react'
import { ReactComponent as ShoppingIcon } from '../../assests/shopping-bag.svg'
import { CartContext } from '../../contexts/cart.context'
import './cart-icon.style.scss'

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, totalQuantity } = useContext(CartContext);
    
    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    return (
        <div className='cart-icon-container' onClick={toggleCart}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{ totalQuantity }</span>
        </div>
    );
    
}

export default CartIcon
