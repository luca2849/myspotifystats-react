import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "./AppContainer.module.scss";

import checkToken from "../../util/checkToken";
import { setHeaders } from "../../util/setHeaders";

import { connect } from "react-redux";
import { loadUser, refreshToken } from "../../actions/auth";

import SideNav from "../Navigation/SideNav";

interface AppContainerProps {
	children: React.ReactNode;
	refreshToken: Function;
	loadUser: Function;
}

// Check token is in headers (prevents de-auth on refresh)

const AppContainer = ({
	children,
	refreshToken,
	loadUser,
}: AppContainerProps) => {
	const [tokenSafe, setTokenSafe] = useState(false);
	useEffect(() => {
		if (typeof window !== undefined) {
			const { access_token, created_at } = localStorage;
			if (access_token && created_at)
				setHeaders(access_token, created_at);
		}
		// Call to check and replace
		// token if necessary
		checkToken(refreshToken, setTokenSafe);
		// ensure user is loaded into state
		if (localStorage.getItem("access_token")) loadUser();
	}, [refreshToken]);
	const router = useRouter();
	return (
		<>
			{tokenSafe && (
				<>
					{router.pathname !== "/" && <SideNav />}
					<div
						className={
							router.pathname !== "/"
								? styles.container
								: styles.homeContainer
						}
					>
						{children}
					</div>
				</>
			)}
		</>
	);
};

export default connect(null, { refreshToken, loadUser })(AppContainer);
