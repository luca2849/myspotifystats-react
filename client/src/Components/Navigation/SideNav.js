import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { BiLogInCircle, BiLogOutCircle } from "react-icons/bi";
import { VscGraphLine } from "react-icons/vsc";
import { BiHeadphone } from "react-icons/bi";
import { TbChevronsRight } from "react-icons/tb";
import styles from "./SideNav.module.scss";
import NavItem from "./NavItem";

const SideNav = ({ user }) => {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<nav className={styles.nav} id={menuOpen ? styles.open : ""}>
			<div className={styles.top}>
				<div className={styles.brand}>
					<Link to="/">
						<img src="/img/logo.png" alt={`User profile`} />
					</Link>
				</div>
				<NavItem
					label="Top Tracks"
					icon={<VscGraphLine />}
					link={"/logout"}
					menuOpen={menuOpen}
				/>
				<NavItem
					label="Now Playing"
					icon={<BiHeadphone />}
					link={"/logout"}
					menuOpen={menuOpen}
				/>
			</div>
			<div className={styles.bottom}>
				{user ? (
					<>
						<NavItem
							label="Logout"
							icon={<BiLogOutCircle />}
							link={"/logout"}
							menuOpen={menuOpen}
						/>
						<NavItem
							label="Close"
							icon={<TbChevronsRight />}
							isExpander={true}
							menuOpen={menuOpen}
							onClick={() => setMenuOpen((prev) => !prev)}
						/>
						<NavItem
							label="Profile"
							link={"/profile"}
							menuOpen={menuOpen}
						>
							<img
								src={user.images[0].url}
								alt={`User profile`}
							/>
						</NavItem>
					</>
				) : (
					<div className={styles.navItem}>
						<Link to="/login">
							<BiLogInCircle />
						</Link>
					</div>
				)}
			</div>
		</nav>
	);
};

const mapStateToProps = (state) => ({
	user: state.auth.user,
});

export default connect(mapStateToProps, {})(SideNav);
