import { TopItem, token } from "../types";

import { TimePeriod } from "../types";

import axios from "axios";

/*
 * Function for gathering top items
 *
 * @param  {String}   token		  The access token for an authenticated user
 * @param  {String}   type  	  What to return enum - either 'artists', 'tracks'
 * @param  {Int}	  limit 	  The total number of results to return (> 0)
 * @param  {String}   timePeriod  Period to calculate top items over enum -
 * 									- either 'short_term', 'medium_term', or 'long_term'
 *
 * @return {Array}    results 	  A list of objects containing either top tracks or artists
 */
const getTopItems: IGetTopItems = async (token, type, limit, timePeriod) => {
	switch (type) {
		case "tracks":
		case "artists": {
			const url = `https://api.spotify.com/v1/me/top/${type}?limit=${limit}&time_range=${timePeriod}`;
			const results = await axios({
				url: url,
				method: "GET",
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			return results.data;
		}
		default:
			return {};
	}
};

/*
 * Function for gathering top items
 * @return {Array}    results 	  A list of objects containing either top tracks or artists
 */
const getCurrentlyPlaying = async (token) => {
	const url = `https://api.spotify.com/v1/me/player/currently-playing`;
	try {
		const res = await axios({
			url: url,
			method: "GET",
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		return res.data === "" ? {} : res.data;
	} catch (error) {
		console.log(error);
	}
};

/*
 * Function for gathering top items
 * @return {Array}    results 	  A list of objects containing either top tracks or artists
 */
const getHistory = async (token, limit = 10) => {
	const url = `https://api.spotify.com/v1/me/player/recently-played?limit=${limit}`;
	try {
		const res = await axios({
			url: url,
			method: "GET",
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		return res.data;
	} catch (error) {
		console.log(error);
	}
};

interface IGetTopItems {
	(
		token: token,
		type: string,
		limit: NonNullable<string | null | undefined>,
		timePeriod: TimePeriod
	): TopItem | {};
}

export { getTopItems, getCurrentlyPlaying, getHistory };
