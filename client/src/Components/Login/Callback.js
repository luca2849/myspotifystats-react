import React, { useEffect } from "react";
import { generateToken } from "../../actions/auth";
import { useQuery } from "../../util/hooks/useQuery";
// Redux
import { connect } from "react-redux";

const Callback = ({ generateToken }) => {
	const code = useQuery().get("code");
	useEffect(() => {
		// with this code from the spotify API,
		// query local API for access token from spotify
		generateToken({ code });
	}, [code]);
	return <p>Callback</p>;
};

export default connect(null, { generateToken })(Callback);
