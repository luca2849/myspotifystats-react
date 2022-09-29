import axios from "axios";
import { AUTH_ERROR, LOGIN_SUCCESS } from "./types";
import { setHeaders } from "../util/setHeaders";

// Get access token from API
export const generateToken = (data) => async (dispatch) => {
	const { code } = data;
	try {
		const res = await axios.get(`/api/auth/token?code=${code}`);
		setHeaders(res.data.access_token, res.data.created_at);
		dispatch({ type: LOGIN_SUCCESS, payload: res.data });
	} catch (error) {
		console.error(error);
		dispatch({ type: AUTH_ERROR });
	}
};

export const refreshToken = (data) => async (dispatch) => {
	try {
		// Gather
		const res = await axios.get(`/api/auth/token/refresh?refresh=${data}`);
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
