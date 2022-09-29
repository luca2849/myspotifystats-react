const config = require("config");
const express = require("express");
const router = express.Router();
const { default: axios } = require("axios");
const { refreshToken } = require("../util/refreshToken");

const client_id = config.get("SPOTIFY_CLIENT_ID");
const client_secret = config.get("SPOTIFY_CLIENT_SECRET");

router.get("/token", async (req, res) => {
	const { code, state } = req.query;

	// if (state === null || state !== state_key) {
	// 	return res.status(500).json({ error: "State Mismatch" });
	// }

	if (!code) return res.status(400).json({ error: "Missing code parameter" });
	const data = new URLSearchParams();
	data.append("grant_type", "authorization_code");
	data.append("redirect_uri", "http://localhost:3000/login/callback");
	data.append("code", code);

	let options = {
		url: "https://accounts.spotify.com/api/token",
		method: "POST",
		headers: {
			Authorization:
				"Basic " +
				Buffer.from(client_id + ":" + client_secret).toString("base64"),
			"Content-Type": "application/x-www-form-urlencoded",
		},
		data: data,
	};

	try {
		const response = await axios(options);
		const created_at = Math.floor(new Date().getTime() / 1000);
		const { access_token, refresh_token } = response.data;
		return res.status(200).json({
			access_token,
			refresh_token,
			created_at,
		});
	} catch (error) {
		console.error(error);
		return res.status(500).json({ error: "Internal Server Error" });
	}
});

router.get("/token/refresh", async (req, res) => {
	const { refresh } = req.query;
	if (!refresh)
		return res.status(400).json({ error: "No refresh token provided" });
	try {
		const access_token = await refreshToken(refresh);
		const created_at = Math.floor(new Date().getTime() / 1000);
		return res.status(200).json({ access_token, created_at });
	} catch (error) {
		console.error(error);
		return res.status(500).json({ error: "Internal Server Error" });
	}
});

module.exports = router;
