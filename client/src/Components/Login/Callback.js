import React, { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { generateToken } from "../../actions/auth";
import { useQuery } from "../../util/hooks/useQuery";
// Redux
import { connect } from "react-redux";

const Callback = ({ generateToken }) => {
	const code = useQuery().get("code");
	useEffect(() => {
		// with this code from the spotify API,
		// query local API for access token from spotify
		if (!code) return;
		generateToken({ code });
	}, [code, generateToken]);
	return <Navigate to="/" state={{ from: useLocation() }} replace />;
};

export default connect(null, { generateToken })(Callback);
