import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faMagnifyingGlass,
	faBars,
	faXmark,
	faUser,
	faBagShopping,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const NavBar = ({ changenav, isOffcanvas }) => {
	const navs = {
		nav1: "hide",
		nav2: "hide",
		nav3: "hide",
		nav4: "hide",
	};
	const [dropNavClass, setDropNavClass] = useState(navs);

	const EnterNav = (e) => {
		setDropNavClass((n) => ({
			...n,
			[e.target.id]: "",
		}));
	};
	const LeaveNav = (e) => {
		setDropNavClass((n) => ({
			...n,
			[e.target.id]: "hide",
		}));
	};

	return (
		<nav className="cs-main-navbar">
			<div className="cs-topnav">
				<span>Express yourself with our brand new items.</span>
			</div>
			<nav className="cs-botnav px-lg-4">
				<div className="cs-nav-container ps-md-3 ps-sm-3 ps-3">
					<Link className="cs-nav-brand mb-0 h1" to="/home">
						KOMONO
					</Link>
					<ul className="cs-nav-items cs-pc me-auto mb-0">
						<li className="cs-dd">
							<Link
								className="cs-dd-toggle"
								to="/collections/sunglasses"
								id="nav1"
								onMouseEnter={EnterNav}
								onMouseLeave={LeaveNav}
							>
								Sunglasses
							</Link>
							<ul
								className={
									"cs-dd-container cs-dd-container-left cs-dd-item-list " +
									dropNavClass.nav1
								}
								id="nav1"
								onMouseEnter={EnterNav}
								onMouseLeave={LeaveNav}
							>
								<li>
									<h6 className="cs-dd-header">
										COLLECTIONS
									</h6>
								</li>
								<li>
									<Link to="/collections/sunglasses">
										All
									</Link>
								</li>
								<li>
									<Link to="/collections/new-sunglasses">
										New
									</Link>
								</li>
								<li>
									<Link to="/collections/best-sellers-sunglasses">
										Best sellers
									</Link>
								</li>
							</ul>
						</li>
						<li className="cs-dd">
							<Link
								className="cs-dd-toggle"
								to="/collections/watches"
								id="nav2"
								onMouseEnter={EnterNav}
								onMouseLeave={LeaveNav}
							>
								Watches
							</Link>
							<ul
								className={
									"cs-dd-container cs-dd-container-left cs-dd-item-list " +
									dropNavClass.nav2
								}
								id="nav2"
								onMouseEnter={EnterNav}
								onMouseLeave={LeaveNav}
							>
								<li>
									<h6 className="cs-dd-header">
										COLLECTIONS
									</h6>
								</li>
								<li>
									<Link to="/collections/watches">All</Link>
								</li>
								<li>
									<Link to="/collections/new-watches">
										New
									</Link>
								</li>
								<li>
									<Link to="/collections/best-sellers-watches">
										Best sellers
									</Link>
								</li>
								<li>
									<Link to="/collections/straps">Straps</Link>
								</li>
							</ul>
						</li>
						<li className="cs-dd">
							<Link
								to="/collections/opticals"
								className="cs-fs-0875 text-dark"
								style={{
									padding: "1rem 0.5rem",
									textDecoration: "none",
								}}
							>
								Opticals
							</Link>
						</li>
					</ul>
				</div>

				<div className="cs-nav-container pe-4">
					<ul className="cs-nav-items ms-auto mb-0">
						<li className="cs-dd cs-pc">
							<a
								className="cs-dd-toggle"
								href="/"
								id="nav3"
								onMouseEnter={EnterNav}
								onMouseLeave={LeaveNav}
							>
								English / US $
							</a>
							<ul
								className={
									"cs-dd-container cs-dd-container-right cs-dd-item-list2 " +
									dropNavClass.nav3
								}
								id="nav3"
								style={{ minWidth: "230px" }}
								onMouseEnter={EnterNav}
								onMouseLeave={LeaveNav}
							>
								<li>
									<h6 className="cs-dd-header">LANGUAGES</h6>{" "}
								</li>
								<li>
									<a href="#">English €</a>
								</li>
								<li>
									<a href="#">English / US $</a>
								</li>
								<li>
									<a href="#">French €</a>
								</li>
								<li>
									<a href="#">Spanish / CL $</a>
								</li>
							</ul>
						</li>
						<li className="cs-dd cs-pc">
							<a
								className="cs-dd-toggle"
								href="/"
								id="nav4"
								onMouseEnter={EnterNav}
								onMouseLeave={LeaveNav}
							>
								Assistance
							</a>
							<div
								className={
									"cs-dd-container cs-dd-container-right " +
									dropNavClass.nav4
								}
								id="nav4"
								onMouseEnter={EnterNav}
								onMouseLeave={LeaveNav}
							>
								<div className="cs-title1">
									Free Shipping over 50EUR
								</div>
								<hr />
								<ul
									className="cs-dd-item-list2"
									style={{ paddingLeft: 0 }}
								>
									<li>
										<h6 className="cs-dd-header">
											CUSTOMER SERVICE
										</h6>
									</li>
									<li>
										<a href="#">Products</a>
									</li>
									<li>
										<a href="#">Ordering & Payment</a>
									</li>
									<li>
										<a href="#">Shipping</a>
									</li>
									<li>
										<a href="#">Warranty & Returns</a>
									</li>
									<li>
										<a href="#">Sustainability</a>
									</li>
									<li>
										<a href="#">Store Locator</a>
									</li>
								</ul>
							</div>
						</li>
						<li className="px-md-2 px-sm-2 px-1">
							<Link className="cs-nav-icons" to="/search">
								<FontAwesomeIcon icon={faMagnifyingGlass} />
							</Link>
						</li>
						<li className="cs-pc">
							<Link className="cs-nav-icons" to="/account">
								My Account
							</Link>
						</li>
						<li className="cs-mobile px-md-2 px-sm-2 px-1">
							<Link className="cs-nav-icons" to="/account">
								<FontAwesomeIcon icon={faUser} />
							</Link>
						</li>
						<li className="px-md-2 px-sm-2 px-1">
							<Link className="cs-nav-icons" to="cart">
								<FontAwesomeIcon
									icon={faBagShopping}
									className="cs-cart-icon"
								/>
							</Link>
						</li>
						<li className="cs-mobile px-md-2 px-sm-2 px-1">
							<button
								className="cs-mobile-dd-toggler"
								type="button"
								onClick={changenav}
							>
								<FontAwesomeIcon
									icon={isOffcanvas ? faXmark : faBars}
								/>
							</button>
						</li>
					</ul>
				</div>
			</nav>
		</nav>
	);
};

export default NavBar;
