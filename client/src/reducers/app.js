import { TOP_RECEIVED, ERROR } from "../actions/types";

const initialState = {
	top: [],
	loading: true,
};

const authReducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case TOP_RECEIVED:
			return {
				...state,
				top: payload,
				loading: false,
			};
		case ERROR:
		default:
			return state;
	}
};

export default authReducer;
