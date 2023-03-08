import { AxiosToken } from "axios-client";
import { useCookies } from "react-cookie";
import { useLocation, useNavigate } from "react-router-dom";
import { UseProductContext } from "./ProductDetailContext";

function OpticalBtn() {
	return (
		<button
			type="button"
			className="bg-white text-dark rounded-pill border border-dark float-end fs-5 px-3 py-1 cs-order-btn"
		>
			Find your nearest optician
		</button>
	);
}

function Nostock() {
	return <div className="h4">Out of stock</div>;
}

function Instock({ id, p }) {
	const [cookies] = useCookies();
	const navigate = useNavigate();
	const loc = useLocation();
	const click = () => {
		if (
			!cookies.AUTHTOKEN ||
			cookies.AUTHTOKEN === "undefined" ||
			cookies.AUTHTOKEN === undefined
		) {
			localStorage.removeItem("authpath");
			localStorage.setItem("authpath", loc.pathname);
			navigate("/login");
		}
		const axiosToken = AxiosToken(cookies.AUTHTOKEN);
		let link = `http://127.0.0.1:8000/api/v1/carts`;
		axiosToken
			.post(link, { id: id })
			.then((response) => {
				navigate("/cart");
			})
			.catch((error) => {
				if (
					error &&
					"response" in error &&
					error.response.status === 401
				) {
					navigate("/login");
				}
			});
	};
	return (
		<button
			type="button"
			className="bg-white text-dark rounded-pill border border-dark float-end fs-5 px-3 py-1 cs-order-btn"
			onClick={click}
		>
			Add to Cart{" "}
			{p.discount ? (
				<small>
					${p.discount}
					<del className="ms-2 cs-fs-0875">${p.base}</del> USD
				</small>
			) : (
				<>${p.base} USD</>
			)}
		</button>
	);
}

const ProductToCart = () => {
	const { product, type } = UseProductContext();
	return (
		<>
			{type === "opticals" ? (
				<OpticalBtn />
			) : product.instock === 0 ? (
				<Nostock />
			) : (
				<Instock id={product.id} p={product.price} />
			)}
		</>
	);
};

export default ProductToCart;
