import { FormControl, InputLabel, OutlinedInput } from "@mui/material";

export default function AccountEdit() {
	const submit = (e) => {
		e.preventDefault();
		const { name, email, address, phone } = e.currentTarget.elements;
		console.log(name.value);
	};

	return (
		<div className="col-lg-4 col-12 py-4 px-3 pe-4">
			<form onSubmit={submit}>
				<div className="h4 fw-light mb-4">Edit Account</div>
				<div className="m-3 row">
					<FormControl>
						<InputLabel htmlFor="component-outlined">
							Name
						</InputLabel>
						<OutlinedInput
							id="component-outlined"
							defaultValue=""
							label="Name"
							type="text"
							name="name"
						/>
					</FormControl>
				</div>
				<div className="m-3 row">
					<FormControl>
						<InputLabel htmlFor="component-outlined">
							Email
						</InputLabel>
						<OutlinedInput
							id="component-outlined"
							defaultValue=""
							label="Email"
							type="email"
							name="email"
						/>
					</FormControl>
				</div>
				<div className="m-3 row">
					<FormControl>
						<InputLabel htmlFor="component-outlined">
							Address
						</InputLabel>
						<OutlinedInput
							id="component-outlined"
							defaultValue=""
							label="Address"
							type="text"
							name="address"
							multiline={true}
						/>
					</FormControl>
				</div>
				<div className="m-3 row">
					{/* <label htmlFor="phone" className="col-3">
						Phone
					</label>
					<input
						type="tel"
						pattern="[+]{1}[0-9]{10,15}"
						className="col px-1 fs-5"
						id="phone"
						placeholder="+95XXXXXXX"
					/> */}
					<FormControl>
						<InputLabel htmlFor="component-outlined">
							Phone
						</InputLabel>
						<OutlinedInput
							id="component-outlined"
							defaultValue=""
							label="Phone"
							type="tel"
							name="phone"
						/>
					</FormControl>
				</div>
				<button
					type="submit"
					className="bg-dark text-white rounded-pill float-start fs-6 fw-bold px-2 py-1 cs-hover-txt-yellow my-4 ms-3"
				>
					Update
				</button>
			</form>
		</div>
	);
}
