import kmn_authimg from "asset/images/komono_loginimg.avif";
import { Navigate, Outlet } from "react-router-dom";
import useCookies from "react-cookie/cjs/useCookies";

export default function AuthLayout() {
	const [cookies] = useCookies();

	if (
		cookies.AUTHTOKEN &&
		cookies.AUTHTOKEN !== "undefined" &&
		cookies.AUTHTOKEN !== undefined
	) {
		return <Navigate to="home" />;
	}

	return (
		<div className="row">
			<div className="col-lg-8 p-0">
				<img
					src={kmn_authimg}
					className="w-100 h-100 cs-object-fit_cover"
					alt=""
				/>
			</div>
			<Outlet />
		</div>
	);
}
