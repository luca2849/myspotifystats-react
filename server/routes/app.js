const express = require("express");
const router = express.Router();
const tokenCheck = require("../middleware/tokenCheck");
const topCheck = require("../middleware/topCheck");
const { getTopItems } = require("../util/appFunctions");

router.get("/top/:type", [tokenCheck, topCheck], async (req, res) => {
	const { limit, timePeriod } = req.query;
	const { type } = req.params;
	try {
		const topSongs = await getTopItems(req.token, type, limit, timePeriod);
		return res.status(200).json({ songs: topSongs.data });
	} catch (error) {
		console.error(error);
		return res.status(500).json({ msg: "Internal Server Error" });
	}
});

module.exports = router;
