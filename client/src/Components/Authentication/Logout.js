import React, { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { logout } from "../../actions/auth";
// Redux
import { connect } from "react-redux";

const Logout = ({ logout }) => {
	useEffect(() => {
		logout();
	}, [logout]);
	return <Navigate to="/" state={{ from: useLocation() }} replace />;
};

export default connect(null, { logout })(Logout);
