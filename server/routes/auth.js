const config = require("config");
const express = require("express");
const router = express.Router();
const { default: axios } = require("axios");

const client_id = config.get("SPOTIFY_CLIENT_ID");
const client_secret = config.get("SPOTIFY_CLIENT_SECRET");

router.get("/token", async (req, res) => {
	const { code, state } = req.query;

	// if (state === null || state !== state_key) {
	// 	return res.status(500).json({ error: "State Mismatch" });
	// }

	const data = new URLSearchParams();
	data.append("grant_type", "client_credentials");
	data.append("redirect_uri", "http://localhost:3000/");
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
		const token = response.data.access_token;
		return res.status(200).json({ token });
	} catch (error) {
		return res.status(500).json({ error: "Internal Server Error" });
	}
});

module.exports = router;
