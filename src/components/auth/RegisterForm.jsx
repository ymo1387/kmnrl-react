import { useRef, useState } from "react";
import { axiosClient } from "axios-client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
	const emailRef = useRef();
	const pwRef = useRef();
	const cpwRef = useRef();

	const [emailRule, setEmailRule] = useState();
	const [emailErr, setEmailErr] = useState();
	const [pwRule, setPwRule] = useState();
	const [pwErr, setPwErr] = useState();
	const [cpwRule, setCpwRule] = useState();
	const [cpwErr, setCpwErr] = useState();
	const [cbmark, setCbmark] = useState();

	const [cookies, setCookie] = useCookies();

	const navigate = useNavigate();
	const authpath = localStorage.getItem("authpath");

	const Register = (e) => {
		e.preventDefault();
		const registerdata = {
			email: emailRef.current.value.trim(),
			password: pwRef.current.value.trim(),
			password_confirmation: cpwRef.current.value.trim(),
		};

		axiosClient
			.post("/register", registerdata)
			.then((response) => {
				console.log(response);
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

					if ("password_confirmation" in errors) {
						setCpwErr("is-invalid");
						setCpwRule(
							<small className="text-danger">
								{errors.password_confirmation}
							</small>
						);
					} else {
						setCpwErr();
						setCpwRule();
					}
				}
			});
	};

	const Cbclick = () => {
		cbmark ? setCbmark() : setCbmark("cs-check-mark");
	};

	return (
		<form onSubmit={Register}>
			<h4 className="mb-3 fw-light">New customer</h4>
			<div className="my-3">
				<label htmlFor="email" className="form-label cs-fs-0875">
					Email *
				</label>
				<input
					type="email"
					className={"form-control " + emailErr}
					id="email"
					name="email"
					ref={emailRef}
				/>
				{emailRule}
			</div>
			<div className="my-3">
				<label
					htmlFor="pw"
					className="form-label cs-fs-0875"
					title="-Password length should be between 8 to 24
					-At least one letter and one number
					-Only alphanumeric characters"
				>
					Password * <FontAwesomeIcon icon={faCircleInfo} />
				</label>
				<input
					type="password"
					className={"form-control " + pwErr}
					id="pw"
					name="password"
					ref={pwRef}
				/>
				{pwRule}
			</div>
			<div className="my-3">
				<label htmlFor="pwc" className="form-label cs-fs-0875">
					Confirm Password *
				</label>
				<input
					type="password"
					className={"form-control " + cpwErr}
					name="password_confirmation"
					id="pwc"
					ref={cpwRef}
				/>
				{cpwRule}
			</div>

			<div className="my-3 mb-2 row">
				<div className="col-1">
					<div style={{ position: "relative" }}>
						<input
							type="checkbox"
							id="regis-cb"
							className="cs-tc-cb"
							name="terms"
							required
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
				<div className="form-label col">
					<p className="cs-checkbox-toggle mb-0 cs-fs-0875">
						<label
							htmlFor="regis-cb"
							className="d-inline"
							onClick={Cbclick}
						>
							By creating an account you automatically accept the
						</label>
						<a href="#" className="text-dark">
							{" "}
							terms &amp; conditions{" "}
						</a>
						<label htmlFor="regis-cb" onClick={Cbclick}>
							and
						</label>
						<a href="#" className="text-dark">
							{" "}
							protection of data policy{" "}
						</a>
						<label htmlFor="regis-cb" onClick={Cbclick}>
							from Komono.
						</label>
					</p>
				</div>
			</div>
			<button
				className="bg-dark text-white rounded-pill float-end fs-5 px-3 py-2 cs-hover-txt-yellow"
				type="submit"
			>
				Sign up
			</button>
		</form>
	);
};

export { RegisterForm };
