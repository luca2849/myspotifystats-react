import React, { useEffect } from "react";
// page for functionality of authenticating with spotify via the API

const Login = () => {
	// setup spotify authentication url
	useEffect(() => {
		const scope =
			"user-read-private user-read-email user-top-read user-read-playback-state user-read-recently-played";
		const params = new URLSearchParams({
			response_type: "code",
			client_id: `${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID}`,
			scope,
			redirect_uri: `${window.location.origin}/login/callback`,
		}).toString();

		const redirect_url = `https://accounts.spotify.com/authorize?${params}`;

		// redirect to spotify for user authentication
		window.location.replace(redirect_url);
	}, []);

	return <p>Redirecting to Spotify...</p>;
};

export default Login;
