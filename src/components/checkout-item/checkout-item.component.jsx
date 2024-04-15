import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import './checkout-item.style.scss'

const CheckoutItem = ({ cartItem }) => {
    const { id, imageUrl, name, price, quantity } = cartItem;
    const { clearItemFromCart, AddItemToCart, removeItemToCart } = useContext(CartContext)

    const handleRemoveItem = () => {
        clearItemFromCart(cartItem); // Pasamos el id del item a eliminar
    };

    const addItemHandle = () => {
        AddItemToCart(cartItem); // Pasamos el id del item a eliminar
    };
    
    const removetemHandle = () => {
        removeItemToCart(cartItem); // Pasamos el id del item a eliminar
    };

    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`} />
            </div>

            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={ removetemHandle  }>
                    &#10094;
                </div>

                <span className='value'> {quantity} </span>

                <div className='arrow' onClick={ addItemHandle}>
                    &#10095;
                </div>
            </span>

                
            <span className='price'>{price}</span>

            <div className='remove-button' onClick={ handleRemoveItem }>
                &#10005;
            </div>
        </div>
    );
};


export default CheckoutItem