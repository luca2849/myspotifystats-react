import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Callback from "./Components/Authentication/Callback";
import Login from "./Components/Authentication/Login";
import Logout from "./Components/Authentication/Logout";
import Home from "./Pages/Home/Home";
import Profile from "./Pages/Profile/Profile";
import AppContainer from "./Components/AppContainer/AppContainer";
import checkToken from "./util/checkToken";
import { setHeaders } from "./util/setHeaders";
import { loadUser, refreshToken } from "./actions/auth";
import SideNav from "./Components/Navigation/SideNav";

// Check token is in headers (prevents de-auth on refresh)
const { access_token, created_at } = localStorage;
if (access_token && created_at) setHeaders(access_token, created_at);

function App({ refreshToken }) {
	// State for tracking if the current access_token is valid
	const [tokenSafe, setTokenSafe] = useState(false);
	useEffect(() => {
		// Call to check and replace
		// token if necessary
		checkToken(refreshToken, setTokenSafe);
		// ensure user is loaded into state
		if (localStorage.getItem("access_token")) store.dispatch(loadUser());
	}, [refreshToken]);
	return (
		<div className="App">
			{tokenSafe && (
				<Router>
					<SideNav />
					<AppContainer>
						<Routes>
							<Route exact path="/" element={<Home />} />
							<Route exact path="/login" element={<Login />} />
							<Route
								exact
								path="/profile"
								element={<Profile />}
							/>
							<Route exact path="/logout" element={<Logout />} />
							<Route
								exact
								path="/login/callback"
								element={<Callback />}
							/>
						</Routes>
					</AppContainer>
				</Router>
			)}
		</div>
	);
}

export default connect(null, { refreshToken })(App);
