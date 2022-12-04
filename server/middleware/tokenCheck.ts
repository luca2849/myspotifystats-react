import { Request, Response, NextFunction } from "express";
import { ITokenRequest } from "../types.js";

/*
 * Middleware for checking token validity
 *
 * @param  {Object}   req  The HTTP request object
 * @param  {Object}   res  The HTTP response object
 * @param  {Function} next Function to continue request
 *
 * @return {Object}        HTTP response (if invalid, or continue if valid)
 */
export default (req: ITokenRequest, res: Response, next: NextFunction) => {
	// Get token created time
	const created_at = req.headers["created-at"];
	// check if no created time
	if (!created_at) {
		return res.status(401).json({ error: "No time provided" });
	}
	// Verify token
	try {
		const current_unix_time = Math.floor(new Date().getTime() / 1000);
		// Check if valid
		if (current_unix_time - parseInt(created_at as string, 10) > 3590) {
			return res.status(400).json({ error: "Token expired." });
		}
		// Make token more easily accessible
		req.token = req.headers["x-auth-token"] as string;
		next();
	} catch (error) {
		return res.status(401).json({ error: "Token expired." });
	}
};
