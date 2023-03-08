import { forwardRef } from "react";
import MobileDD from "./MobileDD";
import Slide from "@mui/material/Slide";
import Dialog from "@mui/material/Dialog";

const Transition = forwardRef(function Transition(props, ref) {
	return <Slide direction="down" ref={ref} {...props} />;
});

const Offcanvas = ({ isOffcanvas }) => {
	return (
		<Dialog
			fullScreen
			open={isOffcanvas}
			TransitionComponent={Transition}
			sx={{ zIndex: 0 }}
		>
			<div className="cs-offcanvas">
				<div
					style={{
						borderBottom: "1px solid #c5c4c5",
					}}
				>
					<select
						className="w-100 border-0"
						style={{
							outline: 0,
							padding: "0.7rem 10px",
							background: "transparent",
						}}
					>
						<option value="">English / US $</option>
						<option value="">English / €</option>
						<option value="">French €</option>
						<option value="">Spanish / CL $</option>
					</select>
				</div>
				<MobileDD />
				<div className="cs-mobile-other">
					<div className="my-2">
						<a href="/">Our Sustainability vision</a>
					</div>
					<div className="my-2">
						<a href="/">Find your perfect shape</a>
					</div>
				</div>
				<hr />
				<div className="cs-mobile-other">
					<div className="my-2">
						<a href="/">Customer Service</a>
					</div>
					<div className="my-2">
						<a href="/">Stores</a>
					</div>
				</div>
			</div>
		</Dialog>
	);
};

export default Offcanvas;
