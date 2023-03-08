import { LoginLink } from "./AuthLink";
import { RegisterForm } from "./RegisterForm";

const RegisterPage = () => {
	return (
		<div className="col-lg-4 p-0 cs-outline">
			<div className="py-5 pt-4 px-5">
				<RegisterForm />
			</div>
			<hr className="w-100 my-4" />
			<LoginLink />
			<hr className="w-100 my-4" />
			<div className="px-5"></div>
		</div>
	);
};

export default RegisterPage;
