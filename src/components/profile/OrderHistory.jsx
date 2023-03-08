import { AxiosToken } from "axios-client";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";

export default function OrderHistory() {
	const [cookies] = useCookies();
	const [orders, setOrders] = useState([]);
	useEffect(() => {
		const controller = new AbortController();
		AxiosToken(cookies.AUTHTOKEN)
			.get("v1/orders", { signal: controller.signal })
			.then((response) => {
				setOrders(response.data);
			})
			.catch();
		return () => {
			controller.abort();
		};
	}, [cookies.AUTHTOKEN]);

	return (
		<>
			<div className="col-lg-8 col-12 py-4 px-0 cs-outline cs-orderlist-pc">
				<div className="px-5">
					<div className="h3 fw-light">Orders</div>
				</div>
				<hr className="my-4 mb-0" />

				{orders.length <= 0 ? (
					<div className="px-5 mt-4">
						You don't have any orders yet
					</div>
				) : (
					<div className="mx-auto pt-2 pb-4 px-4 border ">
						<div className="row border border-dark mx-auto text-center mb-3 cs-bg-babebe">
							<div className="col-4 cs-br-1sblack">
								Order Code
							</div>
							<div className="col-3 cs-br-1sblack">
								Total Price
							</div>
							<div className="col-2 cs-br-1sblack">Status</div>
							<div className="col-3">Order date</div>
						</div>
						{orders.map((o) => (
							<div
								className="row border border-dark mx-auto text-center mb-2"
								key={o.id}
							>
								<div className="col-4 py-3 cs-br-1sblack">
									<div className="cs-center-child">
										{o.order_code}
									</div>
								</div>
								<div className="col-3 py-3 cs-br-1sblack">
									<div className="cs-center-child">
										{o.total} $
									</div>
								</div>
								<div className="col-2 py-3 cs-br-1sblack">
									<div
										className={
											"cs-center-child cs-" +
											o.status.name
										}
									>
										{o.status.name}
									</div>
								</div>
								<div className="col-3 py-3">
									<div className="cs-center-child">
										{new Date(
											o.created_at
										).toLocaleDateString("en-GB")}
									</div>
								</div>
							</div>
						))}
					</div>
				)}
			</div>
			{/* mobile */}
			<div className="col-12 px-0 cs-outline cs-orderlist-mobile">
				{orders.length <= 0 ? (
					<div className="px-5 mt-4">
						You don't have any orders yet
					</div>
				) : (
					<div className="cs-mobile-item-container">
						<div className="h5 fw-light mb-0 ps-5 py-3">Orders</div>
						<div className="cs-mobile-dd-hide pb-0">
							{orders.map((o) => (
								<ul className="cs-hr-black" key={o.id}>
									<h6 className="cs-dd-header text-muted pt-3">
										Order Code
									</h6>
									<li className="mb-2">
										<span>{o.order_code}</span>
									</li>
									<h6 className="cs-dd-header text-muted">
										Total price
									</h6>
									<li className="mb-2">{o.total} $</li>
									<h6 className="cs-dd-header text-muted">
										Status
									</h6>
									<li className="mb-2">
										<span className={"cs-" + o.status.name}>
											{o.status.name}
										</span>
									</li>
									<h6 className="cs-dd-header text-muted">
										Order Date
									</h6>
									<li>
										{new Date(
											o.created_at
										).toLocaleDateString("en-GB")}
									</li>
								</ul>
							))}
						</div>
					</div>
				)}
			</div>
		</>
	);
}
