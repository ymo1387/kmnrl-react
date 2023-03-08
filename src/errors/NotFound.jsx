import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<div className="row" style={{ minHeight: "80vh" }}>
			<div className="col-lg-4 col-12 p-0 ps-5 pt-5">
				<span style={{ fontSize: "1.5rem", lineHeight: "1.333334" }}>
					Not found
				</span>
				<br />
				<span className="cs-fs-0875">
					The page you were looking for does not exist
				</span>
			</div>
			<div
				className="col-lg-4 col-12 p-0 ps-5 pt-5"
				style={{ outline: "1px solid #babebe" }}
			>
				<span style={{ fontSize: "1.5rem", lineHeight: "1.333334" }}>
					Continue to
				</span>
				<br />
				<Link to="/home">
					<button
						type="button"
						className="border-0 cs-hover-op"
						style={{ fontSize: "1.5rem", lineHeight: "1.333334" }}
					>
						<li>Home</li>
					</button>
				</Link>
			</div>
			<div className="col-lg-4 col-12"></div>
		</div>
	);
};

export default NotFound;
