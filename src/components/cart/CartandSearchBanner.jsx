import cart_watches_bannerImg from "asset/banners/cart_watches.webp";
import cart_sunglasses_bannerImg from "asset/banners/cart_sunglasses.webp";
import cart_opticals_bannerImg from "asset/banners/cart_opticals.webp";
import { Link } from "react-router-dom";

const Banner = ({ title, text, to }) => {
	return (
		<div style={{ position: "relative" }}>
			<div style={{ position: "absolute", top: 0 }} className="p-4">
				<div className="h4 fw-light">{title}</div>
				<li>
					<Link
						className="h4 fw-light text-dark text-decoration-none cs-hover-op"
						to={`/collections/${to}`}
					>
						{text}
						<span className="loader__dot">.</span>
						<span className="loader__dot">.</span>
						<span className="loader__dot">.</span>
					</Link>
				</li>
			</div>
		</div>
	);
};

const CartandSearchBanner = () => {
	return (
		<div className="row m-0 p-0">
			<div className="col-lg-4 col-12 p-0">
				<Banner title="Watches" text="Shop Now" to="watches" />
				<img src={cart_watches_bannerImg} alt="" />
			</div>
			<div className="col-lg-4 col-12 p-0">
				<Banner title="Opticals" text="Discover Now" to="opticals" />
				<img src={cart_sunglasses_bannerImg} alt="" />
			</div>
			<div className="col-lg-4 col-12 p-0">
				<Banner title="Sunglasses" text="Shop Now" to="sunglasses" />
				<img src={cart_opticals_bannerImg} alt="" />
			</div>
		</div>
	);
};

export default CartandSearchBanner;
