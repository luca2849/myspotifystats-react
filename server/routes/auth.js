const FormData = require("form-data");
const config = require("config");
const request = require("request");
const express = require("express");
const router = express.Router();
const randomStringGenerator = require("../util/randomStringGenerator");
const { default: axios } = require("axios");

const client_id = config.get("SPOTIFY_CLIENT_ID");
const client_secret = config.get("SPOTIFY_CLIENT_SECRET");
const state_key = randomStringGenerator(15);
const redirect_uri =
	config.get("ENV") === "DEV"
		? "http://localhost:5000/auth/callback"
		: "https://myspotifystats/auth/callback";

router.get("/login", (req, res) => {
	const scope = "user-read-private user-read-email";

	const main_url = "https://accounts.spotify.com/authorize";

	const req_url =
		main_url +
		"?" +
		new URLSearchParams({
			response_type: "code",
			client_id,
			scope,
			redirect_uri,
			state: state_key,
		}).toString();

	return res.redirect(req_url);
});

router.get("/callback", async (req, res) => {
	const { code, state } = req.query;

	if (state === null || state !== state_key) {
		return res.status(500).json({ error: "State Mismatch" });
	}

	const data = new URLSearchParams();
	data.append("grant_type", "client_credentials");
	data.append("redirect_uri", redirect_uri);
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
		token = response.data.access_token;
		return res.status(200).json({ token });
	} catch (error) {
		return res.status(500).json({ error: "Internal Server Error" });
	}
});

module.exports = router;
