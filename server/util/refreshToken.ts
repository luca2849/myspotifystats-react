import axios from "axios";
import config from "config";

/*
 * Function for refreshing access token
 *
 * @param  {String}   refresh  Refresh token provided by Spotify on login
 *
 * @return {String}            New access token
 */
const refreshToken = async (refresh: string): Promise<string | null> => {
	if (!refresh) return null;
	try {
		const url = "https://accounts.spotify.com/api/token";
		const headers = {
			"Content-Type": "application/x-www-form-urlencoded",
		};
		const data = new URLSearchParams({
			client_id: config.get("SPOTIFY_CLIENT_ID"),
			client_secret: config.get("SPOTIFY_CLIENT_SECRET"),
			grant_type: "refresh_token",
			refresh_token: refresh,
		});
		const response = await axios({
			url,
			method: "POST",
			headers: headers,
			data: data,
		});
		return response.data.access_token;
	} catch (error) {
		console.error(error);
		return null;
	}
};

export default refreshToken;
