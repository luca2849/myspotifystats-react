import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
	isAuthenticated: boolean;
	loading: boolean;
	user: object;
}

const initialState: AuthState = {
	isAuthenticated: false,
	loading: true,
	user: {},
};

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		loadUser: (state, action: PayloadAction<object>) => {
			state = {
				...state,
				user: action.payload,
				isAuthenticated: true,
				loading: false,
			};
		},
	},
});
