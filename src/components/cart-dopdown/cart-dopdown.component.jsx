import { useContext } from 'react'
import  { useNavigate } from 'react-router-dom' 

import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'
import { CartContext } from '../../contexts/cart.context'


import './cart-dopdown.style.scss'

const CartDopdown = () => {
    const { cartItems } = useContext(CartContext)
    const navigate = useNavigate() 

    const goToCheckOutHandle = ()=> {
        navigate('/checkOut')
    }

    return (
        <div className='cart-dropdown-container' >
            <div className='cart-items'> 

                {cartItems.map(item => 
                    <CartItem key={item.id} cartItem={item}/>)}
                
            </div>
            <Button onClick = { goToCheckOutHandle } >GO TO CHECKOUT</Button>
        </div>
    );  
}

export default CartDopdown

