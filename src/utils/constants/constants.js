export const APP_BG =
	"https://assets.nflxext.com/ffe/siteui/vlv3/4d2c5849-b306-4884-9036-6211f7ee0178/web/IN-en-20240930-TRIFECTA-perspective_1e1ca6cd-9e2d-4e9d-9e4b-ba0c2d3a0e31_large.jpg";
export const APP_LOGO =
	"https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const AVATAR_LOGO =
	"https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png";

export const MOVIES_OPTIONS = {
	method: "GET",
	headers: {
		accept: "application/json",
		Authorization: "Bearer " + process.env.REACT_APP_MOVIES_OPTIONS,
	},
};

export const CDN_IMG_URL = "https://image.tmdb.org/t/p/w500/";

export const OPAINAI_KEY = process.env.REACT_APP_OPAINAI_KEY;

export const LANGUAGE_CODE = [
	{
		code: "en",
		name: "English",
	},
	{
		code: "hi",
		name: "Hindi",
	},
	{
		code: "es",
		name: "Spanish",
	},
	{
		code: "ta",
		name: "Tamil",
	},
	{
		code: "te",
		name: "Telugu",
	},
	{
		code: "gu",
		name: "Gujarati",
	},
	{
		code: "bn",
		name: "Bangla",
	},
];
