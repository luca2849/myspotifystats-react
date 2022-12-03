import express, { Request, Response } from "express";
import axios from "axios";
import tokenCheck from "../middleware/tokenCheck.js";
import { ITokenRequest } from "../types.js";

const router = express.Router();

router.get("/me", [tokenCheck], async (req: ITokenRequest, res: Response) => {
	try {
		const response = await axios({
			url: "https://api.spotify.com/v1/me",
			method: "GET",
			headers: {
				Authorization: `Bearer ${req.token}`,
			},
		});
		return res.status(200).json(response.data);
	} catch (error) {
		console.error(error);
		return res.status(500).json({ error: "Internal Server Error" });
	}
});

export default router;
