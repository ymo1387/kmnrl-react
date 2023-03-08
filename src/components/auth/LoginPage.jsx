import { RegisterLink } from "./AuthLink";
import { LoginForm } from "./LoginForm";

const LoginPage = () => {
	return (
		<div className="col-lg-4 p-0 cs-outline">
			<div className="py-5 pt-4 px-5">
				<LoginForm />
			</div>
			<hr className="w-100 my-4" />
			<RegisterLink />
			<hr className="w-100 my-4" />
			<div className="px-5"></div>
		</div>
	);
};

export default LoginPage;
