import { useState, useEffect } from "react";
import PaginatorGrid from "./PaginatorGrid";
import ProductGrid from "./ProductGrid";
import { axiosClient } from "axios-client";

const CollectionGrid = ({ type }) => {
	const [products, setProducts] = useState([]);
	const [links, setLinks] = useState({ next: null, prev: null });
	const [isMorePage, setIsMorePage] = useState();
	const [isLoading, setIsLoading] = useState(false);
	const [noData, setNoData] = useState(false);

	let parameters;
	const parameterMap = new Map([
		["watches", "type[eq]=watches"],
		["sunglasses", "type[eq]=sunglasses"],
		["straps", "type[eq]=straps"],
		["opticals", "type[eq]=opticals"],
	]);
	parameters = parameterMap.has(type) && parameterMap.get(type);

	useEffect(() => {
		const controller = new AbortController();
		let link = `v1/products?${parameters}`;
		setProducts([]);
		setIsLoading(true);
		axiosClient
			.get(link, { signal: controller.signal })
			.then((response) => {
				if (response.status === 200) {
					setProducts(response.data.data);
					setLinks(response.data.links);
					setIsMorePage(response.data.meta.links.length);
					setNoData(false);
				} else if (response.status === 204) {
					setNoData(true);
				}
				setIsLoading(false);
			})
			.catch();
		return () => {
			controller.abort();
		};
	}, [parameters]);

	const Paginate = (link) => {
		setProducts([]);
		setIsLoading(true);
		axiosClient
			.get(link)
			.then((response) => {
				if (response.status === 200) {
					setProducts(response.data.data);
					setLinks(response.data.links);
					setIsMorePage(response.data.meta.links.length);
					setNoData(false);
				} else if (response.status === 204) {
					setNoData(true);
				}
				setIsLoading(false);
			})
			.catch();
	};

	return (
		<>
			{noData && <h4>No Data</h4>}
			{isLoading && (
				<h4 className="loader">
					Loading Data <span className="loader__dot">.</span>
					<span className="loader__dot">.</span>
					<span className="loader__dot">.</span>
				</h4>
			)}
			{products.length > 0 && (
				<>
					{products.map((p) => (
						<ProductGrid key={p.id} p={p} />
					))}
					{isMorePage > 3 && (
						<PaginatorGrid
							next={links.next}
							prev={links.prev}
							paginate={Paginate}
						/>
					)}
				</>
			)}
		</>
	);
};

export default CollectionGrid;
