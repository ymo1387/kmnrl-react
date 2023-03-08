import { axiosClient } from "axios-client";
import CartandSearchBanner from "components/cart/CartandSearchBanner";
import PaginatorGrid from "components/collections/PaginatorGrid";
import ProductGrid from "components/collections/ProductGrid";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function Search() {
	const [banners, setBanners] = useState(true);
	const [products, setProducts] = useState([]);
	const [links, setLinks] = useState({ next: null, prev: null });
	const [isMorePage, setIsMorePage] = useState();
	const [totalProducts, setTotalProducts] = useState(0);
	const [noData, setNoData] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const sinpRef = useRef();

	const getItems = (
		link = `v1/products?name[lk]=${sinpRef.current.value}`
	) => {
		if (!sinpRef.current.value) {
			setProducts([]);
			setNoData(false);
			setBanners(true);
			return;
		}
		setProducts([]);
		setIsLoading(true);
		axiosClient
			.get(link)
			.then((response) => {
				if (response.status === 204) {
					setNoData(true);
					setBanners(true);
				} else {
					setProducts(response.data.data);
					setLinks(response.data.links);
					setIsMorePage(response.data.meta.links.length);
					setTotalProducts(response.data.meta.total);
					setNoData(false);
					setBanners(false);
				}
				setIsLoading(false);
			})
			.catch();
	};

	return (
		<>
			<div className="p-4 cs-searchcon">
				<label htmlFor="sinp" style={{ cursor: "pointer" }}>
					Find what you need
				</label>
				<br />
				<form
					method="get"
					onSubmit={(e) => {
						e.preventDefault();
						getItems();
					}}
				>
					<input type="text" id="sinp" ref={sinpRef} autoFocus />
				</form>
				<div className="my-3">Suggestions</div>
				<ul className="cs-suggestlist">
					<li className="mx-3">
						<Link to="/collections/sunglasses">Sunglasses</Link>
					</li>
					<li className="mx-3">
						<Link to="/collections/watches">Watches</Link>
					</li>
					<li className="mx-3">
						<Link to="/collections/opticals">Opticals</Link>
					</li>
				</ul>
			</div>
			{noData && (
				<div className="p-4 fs-3">
					We found 0 results for “ {sinpRef.current.value} ”.
				</div>
			)}
			{banners && <CartandSearchBanner />}
			{isLoading && (
				<h4 className="loader">
					Loading Data <span className="loader__dot">.</span>
					<span className="loader__dot">.</span>
					<span className="loader__dot">.</span>
				</h4>
			)}
			{products.length > 0 && (
				<div className="row">
					<div
						className="cs-main-pagination col-lg-4 col-md-6 col-sm-6"
						style={{ justifyContent: "start" }}
					>
						<span>
							We found {totalProducts} results for “
							{sinpRef.current.value}”.
						</span>
					</div>
					{products.map((p) => (
						<ProductGrid key={p.id} p={p} />
					))}
					{isMorePage > 3 && (
						<PaginatorGrid
							next={links.next}
							prev={links.prev}
							paginate={getItems}
						/>
					)}
				</div>
			)}
		</>
	);
}
