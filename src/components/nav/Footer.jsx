import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import kmnfooterlogo from "asset/images/komono_logo.png";
import {
	faFacebookSquare,
	faInstagram,
	faPinterestP,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
	return (
		<footer className="px-lg-4">
			<div className="cs-footleft">
				<Link to="/home">
					<img
						className="cs-komono-logo"
						src={kmnfooterlogo}
						alt=""
					/>
				</Link>
				<div className="cs-pc">
					<ul>
						<li>©2023</li>
						<li className="mx-3">
							<a href="/">Privacy Policy</a>
						</li>
						<li className="mx-3">
							<a href="/">Terms & Conditions</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="cs-footright">
				<div className="cs-pc">
					<ul>
						<li className="mx-3">
							<a href="/">Studio</a>
						</li>
						<li className="mx-3">
							<a href="/">Stores</a>
						</li>
						<li className="mx-3">
							<a href="/">About</a>
						</li>
						<li className="mx-3">
							<a href="/">Contact</a>
						</li>
					</ul>
				</div>
				<div className="ms-4">
					<ul>
						<li className="mx-2">
							<a href="/">
								<FontAwesomeIcon
									icon={faFacebookSquare}
									className="fs-6"
								/>
							</a>
						</li>
						<li className="mx-2">
							<a href="/">
								<FontAwesomeIcon
									icon={faInstagram}
									className="fs-6"
								/>
							</a>
						</li>
						<li className="mx-2">
							<a href="/">
								<FontAwesomeIcon
									icon={faPinterestP}
									className="fs-6"
								/>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
}
