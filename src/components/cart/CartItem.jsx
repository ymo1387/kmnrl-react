import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { UseCloudinaryContext } from "contexts/ContextProvider";
import { AdvancedImage } from "@cloudinary/react";
import { useCartContext } from "./CartContext";
import { useCookies } from "react-cookie";
import { AxiosToken } from "axios-client";

const CartItem = ({ i }) => {
	const cld = UseCloudinaryContext();
	const [cookies] = useCookies();
	const { dispatch } = useCartContext();

	const { product, count } = i;
	const base = product.price.base;
	const discount = product.price.discount;
	const instock = product.instock.instock;

	const link = `http://127.0.0.1:8000/api/v1/carts/${i.cart_id}`;
	const axiosToken = AxiosToken(cookies.AUTHTOKEN);

	const deleteItem = () => {
		if (count > 1) {
			return;
		}
		dispatch({ type: "delete", id: i.cart_id });
		axiosToken
			.delete(link)
			.then((response) => {})
			.catch((error) => {});
	};

	// item count update api
	const updateItem = (type) => {
		let updateCount;
		switch (type) {
			case "plus":
				updateCount = count + 1;
				break;
			case "minus":
				updateCount = count - 1;
				break;
			default:
				return;
		}
		if (updateCount > 99) {
			return;
		}
		dispatch({ type: type, id: i.cart_id });
		axiosToken
			.patch(link, {
				count: updateCount,
				instock: instock,
				price: product.price,
			})
			.then((response) => {
				if (response.status === 200) {
					dispatch({ type: "oneUpdate", item: response.data });
				}
			})
			.catch((error) => {});
	};

	return (
		<>
			{count > 0 ? (
				<>
					<div className="row m-0 px-0 py-lg-0 py-md-0 py-sm-0 py-2 bg-white">
						<AdvancedImage
							cldImg={cld.image(
								`kmnrl/products/${product.main_image.name}`
							)}
							className="col-lg-6 col-4 p-0"
						/>
						<div className="col-lg-2 col-3 p-0 d-flex align-items-center">
							<div
								className="input-group quantity"
								style={{ width: "100px" }}
							>
								<button
									className="btn btn-sm cs-btn-xs btn-dark"
									style={{ zIndex: 0 }}
									type="button"
									onClick={() => {
										count > 1
											? updateItem("minus")
											: deleteItem();
									}}
								>
									<FontAwesomeIcon icon={faMinus} />
								</button>
								<input
									type="text"
									className="form-control form-control-sm border-0 text-center"
									value={count}
									min="1"
									max="99"
									disabled
								/>
								<button
									className="btn btn-sm cs-btn-xs btn-dark"
									style={{ zIndex: 0 }}
									type="button"
									onClick={() => {
										updateItem("plus");
									}}
								>
									<FontAwesomeIcon icon={faPlus} />
								</button>
							</div>
						</div>
						<div className="col-lg-4 col-5 d-flex align-items-center justify-content-start">
							<div>
								<div className="h4 fw-light cs-sm-h6">
									{product.name}
								</div>
								<div>
									$
									{(discount
										? discount * count
										: base * count
									).toFixed(2)}
								</div>
								{count > instock && (
									<div className="text-danger cs-fs-075">
										We only have {instock} of this item in
										stock
									</div>
								)}
							</div>
						</div>
					</div>
					<hr className="m-0" />
				</>
			) : (
				<></>
			)}
		</>
	);
};

export default CartItem;
