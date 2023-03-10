import { AdvancedImage } from "@cloudinary/react";
import { UseCloudinaryContext } from "contexts/ContextProvider";
import { Link } from "react-router-dom";

const Tag = ({ text }) => {
	return (
		<span
			className="d-inline-block px-1 my-1 cs-fs-065 cs-w-fit"
			style={{ backgroundColor: "#d6d6d6" }}
		>
			{text}
		</span>
	);
};

const ProductGrid = ({ p }) => {
	const cld = UseCloudinaryContext();

	let productImgClassName;
	switch (p.type) {
		case "sunglasses":
			productImgClassName = "simg simg-sg";
			break;
		case "opticals":
			productImgClassName = "simg simg-sg";
			break;
		default:
			productImgClassName = "simg simg-w";
			break;
	}

	return (
		<Link
			to={`/products/${p.slug}`}
			className="cs-main-products col-lg-4 col-md-6 col-sm-6"
		>
			<AdvancedImage
				cldImg={cld.image(`kmnrl/products/${p.image.name}`)}
				className={productImgClassName}
			/>
			{/* <img
				src="https://firebasestorage.googleapis.com/v0/b/kmnrl-afe6e.appspot.com/o/kate-revolt_black__front.webp?alt=media&token=086b5223-0395-4a5c-9af1-6ec7c0f5c5cb"
				alt=""
				className={productImgClassName}
			/> */}
			<div className="stext">
				<span>{p.name}</span>
				{p.type !== "opticals" && (
					<span>
						{p.price.discount ? (
							<>
								${p.price.discount}
								<del className="ms-2">${p.price.base}</del>
							</>
						) : (
							<>${p.price.base}</>
						)}
					</span>
				)}
				{p.instock === 0 && p.type !== "opticals" && (
					<Tag text="Out of stock" />
				)}
				{p.tags.map((t, i) => (
					<Tag key={i} text={t.name} />
				))}
				{p.variantCount > 1 && <span>{p.variantCount} colors</span>}
			</div>
		</Link>
	);
};

export default ProductGrid;
