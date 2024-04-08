import { useContext } from 'react'

import Button from '../button/button.component'
import { InfoProductAddCart } from '../../contexts/info-product-add-cart.context'

import './cart-dopdown.style.scss'

const CartDopdown = () => {
    const { AddProduct } = useContext(InfoProductAddCart)
    return (
        <div className='cart-dropdown-container' >
            <div className='cart-items'> 
                {AddProduct.reduce((acc, {name, imageUrl, price, id, count}) => {
                    const existingProductIndex = acc.findIndex(item => item.id === id);
                    if (existingProductIndex !== -1) {
                        acc[existingProductIndex].count += 1;
                    } else {
                        acc.push({ id, name, imageUrl, price, count: 1 });
                    }
                    return acc;
                }, []).map(({name, imageUrl, price, id, count}) => (
                    <div key={id} className='product-item'>
                        <img src={imageUrl} alt={name} />
                        <div>
                            <span>{name}</span>
                            <span className='price'>{count} x ${price}</span>
                           
                        </div>
                    </div>
                ))}
            </div>
            <Button>GO TO CHECKOUT</Button>
        </div>
    );  
}

export default CartDopdown

