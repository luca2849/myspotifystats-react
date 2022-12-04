import express, { Response, ErrorRequestHandler } from "express";
import tokenCheck from "../middleware/tokenCheck";
import topCheck from "../middleware/topCheck";
import { getTopItems } from "../util/appFunctions";
import { ITokenRequest, TimePeriod } from "../types";

const router = express.Router();

router.get(
	"/top/:type",
	[tokenCheck, topCheck],
	async (req: ITokenRequest, res: Response) => {
		const { limit, timePeriod } = req.query;
		const { type } = req.params;
		try {
			const topSongs = await getTopItems(
				req.token,
				type,
				limit as string,
				timePeriod as TimePeriod
			);
			return res.status(200).json({ data: topSongs });
		} catch (error) {
			console.error(error);
			return res.status(500).json({ msg: "Internal Server Error" });
		}
	}
);

export default router;
