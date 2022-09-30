import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./TopNav.module.scss";

const TopNav = ({ user }) => {
	return (
		<nav className={styles.nav}>
			<div className={styles.brand}>
				<img src="/img/home_img.png" alt="MySpotifyStats Logo" />
			</div>
			<div className={styles.right}>
				{user ? (
					<>
						<div className={styles.navItem}>
							<Link to="/profile">
								{user.display_name.split(" ")[0]}
							</Link>
						</div>
						<div className={styles.navItem}>
							<Link to="/logout">Logout</Link>
						</div>
					</>
				) : (
					<div className={styles.navItem}>
						<Link to="/login">Login</Link>
					</div>
				)}
				<p></p>
			</div>
		</nav>
	);
};

const mapStateToProps = (state) => ({
	user: state.auth.user,
});

export default connect(mapStateToProps, {})(TopNav);
