import { AdvancedImage } from "@cloudinary/react";
import { UseCloudinaryContext } from "contexts/ContextProvider";
import { UseProductContext } from "./ProductDetailContext";

const ProductImages = ({ children }) => {
	const { product } = UseProductContext();
	const cld = UseCloudinaryContext();
	const { main, sec, other } = product.images;

	return (
		<>
			<div className="row p-0 m-0">
				<AdvancedImage
					cldImg={cld.image(`kmnrl/products/${main.name}`)}
					className="col-lg-8 col-12 p-0"
					style={{ objectFit: "contain" }}
				/>
				<div className="col-4 p-0 d-lg-block d-none">
					{sec.map((i, k) => {
						return (
							<AdvancedImage
								cldImg={cld.image(`kmnrl/products/${i.name}`)}
								className="col-12 p-0"
								key={k}
							/>
						);
					})}
				</div>
			</div>
			{/* product content */}
			{children}
			{/* mobile images */}
			<div className=" p-0 d-lg-none d-block">
				{sec.map((i) => {
					return (
						<AdvancedImage
							cldImg={cld.image(`kmnrl/products/${i.name}`)}
							className="col-12 p-0"
							key={i.name}
						/>
					);
				})}
			</div>
			{/* other images */}
			{other.map((i) => {
				return (
					<AdvancedImage
						cldImg={cld.image(`kmnrl/products/${i.name}`)}
						className="col-12 p-0"
						key={i.name}
					/>
				);
			})}
		</>
	);
};

export default ProductImages;
