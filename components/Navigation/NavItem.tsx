import React from "react";
import styles from "../../styles/NavItem.module.scss";
import Link from "next/link";

interface NavItemProps {
	icon?: React.ReactNode;
	label: string;
	menuOpen: boolean;
	link?: string;
	isExpander?: boolean;
	children?: React.ReactNode;
	onClick?: Function;
}

const NavItem = ({
	icon,
	label,
	menuOpen,
	link = "#",
	isExpander = false,
	children,
	onClick = () => {},
}: NavItemProps) => {
	return (
		<div className={styles.navItem} onClick={() => onClick()}>
			<Link href={link}>
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
							opacity: menuOpen ? 1 : 0,
							transform: menuOpen
								? "translateX(0)"
								: "translateX(-15rem)",
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
