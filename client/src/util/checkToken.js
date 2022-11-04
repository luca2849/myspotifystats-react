/*
 * Checks if current token has expired, and dispatches refresh
 *
 * @param {function} refreshToken Action for refreshing token
 * @param {function} setTokenSafe Setter function for tokenSafe state
 *
 * @return {null}                 Null
 */
async function checkToken(refreshToken, setTokenSafe) {
	// First check if token exists in localStorage
	// i.e. is user logged in? If not, they are safe
	if (!localStorage.getItem("refresh_token")) setTokenSafe(true);

	// otherwise, check if the token created time is present
	// if not, exit this function
	const created_at = localStorage.getItem("created_at");
	if (!created_at) return null;

	// Work out current unix time and compare
	const now = Math.floor(new Date().getTime() / 1000);
	// check time validity (with 10s grace)
	if (now - created_at > 3590) {
		// Token is invalid, so dispatch action
		// to refresh token
		setTokenSafe(false);
		await refreshToken(localStorage.getItem("refresh_token"));
	}
	// Token is valid here
	setTokenSafe(true);
	return null;
}

export default checkToken;
