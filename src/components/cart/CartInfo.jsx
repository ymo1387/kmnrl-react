import { AxiosToken } from "axios-client";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "./CartContext";

const CartInfo = ({ loading }) => {
	const { items } = useCartContext();
	const [cookies] = useCookies();
	const navigate = useNavigate();

	// items prices and status
	let priceList = items.map((i) =>
		i.product.price.discount
			? i.product.price.discount * i.count
			: i.product.price.base * i.count
	);
	let totalPrice = priceList.reduce((s, c) => s + c).toFixed(2);
	let statusList = items.filter((i) => i.product.instock.instock < i.count);

	const order = () => {
		if (totalPrice <= 0.0) {
			return;
		}
		const link = `http://127.0.0.1:8000/api/v1/orders`;
		const axiosToken = AxiosToken(cookies.AUTHTOKEN);
		loading(true);
		axiosToken
			.post(link, { total: totalPrice })
			.then((response) => {
				loading(false);
				navigate("/order-history");
			})
			.catch((error) => {
				loading(false);
			});
	};

	return (
		<div className="col-lg-4 col-12 py-5 px-0 cs-outline">
			<div>
				<div className="d-flex justify-content-between ps-4 pe-5 pb-3">
					<span>Total</span>
					<span
						style={{
							fontSize: "1.125rem",
							lineHeight: 1.444,
						}}
					>
						${totalPrice}
					</span>
				</div>
				<div className="px-4 py-3">
					<p>Taxes & shipping are calculated at checkout</p>
				</div>
				<hr className="m-0" />
				<div className="float-end pt-4 pe-4">
					{statusList.length ? (
						<div className="text-danger ps-4 cs-fs-0875">
							Some products in your cart are out of stock
						</div>
					) : (
						<form
							action="{{route('user#order#add')}}"
							method="post"
						>
							<button
								type="button"
								className="bg-dark text-white rounded-pill float-start fs-5 fw-bold px-3 py-2 cs-hover-txt-yellow mb-4 me-3"
								onClick={order}
							>
								Check out
							</button>
						</form>
					)}
				</div>
			</div>
		</div>
	);
};

export default CartInfo;
