import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getMe } from "../actions/user";

const Profile = ({ getMe, user, loading }) => {
	useEffect(() => {
		getMe();
	}, [getMe]);
	return (
		<div>
			{loading || !user ? (
				<div>Loading...</div>
			) : (
				<div>
					<p>{user.display_name}</p>
					<div className="flag-container">
						<img
							src={`https://countryflagsapi.com/png/${user.country}`}
							alt={`Flag for ${user.country}`}
						/>
					</div>
				</div>
			)}
		</div>
	);
};

Profile.propTypes = {
	getMe: PropTypes.func.isRequired,
	user: PropTypes.object,
};

const mapStateToProps = (state) => ({
	user: state.user.user,
	loading: state.user.loading,
});

export default connect(mapStateToProps, { getMe })(Profile);
