import { createContext, useContext, useReducer } from "react";

const CartContext = createContext({
	items: [],
	dispatch: () => {},
});

export function CartProvider({ children }) {
	const [items, dispatch] = useReducer(cartReducer, initialItems);
	return (
		<CartContext.Provider value={{ items, dispatch }}>
			{children}
		</CartContext.Provider>
	);
}

export function useCartContext() {
	return useContext(CartContext);
}

function cartReducer(items, action) {
	switch (action.type) {
		case "fullUpdate": {
			return action.data;
		}
		case "oneUpdate": {
			return items.map((i) => {
				if (i.cart_id === action.id) {
					return {
						...i,
						instock: action.item.instock,
						price: action.item.price,
					};
				} else {
					return i;
				}
			});
		}
		case "plus": {
			return items.map((i) => {
				if (i.cart_id === action.id && i.count < 99) {
					return { ...i, count: i.count + 1 };
				} else {
					return i;
				}
			});
		}
		case "minus": {
			return items.map((i) => {
				if (i.cart_id === action.id && i.count > 1) {
					return { ...i, count: i.count - 1 };
				} else {
					return i;
				}
			});
		}
		case "delete": {
			return items.filter((i) => i.cart_id !== action.id);
		}
		default: {
			throw Error("Unknown action: " + action.type);
		}
	}
}

const initialItems = [];
