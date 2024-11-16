import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
	name: "config",
	initialState: {
		lang: "en",
		forgotPass: false,
	},
	reducers: {
		changeConfig: (state, action) => {
			state.lang = action.payload;
		},
		setForgotPass: (state, action) => {
			state.forgotPass = action.payload;
		},
	},
});

export const { changeConfig, setForgotPass } = configSlice.actions;

export default configSlice.reducer;
