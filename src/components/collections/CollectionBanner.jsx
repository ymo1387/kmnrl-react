import watches_bannerimg from "asset/banners/watches_bannerimg.webp";
import sunglasses_bannerimg from "asset/banners/sunglasses_bannerimg.webp";

const BannerText = ({ type }) => {
	const watches_text =
		"With more than 10 years of expertise, we offer a wide variety of watches.All of our timepieces are created with a lot of love and dedication by our design team.";
	const watches_new_text =
		"Discover our new watch collection. Elevate your look with KOMONO accessories for men and women.";
	const watches_bestseller_text =
		"Discover our best selling watches. Elevate your look with KOMONO watches for men and women.";
	const sunglasses_text =
		"All of our KOMONO sunglasses have a UV400 protection and are created with the outmost care and dedication by our design team.";
	const sunglasses_new_text =
		"Discover our new sunglasses collection. Elevate your look with KOMONO accessories for men and women.";
	const sunglasses_bestseller_text =
		"Discover our best selling sunglasses. Elevate your look with KOMONO sunglasses for men and women.";
	const opticals_text =
		"Discover our optical collection for men and women. Find a store near you that offers your prescription glasses.";
	const straps_text =
		"Discover our strap collection. Elevate your look with straps made from different materials.";
	const bannerTextMap = new Map([
		["watches", watches_text],
		["new-watches", watches_new_text],
		["best-sellers-watches", watches_bestseller_text],
		["sunglasses", sunglasses_text],
		["new-sunglasses", sunglasses_new_text],
		["best-sellers-sunglasses", sunglasses_bestseller_text],
		["opticals", opticals_text],
		["straps", straps_text],
	]);
	return bannerTextMap.has(type) ? bannerTextMap.get(type) : "";
};

const BannerImg = ({ type }) => {
	const bannerImgMap = new Map([
		["watches", watches_bannerimg],
		["sunglasses", sunglasses_bannerimg],
	]);
	return <img src={bannerImgMap.get(type)} alt="" />;
};

const CollectionBanner = ({ type }) => {
	return (
		<>
			<div className="h4 m-0 p-lg-5 p-4 col-lg-4 cs-bg-yellow">
				<p className="m-0 fw-light" style={{ lineHeight: "normal" }}>
					<BannerText type={type} />
				</p>
			</div>
			{type === "watches" || type === "sunglasses" ? (
				<div className="cs-main-topimg col-lg-8 cs-bg-yellow">
					<BannerImg type={type} />
				</div>
			) : (
				""
			)}
		</>
	);
};

export default CollectionBanner;
