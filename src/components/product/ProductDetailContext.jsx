import { createContext, useContext } from "react";

const ProductContext = createContext();

const ProductDetailContext = ({ children, product, type }) => {
	return (
		<ProductContext.Provider value={{ product, type }}>
			{children}
		</ProductContext.Provider>
	);
};

const UseProductContext = () => useContext(ProductContext);

export { ProductDetailContext, UseProductContext };
