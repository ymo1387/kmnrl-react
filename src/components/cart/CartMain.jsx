import Cart from "./Cart";
import { CartProvider } from "./CartContext";

const CartMain = () => {
	return (
		<CartProvider>
			<Cart />
		</CartProvider>
	);
};

export default CartMain;
