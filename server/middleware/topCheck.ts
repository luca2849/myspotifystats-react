import { Request, Response, NextFunction } from "express";
/*
 * Middleware for checking validity of top tracks/artists request
 *
 * @param  {Object}   req  The HTTP request object
 * @param  {Object}   res  The HTTP response object
 * @param  {Function} next Function to continue request
 *
 * @return {Object}        HTTP response (if invalid, or continue if valid)
 */
export default (req: Request, res: Response, next: NextFunction) => {
	try {
		const { limit, timePeriod } = req.query as IQueryParams;
		const { type } = req.params;
		if (!["tracks", "artists"].includes(type))
			return res.status(400).json({ msg: "Invalid type" });
		if (!["short_term", "medium_term", "long_term"].includes(timePeriod)) {
			return res.status(400).json({ msg: "Invalid time period" });
		}
		if (limit <= 0) {
			return res.status(400).json({ msg: "Invalid limit" });
		}
		next();
	} catch (error) {
		return res.status(401).json({ error: "Token expired." });
	}
};

interface IQueryParams {
	limit: number;
	timePeriod: string;
	[key: string]: string | number;
}
