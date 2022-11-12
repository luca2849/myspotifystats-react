const config = require("config");
const express = require("express");
const router = express.Router();
const axios = require("axios");
const tokenCheck = require("../middleware/tokenCheck");

router.get("/me", [tokenCheck], async (req, res) => {
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

module.exports = router;
