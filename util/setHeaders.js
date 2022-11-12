import axios from "axios";

const setHeaders = (token, created_at) => {
	if (token) {
		axios.defaults.headers.common["x-auth-token"] = token;
		axios.defaults.headers.common["created-at"] = created_at;
	}
};

export { setHeaders };
