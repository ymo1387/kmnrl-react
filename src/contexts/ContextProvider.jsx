import { Cloudinary } from "@cloudinary/url-gen";
import { createContext, useContext } from "react";
import CookiesProvider from "react-cookie/cjs/CookiesProvider";

const cloudinaryContext = createContext(
	new Cloudinary({
		cloud: {
			cloudName: "dcdy7lb9j",
		},
	})
);

const ContextProvider = ({ children }) => {
	return <CookiesProvider>{children}</CookiesProvider>;
};

const UseCloudinaryContext = () => useContext(cloudinaryContext);

export { ContextProvider, UseCloudinaryContext };
