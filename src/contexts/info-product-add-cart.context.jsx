import { useState, createContext } from "react";

export const InfoProductAddCart = createContext({
    AddProduct: [],
    setAddProduct: () => {} // Función ficticia inicial, se reemplazará cuando se use el contexto
});

export const ProviderInfoProductAddCart = ({ children }) => {
    const [AddProduct, setAddProduct] = useState([]);

    
    return (
        <InfoProductAddCart.Provider value={{ AddProduct, setAddProduct }}>
            {children}
        </InfoProductAddCart.Provider>
    );
};
