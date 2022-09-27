import React from "react";
// page for functionality of authenticating with spotify via the API

const Login = () => {
	const scope = "user-read-private user-read-email";
	const params = new URLSearchParams({
		response_type: "code",
		client_id: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
		scope,
		redirect_uri: "http://localhost:3000/login/callback",
		state: "131231u38123",
	}).toString();

	const redirect_url = `https://accounts.spotify.com/authorize?${params}`;

	window.location.replace(redirect_url);

	return <p>Redirecting...</p>;
};

export default Login;
