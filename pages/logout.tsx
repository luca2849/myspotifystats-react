import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { logout } from "../actions/auth";
// Redux
import { connect } from "react-redux";

interface LogoutProps {
	logout: Function;
}

const Logout = ({ logout }: LogoutProps) => {
	const router = useRouter();
	useEffect(() => {
		logout();
		router.push("/");
	}, [logout]);
	return <p>Logging out...</p>;
};

export default connect(null, { logout })(Logout);
