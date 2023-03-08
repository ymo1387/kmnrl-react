import { useParams } from "react-router-dom";
import CollectionBanner from "./CollectionBanner";
import CollectionGrid from "./CollectionGrid";

const Collections = () => {
	let { type } = useParams();
	return (
		<div className="cs-main-top row">
			<CollectionBanner type={type} />
			<CollectionGrid type={type} />
		</div>
	);
};

export default Collections;
