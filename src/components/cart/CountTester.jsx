import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

const Item = ({ id }) => {
	return (
		<>
			<div className="row m-0 px-0 py-lg-0 py-md-0 py-sm-0 py-2 bg-white">
				<img
					className="col-lg-6 col-4 p-0"
					src="https://firebasestorage.googleapis.com/v0/b/kmnrl-afe6e.appspot.com/o/kate-revolt_black__front.webp?alt=media&token=086b5223-0395-4a5c-9af1-6ec7c0f5c5cb"
					alt=""
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
						>
							<FontAwesomeIcon icon={faMinus} />
						</button>
						<input
							type="text"
							className="form-control form-control-sm border-0 text-center"
							value="1"
							min="1"
							max="99"
							disabled
						/>
						<button
							className="btn btn-sm cs-btn-xs btn-dark"
							style={{ zIndex: 0 }}
							type="button"
						>
							<FontAwesomeIcon icon={faPlus} />
						</button>
					</div>
				</div>
				<div className="col-lg-4 col-5 d-flex align-items-center justify-content-start">
					<div>
						<div className="h4 fw-light cs-sm-h6">Product {id}</div>
						<div>$0.00</div>
					</div>
				</div>
			</div>
			<hr className="m-0" />
		</>
	);
};

const CountTester = () => {
	// const { counts } = useCountTest();
	// console.log(counts);

	return (
		<>
			{[...Array(100).keys()].map((k) => {
				return <Item key={k} id={k} />;
			})}
		</>
	);
};

export default CountTester;
