import React from "react";
import PropTypes from "prop-types";
import styles from "../../styles/ActionIcons.module.scss";
import Link from "next/link";

import { BsArrowRight } from "react-icons/bs";

const ActionIcons = ({ actions }: ActionIconsProps) => {
	return (
		<div className={styles.actions}>
			{actions.map((action) => (
				<div className={styles.action}>
					<div className={styles.content}>
						<div className={styles.icon}>{action.icon}</div>
						<p>{action.text}</p>
					</div>
					<div className={styles.lower}>
						<Link href="/top">
							Take me there! <BsArrowRight />
						</Link>
					</div>
				</div>
			))}
		</div>
	);
};

interface ActionIconsProps {
	actions: {
		icon: React.ReactNode;
		text: string;
	}[];
}

ActionIcons.propTypes = {};

export default ActionIcons;
