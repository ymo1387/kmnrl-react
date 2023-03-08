import { Outlet } from "react-router-dom";
import { useState } from "react";
import NavBar from "components/nav/NavBar";
import Offcanvas from "components/nav/Offcanvas";
import Footer from "components/nav/Footer";

export default function MainLayout() {
	const [isOffcanvas, setIsOffcanvas] = useState(false);

	const OffcanvasToggle = () => setIsOffcanvas((oc) => !oc);
	const handleResize = () => {
		if (window.innerWidth >= 1024) {
			setIsOffcanvas(false);
		}
	};
	window.addEventListener("resize", handleResize);

	return (
		<>
			<NavBar changenav={OffcanvasToggle} isOffcanvas={isOffcanvas} />
			<Offcanvas isOffcanvas={isOffcanvas} />
			<main>
				<Outlet />
			</main>
			<Footer />
		</>
	);
}
