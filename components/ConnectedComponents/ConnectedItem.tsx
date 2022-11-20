import React from "react";
import PropTypes from "prop-types";
import { ConnectedItemInterface } from "./types";

import styles from "../../styles/ConnectedComponents/ConnectedItem.module.scss";

const ConnectedItem = ({
	item: { text, icon, body },
	primary,
	secondary,
}: ConnectedItemProps) => {
	const containerStyles: React.CSSProperties = {
		borderColor: primary,
		color: primary,
	};
	const overlayStyles: React.CSSProperties = {
		background: primary,
	};
	return (
		<div className={styles.ConnectedItem} style={containerStyles}>
			<div className={styles._underlay}></div>
			<div
				className={`${styles._overlay} ConnectedItem`}
				style={overlayStyles}
			></div>
			<div className={styles._top}>
				<div className={styles._icon}>{icon}</div>
				<div className={styles._text}>{text}</div>
			</div>
			<div className={styles._body}>{body}</div>
		</div>
	);
};
ConnectedItem.propTypes = {
	item: PropTypes.object.isRequired,
	primary: PropTypes.string,
	secondary: PropTypes.string,
};

interface ConnectedItemProps {
	item: ConnectedItemInterface;
	primary: string;
	secondary: string;
}

export default ConnectedItem;
