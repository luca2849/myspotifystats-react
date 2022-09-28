const axios = require("axios");
const config = require("config");

const refreshToken = async (refresh) => {
	if (!refresh) return null;
	try {
		const url = "https://accounts.spotify.com/api/token";
		const data = new URLSearchParams();
		data.append("refresh_token", refresh);
		data.append("grant_type", "refresh_token");
		data.append("client_id", config.get("SPOTIFY_CLIENT_ID"));
		data.append("client_secret", config.get("SPOTIFY_CLIENT_SECRET"));

		let options = {
			url,
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
			},
			data: data,
		};
		const response = await axios(options);
		return response.data.access_token;
	} catch (error) {
		console.error(error);
		return null;
	}
};

module.exports = { refreshToken };
