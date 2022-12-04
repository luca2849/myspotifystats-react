import config from "config";
import express, { Request, Response } from "express";
import axios from "axios";
import { refreshToken } from "../../actions/auth";

const router = express.Router();
const client_id = config.get("SPOTIFY_CLIENT_ID");
const client_secret = config.get("SPOTIFY_CLIENT_SECRET");

router.get("/token", async (req: Request, res: Response) => {
	const { code, state } = req.query;

	// if (state === null || state !== state_key) {
	// 	return res.status(500).json({ error: "State Mismatch" });
	// }

	if (!code) return res.status(400).json({ error: "Missing code parameter" });
	const data = new URLSearchParams();
	data.append("grant_type", "authorization_code");
	const protocol = config.get("ENV") === "PROD" ? "https" : "http";
	const host =
		config.get("ENV") === "PROD" ? req.get("host") : "localhost:4000";
	data.append("redirect_uri", `${protocol}://${host}/login/callback`);
	data.append("code", code as string);
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

router.get("/token/refresh", async (req: Request, res: Response) => {
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

export default router;
