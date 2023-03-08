import { Link } from "react-router-dom";

export default function HomePage() {
	return (
		<div className="cs-home-con p-lg-5 p-3">
			<ul>
				<li>
					<Link to="/search">Search product</Link>
				</li>
				<li>
					<Link to="/collections/sunglasses">Sunglasses</Link>
				</li>
				<li>
					<Link to="/collections/watches">Watches</Link>
				</li>
				<li>
					<Link to="/collections/opticals">Opticals</Link>
				</li>
				<li>
					<Link to="/account">Account</Link>
				</li>
				<li>
					<Link to="/cart">Cart</Link>
				</li>
			</ul>
		</div>
	);
}
