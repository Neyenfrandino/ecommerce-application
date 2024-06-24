import { createContext, useState, useEffect } from "react";

import { CategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

import SHOP_DATA from '../shop-data.js'


export const CategoriesContext = createContext ({
    categoriesMap : {},
})

export const CategoriesProvider = ( { children } ) =>{
    const [categoriesMap, setcategoriesMap] = useState( {} )

    // useEffect(()=>{
    //     addCollectionAndDocuments('categories', SHOP_DATA)
    // },[])

    useEffect(()=>{
        const getCatoriesMap = async ()=>{
            const categoryMap = await CategoriesAndDocuments()

            setcategoriesMap(categoryMap)
        }

        getCatoriesMap()
    },[])

    const value = { categoriesMap }

    return(
        <CategoriesContext.Provider value={ value }>
            { children } 
        </CategoriesContext.Provider>
    )
}



 