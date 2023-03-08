import { Link } from "react-router-dom";
import CartandSearchBanner from "./CartandSearchBanner";

const EmptyCart = () => {
	return (
		<>
			<div className="p-4">
				<div className="h4 fw-light">Your cart is empty</div>
				<li>
					<Link
						to="/home"
						className="h4 fw-light text-dark text-decoration-none cs-hover-op"
					>
						Continue Shopping<span className="loader__dot">.</span>
						<span className="loader__dot">.</span>
						<span className="loader__dot">.</span>
					</Link>
				</li>
			</div>
			<CartandSearchBanner />
		</>
	);
};

export default EmptyCart;
