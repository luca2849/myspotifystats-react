import React from "react";
import PropTypes from "prop-types";

import ConnectedItem from "./ConnectedItem";
import { ConnectedItemInterface } from "./types";

import styles from "../../styles/ConnectedComponents/ConnectedItems.module.scss";

const ConnectedItems = ({ items, primary, secondary }: ConnectedItemsProps) => {
	return (
		<div className={styles.ConnectedItems}>
			{items.map((item, index) => {
				return (
					<ConnectedItem
						key={index}
						item={item}
						primary={primary}
						secondary={secondary}
					/>
				);
			})}
		</div>
	);
};

ConnectedItems.defaultProps = {
	primary: "#1db954",
	secondary: "#000",
	items: [],
};

ConnectedItems.propTypes = {
	items: PropTypes.array,
	primary: PropTypes.string,
	secondary: PropTypes.string,
};

interface ConnectedItemsProps {
	items: ConnectedItemInterface[];
	primary: string;
	secondary: string;
}

export default ConnectedItems;
