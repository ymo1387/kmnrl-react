import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";

const DDItem = ({ name }) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="cs-mobile-item-container">
			<button
				className="cs-mobile-item-toggler"
				onClick={() => setIsOpen(!isOpen)}
			>
				<span className="h5 fw-light mb-0 text-start">
					<span>{name.charAt(0).toUpperCase() + name.slice(1)}</span>
				</span>
				<span>
					<div>
						<FontAwesomeIcon
							icon={isOpen ? faCaretUp : faCaretDown}
						/>
					</div>
					<div>
						<i className="fa-solid fa-caret-down cs-arrow"></i>
					</div>
				</span>
			</button>
			{isOpen && (
				<div className="cs-mobile-dd-hide">
					<ul>
						<li>
							<h6 className="cs-dd-header">COLLECTIONS</h6>
						</li>
						<li>
							<Link to={`/collections/new-${name}`}>New</Link>
						</li>
						<li>
							<Link to={`/collections/best-sellers-${name}`}>
								Best sellers
							</Link>
						</li>
						<li className="cs-show-all">
							<Link to={`/collections/${name}`}>Show all</Link>
						</li>
					</ul>
				</div>
			)}
		</div>
	);
};

const MobileDD = () => {
	return (
		<>
			{["sunglasses", "watches"].map((i) => (
				<DDItem key={i} name={i} />
			))}
			{["straps", "opticals"].map((i) => (
				<Fragment key={i}>
					<div className="cs-mobile-item-container">
						<button
							type="button"
							className="cs-mobile-item-toggler"
						>
							<span className="h5 fw-light mb-0 text-start">
								<Link
									to={`/collections/${i}`}
									className="cs-mobile-underline"
								>
									{i.charAt(0).toUpperCase() + i.slice(1)}
								</Link>
							</span>
							<span>
								<div>
									<i
										className="fa-solid fa-caret-up cs-arrow"
										style={{ display: "none" }}
									></i>
								</div>
								<div>
									<i className="fa-solid fa-caret-down cs-arrow"></i>
								</div>
							</span>
						</button>
					</div>
				</Fragment>
			))}
		</>
	);
};

export default MobileDD;
