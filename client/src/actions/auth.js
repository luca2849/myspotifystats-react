import axios from "axios";
import { AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL } from "./types";
import { setAuthToken } from "../util/setAuthToken";

// Get access token from API
export const generateToken = (data) => async (dispatch) => {
	const { code } = data;
	try {
		const res = await axios.get(`/auth/token?code=${code}`);
		setAuthToken(res.data.token);
		dispatch({ type: LOGIN_SUCCESS, payload: res.data });
	} catch (error) {
		console.error(error);
		dispatch({ type: AUTH_ERROR });
	}
};
