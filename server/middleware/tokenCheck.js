module.exports = (req, res, next) => {
	// Get JWT token from header
	const created_at = req.header("token-created");
	// check if no created time
	if (!created_at) {
		return res.status(401).json({ error: "No time provided" });
	}
	// Verify token
	try {
		const current_unix_time = Math.floor(new Date().getTime() / 1000);
		if (current_unix_time - created_at > 3590) {
			return res.status(400).json({ error: "Token expired." });
		}
		next();
	} catch (error) {
		return res.status(401).json({ error: "Token expired." });
	}
};
