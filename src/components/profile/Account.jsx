import { AxiosToken } from "axios-client";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import AccountEdit from "./AccountEdit";
import AccountInfo from "./AccountInfo";

export default function Account() {
	const [cookies] = useCookies();
	const [user, setUser] = useState();

	useEffect(() => {
		const controller = new AbortController();
		AxiosToken(cookies.AUTHTOKEN)
			.get("account", { signal: controller.signal })
			.then((response) => {
				setUser(response.data);
			})
			.catch((error) => console.log(error));
		return () => {
			controller.abort();
		};
	}, [cookies.AUTHTOKEN]);
	return (
		<>
			{user && (
				<>
					<AccountInfo user={user} />
					<AccountEdit />
				</>
			)}
		</>
	);
}
