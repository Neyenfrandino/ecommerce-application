import { useContext } from 'react'

import { CartContext } from '../../contexts/cart.context';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import {CheckoutContainer, CheckoutHeader, HeaderBlock, SpanTotal} from './checkOut.style.jsx'

const CheckOut = () => {

    const { cartItems, cartTotal } = useContext(CartContext);
    

    return(
        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock>
                    <span>
                        Product
                    </span>
                </HeaderBlock>
            
                <HeaderBlock>
                    <span>
                        Description
                    </span>
                </HeaderBlock>
            
                <HeaderBlock>
                    <span>
                        Quantity
                    </span>
                </HeaderBlock>
            
                <HeaderBlock>
                    <span>
                        Price
                    </span>
                </HeaderBlock>
            
                <HeaderBlock>
                    <span>
                        Remove
                    </span>
                </HeaderBlock>
            
            </CheckoutHeader>
            {cartItems.map((cartItem) => (
            
                <CheckoutItem key={cartItem.id} cartItem={ cartItem }/>
                
            ))}
            <SpanTotal>Total: ${ cartTotal }</SpanTotal>
        
        </CheckoutContainer>

    )
}

export default CheckOut