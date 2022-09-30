import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styles from "./Profile.module.scss";
import { loadUser } from "../../actions/auth";

const Profile = ({ user, loading, loadUser }) => {
	useEffect(() => {
		loadUser();
	}, [loadUser]);
	return (
		<div>
			{loading || !user ? (
				<div>Loading...</div>
			) : (
				<div className={styles.pageContainer}>
					<div className={styles.topSection}>
						<div className={styles.profileImage}>
							<img
								src={user.images[0].url}
								alt={`User profile`}
							/>
						</div>
						<div className={styles.moreInfo}>
							<h1>{user.display_name}</h1>
							<div className={styles.infoHeader}>
								<div>
									<img
										src={`https://countryflagsapi.com/png/${user.country}`}
										alt={`Flag for ${user.country}`}
									/>
									<h4>GB</h4>
								</div>
								<h4>
									<span>&#183;</span>
									{user.followers.total} Followers
									<span>&#183;</span>
									Explicit Content{" "}
									{user.explicit_content.filter_enabled
										? "Disabled"
										: "Enabled"}
								</h4>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

Profile.propTypes = {
	loadUser: PropTypes.func.isRequired,
	user: PropTypes.object,
	loading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
	user: state.auth.user,
	loading: state.auth.loading,
});

export default connect(mapStateToProps, { loadUser })(Profile);
