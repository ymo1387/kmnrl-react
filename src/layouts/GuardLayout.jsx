import { useCookies } from "react-cookie";
import { Navigate, Outlet } from "react-router-dom";

export default function GuardLayout() {
	const [cookies] = useCookies();

	if (
		!cookies.AUTHTOKEN ||
		cookies.AUTHTOKEN === undefined ||
		cookies.AUTHTOKEN === "undefined"
	) {
		return <Navigate to="/login" />;
	}

	return <Outlet />;
}
