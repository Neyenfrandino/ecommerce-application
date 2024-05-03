import { Link } from 'react-router-dom'
import ProductCard from '../products-card/products-card.component'
import './category-preview.style.scss'

const CategoryPreview = ({  title, products }) => {


    return(
        <div className='category-preview-container'>
            <h2>
                <Link className='title' to={`/shop/${title}`}>{title.toUpperCase()}</Link>
                {console.log(title.hats)}
            </h2>
            <div className='preview'>
                {
                products
                    .filter((_, idx)=> idx < 4)
                    .map((product) =>
                    <ProductCard key={product.id} product={product}/> )
                }
            </div>
        </div>
    )
}


export default CategoryPreview