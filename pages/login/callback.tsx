import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { generateToken } from "../../actions/auth";

// Redux
import { connect } from "react-redux";

interface CallbackProps {
	generateToken: Function;
}

const Callback = ({ generateToken }: CallbackProps) => {
	const router = useRouter();
	const code = router.query?.code;
	useEffect(() => {
		// with this code from the spotify API,
		// query local API for access token from spotify
		if (!code) return;
		generateToken({ code });
		router.push("/");
	}, [code, generateToken]);
	return <p>Redirecting...</p>;
};

export default connect(null, { generateToken })(Callback);
