import {
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	USER_LOADED,
	AUTH_ERROR,
	LOGOUT,
} from "../actions/types";

const initialState = {
	token: "",
	isAuthenticated: false,
	loading: true,
	user: null,
};

const authReducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case LOGIN_SUCCESS:
			// set access, refresh tokens, and when the tokens were created
			if (localStorage) {
				for (const property in payload) {
					localStorage.setItem(property, payload[property]);
				}
			}
			return {
				...state,
				token: payload.access_token,
				isAuthenticated: true,
				loading: false,
			};
		case LOGIN_FAIL:
		case AUTH_ERROR:
		case LOGOUT:
			if (localStorage) {
				localStorage.removeItem("access_token");
				localStorage.removeItem("refresh_token");
				localStorage.removeItem("created_at");
			}
			return {
				...state,
				token: null,
				isAuthenticated: false,
				loading: false,
				user: null,
			};
		case USER_LOADED:
			return {
				...state,
				isAuthenticated: true,
				loading: false,
				user: payload,
			};
		default:
			return state;
	}
};

export default authReducer;
