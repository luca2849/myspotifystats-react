import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Callback from "./Components/Login/Callback";
import Login from "./Components/Login/Login";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import checkToken from "./util/checkToken";
import { setHeaders } from "./util/setHeaders";
import { refreshToken } from "./actions/auth";

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
	}, [refreshToken]);
	return (
		<div className="App">
			<h1>MySpotifyStats</h1>
			{tokenSafe && (
				<Router>
					<Routes>
						<Route exact path="/" element={<Home />} />
						<Route exact path="/login" element={<Login />} />
						<Route exact path="/profile" element={<Profile />} />

						<Route
							exact
							path="/login/callback"
							element={<Callback />}
						/>
					</Routes>
				</Router>
			)}
		</div>
	);
}

export default connect(null, { refreshToken })(App);
