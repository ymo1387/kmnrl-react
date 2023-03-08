import axios from "axios";
import { axiosClient } from "axios-client";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductDetailContext } from "./ProductDetailContext";
import ProductContent from "./ProductContent";
import ProductImages from "./ProductImages";
import ProductToCart from "./ProductToCart";

const ProductDetail = () => {
	const { type, slug } = useParams();
	const [product, setProduct] = useState();
	const navigate = useNavigate();

	useEffect(() => {
		const source = axios.CancelToken.source();
		let link = `v1/products/${slug}`;
		axiosClient
			.get(link, { cancelToken: source.token })
			.then((response) => {
				setProduct(response.data);
			})
			.catch((error) => {
				if (
					error &&
					"response" in error &&
					error.response.status === 404
				) {
					navigate("/notfound");
				}
			});
		return () => {
			source.cancel();
		};
	}, [slug, navigate]);

	return (
		<ProductDetailContext product={product} type={type}>
			<div className="w-100 bg-white">
				{product && (
					<>
						<div className="row py-3 pt-4 d-lg-block d-none">
							<div className="col-4 offset-8 p-0 d-flex justify-content-center align-items-center">
								<ProductToCart />
							</div>
						</div>
						<ProductImages>
							<ProductContent />
						</ProductImages>
					</>
				)}
			</div>
		</ProductDetailContext>
	);
};

export default ProductDetail;
