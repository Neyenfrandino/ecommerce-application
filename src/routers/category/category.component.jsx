import { useContext, useEffect,  useState    } from 'react'
import { useParams } from 'react-router-dom'

import ProductCard from '../../components/products-card/products-card.component'
import { CategoriesContext } from '../../contexts/categories.context'
import { CategoryTitle, CategoryContainer } from './category.style.jsx'

const Category = () => {
    const { category } = useParams()
    const { categoriesMap  } = useContext(CategoriesContext)
    const [ products, setProducts ] = useState(categoriesMap[category])

    useEffect(()=>{
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])

    return(
        <>
         <CategoryTitle>{category.toLocaleUpperCase()}</CategoryTitle>
            
            <CategoryContainer>
                
                {
                    products &&  
                        products.map((product)=> <ProductCard key={product.id} product={product}/>)
                }
            </CategoryContainer> 

        </>
    
    )
}

export default Category