import React from "react";
import styles from "./NavItem.module.scss";
import { Link } from "react-router-dom";

const NavItem = ({
	icon,
	label,
	menuOpen,
	link,
	isExpander = false,
	children,
	onClick,
}) => {
	return (
		<div className={styles.navItem} onClick={() => onClick()}>
			<Link to={link ? link : null}>
				<div className={styles.linkContainer}>
					<div
						className={
							isExpander ? (menuOpen ? styles.rotate : "") : ""
						}
					>
						{icon ? icon : children}
					</div>
					<div
						className={styles.tag}
						style={{
							opacity: menuOpen && 1,
							transform: menuOpen && "translateX(0)",
						}}
					>
						{menuOpen && <p>{label}</p>}
					</div>
				</div>
			</Link>
		</div>
	);
};

export default NavItem;
