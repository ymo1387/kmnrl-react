import { AxiosToken } from "axios-client";
import { useCookies } from "react-cookie";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

export default function Profile() {
	const [cookies, removeCookie] = useCookies();
	const navigate = useNavigate();
	const logout = () => {
		AxiosToken(cookies.AUTHTOKEN)
			.post("logout")
			.then(() => {
				removeCookie("AUTHTOKEN");
				navigate("/home");
			})
			.catch((error) => {
				removeCookie("AUTHTOKEN");
				navigate("/home");
			});
	};

	return (
		<div className="row cs-fullheight">
			<div className="col-lg-4 col-12 py-5 px-0">
				<div className="px-5">
					<div className="h4">
						<NavLink
							to="/account"
							className="text-decoration-none text-dark cs-hover-op"
						>
							{({ isActive }) => (
								<span
									className={
										isActive ? "fw-bold" : "fw-light"
									}
								>
									Account
								</span>
							)}
						</NavLink>
					</div>
					<div className="h4 fw-light">
						<NavLink
							to="/order-history"
							className="text-decoration-none text-dark cs-hover-op"
						>
							{({ isActive }) => (
								<span
									className={
										isActive ? "fw-bold" : "fw-light"
									}
								>
									Order History
								</span>
							)}
						</NavLink>
					</div>
					<div className="h4 fw-light">
						<button
							type="button"
							className="border-0 cs-hover-op"
							onClick={logout}
						>
							Logout
						</button>
					</div>
				</div>
			</div>
			<Outlet />
		</div>
	);
}
