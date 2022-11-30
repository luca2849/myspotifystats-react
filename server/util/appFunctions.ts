import { TopItem, token } from "../types";

import { TimePeriod } from "../types";

const { default: axios } = require("axios");

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

interface IGetTopItems {
	(
		token: token,
		type: string,
		limit: NonNullable<string | null | undefined>,
		timePeriod: TimePeriod
	): TopItem | {};
}

export { getTopItems };
