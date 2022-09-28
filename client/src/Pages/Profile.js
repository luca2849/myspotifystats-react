import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getMe } from "../actions/user";
import axios from "axios";

const Profile = ({ getMe, user }) => {
	console.log(user);
	useEffect(() => {
		getMe();
	}, [getMe]);
	return <div>Profile</div>;
};

const mapStateToProps = (state) => ({
	user: state.user.user,
});

export default connect(mapStateToProps, { getMe })(Profile);
