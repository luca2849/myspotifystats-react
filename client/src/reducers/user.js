import { USER_SUCCESS, USER_ERROR } from "../actions/types";

const initialState = {
	user: null,
	loading: false,
};

const authReducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case USER_SUCCESS:
			return {
				...state,
				...payload,
				user: payload,
				loading: false,
			};
		case USER_ERROR:
			return {
				...state,
				user: null,
				loading: false,
			};
		default:
			return state;
	}
};

export default authReducer;
