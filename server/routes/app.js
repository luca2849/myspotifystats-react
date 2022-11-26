const express = require("express");
const router = express.Router();
const tokenCheck = require("../middleware/tokenCheck");
const topCheck = require("../middleware/topCheck");
const {
	getTopItems,
	getCurrentlyPlaying,
	getHistory,
} = require("../util/appFunctions");

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

router.get("/playing", [tokenCheck], async (req, res) => {
	try {
		const currentlyPlaying = await getCurrentlyPlaying(req.token);
		return res.status(200).json({ playing: currentlyPlaying });
	} catch (error) {
		console.error(error);
		return res.status(500).json({ msg: "Internal Server Error" });
	}
});

router.get("/history", [tokenCheck], async (req, res) => {
	try {
		const history = await getHistory(req.token);
		return res.status(200).json({ history: history });
	} catch (error) {
		console.error(error);
		return res.status(500).json({ msg: "Internal Server Error" });
	}
});

module.exports = router;
