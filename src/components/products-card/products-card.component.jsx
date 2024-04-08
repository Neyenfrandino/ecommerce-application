import { useContext } from 'react';
import Button from '../button/button.component'
import './products-card.style.scss'

import { InfoProductAddCart } from '../../contexts/info-product-add-cart.context';


const ProductCard = ( { product } ) => {
    const { name, price, imageUrl, id } = product;
    const {AddProduct ,setAddProduct } = useContext(InfoProductAddCart);

    const handleOnClick = (event, name, id) => {

        event.preventDefault();

        const infoProductOnclick = [...AddProduct, {
            name: name,
            id: id,
            price: price,
            imageUrl: imageUrl,
            count : ''
        }];
        

        setAddProduct(infoProductOnclick)
        
 
    }
    
    return(
        <div className='product-card-container'>
            <img src= { imageUrl } alt= { `${name}` } />
            <div className='footer'>
                <span className='name'>
                    {name}
                </span>
                <span className='price'>
                    {price}
                </span>
            </div>
            <Button buttonType='inverted' onClick={ (event) => {
                    handleOnClick(event, name, id)
                }}>
                Add to Cart
            </Button>
        </div>
    )
}

export default ProductCard