import { useContext } from 'react'

import Button from '../button/button.component'
// import { InfoProductAddCart } from '../../contexts/info-product-add-cart.context'
import CartItem from '../cart-item/cart-item.component'
import { CartContext } from '../../contexts/cart.context'


import './cart-dopdown.style.scss'

const CartDopdown = () => {
    // const { AddProduct } = useContext(InfoProductAddCart)
    const { cartItems } = useContext(CartContext)

    return (
        <div className='cart-dropdown-container' >
            <div className='cart-items'> 

                {cartItems.map(item => 
                    <CartItem key={item.id} cartItem={item}/>)}
                
            </div>
            <Button>GO TO CHECKOUT</Button>
        </div>
    );  
}

export default CartDopdown

