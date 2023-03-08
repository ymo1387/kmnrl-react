import { AxiosToken } from "axios-client";
import { ClockLoader } from "components/Helper";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useCartContext } from "./CartContext";
import CartItem from "./CartItem";
import CartInfo from "./CartInfo";
import EmptyCart from "./EmptyCart";

const Cart = () => {
	const [cookies] = useCookies();
	const [isLoading, setIsLoading] = useState(true);
	const { items, dispatch } = useCartContext();

	useEffect(() => {
		let link = `http://127.0.0.1:8000/api/v1/carts`;
		const controller = new AbortController();

		AxiosToken(cookies.AUTHTOKEN)
			.get(link, {
				signal: controller.signal,
			})
			.then((response) => {
				dispatch({ type: "fullUpdate", data: response.data });
				setIsLoading(false);
			})
			.catch((error) => {
				console.log(error);
			});
		return () => {
			controller.abort();
		};
	}, [cookies.AUTHTOKEN, dispatch]);

	return (
		<>
			{isLoading ? (
				<ClockLoader />
			) : items.length === 0 ? (
				<EmptyCart />
			) : (
				<div className="row" style={{ minHeight: "100vh" }}>
					<div className="col-lg-8 col-12 px-0">
						{items.map((i) => (
							<CartItem key={i.cart_id} i={i} />
						))}
					</div>
					<CartInfo loading={setIsLoading} />
				</div>
			)}
		</>
	);
};

export default Cart;
