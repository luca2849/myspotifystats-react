import axios from "axios";
import { USER_SUCCESS, USER_ERROR } from "./types";

// Get access token from API
export const getMe = () => async (dispatch) => {
	try {
		const res = await axios.get(`/api/user/me`);
		dispatch({ type: USER_SUCCESS, payload: res.data });
	} catch (error) {
		console.error(error);
		dispatch({ type: USER_ERROR });
	}
};
