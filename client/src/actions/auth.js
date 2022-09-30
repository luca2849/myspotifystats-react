import axios from "axios";
import { AUTH_ERROR, LOGIN_SUCCESS, LOGOUT, USER_LOADED } from "./types";
import { setHeaders } from "../util/setHeaders";

/*
 * Loads the user into the auth state
 *
 * @dispatch USER_LOADED
 */
export const loadUser = () => async (dispatch) => {
	try {
		const res = await axios.get(`/api/user/me`);
		dispatch({ type: USER_LOADED, payload: res.data });
	} catch (error) {
		console.error(error);
		dispatch({ type: AUTH_ERROR });
	}
};

/*
 * Removes all user info from the state and browser
 *
 * @dispatch LOGOUT
 */
export const logout = () => async (dispatch) => {
	dispatch({ type: LOGOUT });
};

/*
 * Gets a user access token from the server using a code provided from Spotify login
 *
 * @param {object} data Object with a `code` parameter
 * containing the authorization code from Spotify login
 *
 * @dispatch LOGIN_SUCCESS
 * @dispatch loadUser
 */
export const generateToken = (data) => async (dispatch) => {
	const { code } = data;
	try {
		const res = await axios.get(`/api/auth/token?code=${code}`);
		setHeaders(res.data.access_token, res.data.created_at);
		dispatch({ type: LOGIN_SUCCESS, payload: res.data });
		dispatch(loadUser());
	} catch (error) {
		console.error(error);
		dispatch({ type: AUTH_ERROR });
	}
};

/*
 * Function for refreshing the current access token
 *
 * @param {String} refresh_token The refresh token provided by Spotify on login
 *
 * @dispatch LOGIN_SUCCESS
 */
export const refreshToken = (refresh_token) => async (dispatch) => {
	try {
		// Gather
		const res = await axios.get(
			`/api/auth/token/refresh?refresh=${refresh_token}`
		);
		// Send back new token and created_time
		if (res.data.access_token) {
			setHeaders(res.data.access_token, res.data.created_at);
			dispatch({ type: LOGIN_SUCCESS, payload: res.data });
		}
	} catch (error) {
		console.error(error);
		dispatch({ type: AUTH_ERROR });
	}
};
