import { axiosClient } from "axios-client";
import { useRef, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
	const emailRef = useRef();
	const pwRef = useRef();

	const [emailRule, setEmailRule] = useState();
	const [emailErr, setEmailErr] = useState();
	const [pwRule, setPwRule] = useState();
	const [pwErr, setPwErr] = useState();

	const [cookies, setCookie] = useCookies();

	const navigate = useNavigate();
	const authpath = localStorage.getItem("authpath");

	const [cbmark, setCbmark] = useState();

	const Login = (e) => {
		e.preventDefault();
		const logindata = {
			email: emailRef.current.value.trim(),
			password: pwRef.current.value.trim(),
			remember: cbmark ? true : false,
		};

		axiosClient
			.post("/login", logindata)
			.then((response) => {
				let cookiedata;
				response.data.remember
					? (cookiedata = {
							secure: true,
					  })
					: (cookiedata = {
							secure: true,
							maxAge: 3600 * 4,
					  });
				setCookie("AUTHTOKEN", response.data.token, cookiedata);
			})
			.then(() => {
				if (authpath) {
					navigate(authpath);
					localStorage.removeItem("authpath");
				} else {
					navigate("/home");
				}
			})
			.catch((error) => {
				if (error.response.status === 422) {
					const errors = error.response.data.errors;
					if ("email" in errors) {
						setEmailErr("is-invalid");
						setEmailRule(
							<small className="text-danger">
								{errors.email}
							</small>
						);
					} else {
						setEmailErr();
						setEmailRule();
					}

					if ("password" in errors) {
						setPwErr("is-invalid");
						setPwRule(
							<small className="text-danger">
								{errors.password}
							</small>
						);
					} else {
						setPwErr();
						setPwRule();
					}
				}
			});
	};

	const Cbclick = () => {
		cbmark ? setCbmark() : setCbmark("cs-check-mark");
	};

	return (
		<form onSubmit={Login}>
			<h4 className="mb-2 fw-light">Existing customer</h4>
			<span className="my-3 cs-fs-0875">
				Fill in your details to log into your Komono account.
			</span>
			<div className="my-3">
				<label htmlFor="email" className="form-label cs-fs-0875">
					Email *
				</label>
				<input
					type="email"
					className={"form-control " + emailErr}
					id="email"
					ref={emailRef}
				/>
				{emailRule}
			</div>
			<div className="my-3">
				<label htmlFor="pw" className="form-label cs-fs-0875">
					Password *
				</label>
				<input
					type="password"
					className={"form-control " + pwErr}
					id="pw"
					ref={pwRef}
				/>
				{pwRule}
			</div>
			<div className="my-3 mb-2 row align-items-center">
				<div className="col-1 pe-0">
					<div
						style={{
							position: "relative",
							width: "20px",
							height: "20px",
						}}
					>
						<input
							type="checkbox"
							id="regis-cb"
							className="cs-tc-cb"
						/>
						<label
							htmlFor="regis-cb"
							className="cs-cblabel-con"
							onClick={Cbclick}
						>
							<div className="cs-check-box">
								<div className={cbmark}></div>
							</div>
						</label>
					</div>
				</div>
				<div className="form-label col mb-0">
					<p className="cs-checkbox-toggle mb-0">
						<label
							htmlFor="regis-cb"
							className="d-inline cs-fs-0875"
							onClick={Cbclick}
						>
							Remember me
						</label>
					</p>
				</div>
			</div>

			<button
				className="bg-dark text-white rounded-pill float-end fs-6 px-3 py-2 cs-hover-txt-yellow"
				type="submit"
			>
				Log in to your account
			</button>
		</form>
	);
};

export { LoginForm };
