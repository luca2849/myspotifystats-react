import axios from "axios";
import { TOP_RECEIVED, ERROR } from "./types";

/*
 * Get the top items for a user
 *
 * @param  {String}  itemType    What to return enum - either 'tracks' or 'artists
 * @param  {String}  timePeriod  Period to calculate top items over enum -
 * 									- either 'short_term', 'medium_term', or 'long_term'
 * @param  {Integer} limit       Number of results to return (> 0)
 *
 *
 * @dispatch TRACKS_RECEIVED
 */
export const loadItems = (itemType, timePeriod, limit) => async (dispatch) => {
	try {
		const res = await axios.get(
			`/api/user/app/top/${itemType}?timePeriod=${timePeriod}&limit=${limit}`
		);
		dispatch({ type: TOP_RECEIVED, payload: res.data });
	} catch (error) {
		console.error(error);
		dispatch({ type: ERROR });
	}
};
