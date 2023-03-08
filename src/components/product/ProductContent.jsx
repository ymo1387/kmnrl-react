import { AdvancedImage } from "@cloudinary/react";
import { Link } from "react-router-dom";
import { useImmer } from "use-immer";
import { UseCloudinaryContext } from "contexts/ContextProvider";
import { UseProductContext } from "./ProductDetailContext";
import ProductToCart from "./ProductToCart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretRight } from "@fortawesome/free-solid-svg-icons";

const ProductContent = () => {
	const { product, type } = UseProductContext();
	const p = product;
	const cld = UseCloudinaryContext();
	const [isOpen, setIsOpen] = useImmer({
		spec: false,
		desc: false,
		ship: false,
	});

	return (
		<div className="row p-0 m-0">
			<div className="col-lg-4 offset-lg-4 p-0">
				<div className="mb-4 px-3">
					<span className="h4">{p.name}</span>
					<br />
					{p.variants.length > 0 && (
						<>
							<small className="text-muted">
								Available in {p.variants.length + 1} colors
							</small>
							<div className="row m-0 p-0 mt-2">
								{p.variants.map((i) => {
									return (
										<Link
											to={`/collections/${type}/products/${i.slug}`}
											className="col-3 p-0"
											key={i.slug}
										>
											<AdvancedImage
												cldImg={cld.image(
													`kmnrl/products/${i.image.name}`
												)}
												className="w-100"
											/>
										</Link>
									);
								})}
							</div>
						</>
					)}
				</div>

				{p.specifications.length > 0 && (
					<>
						<hr className="cs-hr-black m-0" />
						<div>
							<button
								type="button"
								className="d-flex justify-content-between align-items-center w-100 border-0 px-3 py-3 bg-white"
								onClick={() =>
									setIsOpen((draft) => {
										draft.spec = !isOpen.spec;
									})
								}
							>
								<span className="h5 fw-light mb-0 text-start">
									Specifications
								</span>
								<span>
									<div>
										<FontAwesomeIcon
											icon={
												isOpen.spec
													? faCaretDown
													: faCaretRight
											}
										/>
									</div>
								</span>
							</button>
							{isOpen.spec && (
								<div className="px-3 pb-3">
									<ul
										className="cs-fs-0875"
										style={{ lineHeight: 1.714 }}
									>
										{p.specifications.map((i, k) => {
											return <li key={k}>{i}</li>;
										})}
									</ul>
								</div>
							)}
						</div>
					</>
				)}

				{p.description && (
					<>
						<hr className="cs-hr-black m-0" />
						<div>
							<button
								type="button"
								className="d-flex justify-content-between align-items-center w-100 border-0 px-3 py-3 bg-white"
								onClick={() =>
									setIsOpen((draft) => {
										draft.desc = !isOpen.desc;
									})
								}
							>
								<span className="h5 fw-light mb-0 text-start">
									Description
								</span>
								<span>
									<div>
										<FontAwesomeIcon
											icon={
												isOpen.desc
													? faCaretDown
													: faCaretRight
											}
										/>
									</div>
								</span>
							</button>
							{isOpen.desc && (
								<div className="px-3 pb-3">
									<p
										className="cs-fs-0875"
										style={{ lineHeight: 1.714 }}
									>
										{p.description}
									</p>
								</div>
							)}
						</div>
					</>
				)}

				<hr className="cs-hr-black m-0" />
				<div>
					<button
						type="button"
						className="d-flex justify-content-between align-items-center w-100 border-0 px-3 py-3 bg-white"
						onClick={() =>
							setIsOpen((draft) => {
								draft.ship = !isOpen.ship;
							})
						}
					>
						<span className="h5 fw-light mb-0 text-start">
							Shipping & Returns
						</span>
						<span>
							<div>
								<FontAwesomeIcon
									icon={
										isOpen.ship ? faCaretDown : faCaretRight
									}
								/>
							</div>
						</span>
					</button>
					{isOpen.ship && (
						<div className="px-3 pb-3">
							<div
								className="cs-fs-0875"
								style={{ lineHeight: 1.714 }}
							>
								<div className="mb-2">Delivery time:</div>
								<ul className="ps-3">
									<li>West-Europe: 1 - 3 days</li>
									<li>Rest of Europe: 3 - 5 days</li>
									<li>Other countries: 3 - 6 days</li>
								</ul>
								<div className="my-3 mb-4">
									<span>
										Free shipping on order {">"} €50.
									</span>
									<br />
									<span>
										Returns within 30 days after purchase.
									</span>
								</div>
								<p>
									You can learn more about our{" "}
									<a href="/" className="text-dark">
										Shipping & Return policy
									</a>
									on the service pages
								</p>
							</div>
						</div>
					)}
				</div>
				<hr className="cs-hr-black m-0 mb-3" />
			</div>

			<div className="col-lg-4 p-0 my-3 d-flex justify-content-center align-items-center">
				<ProductToCart />
			</div>
		</div>
	);
};

export default ProductContent;
