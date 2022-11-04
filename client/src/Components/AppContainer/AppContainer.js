import React from "react";
import styles from "./AppContainer.module.scss";

const AppContainer = ({ children }) => {
	return <div className={styles.container}>{children}</div>;
};

export default AppContainer;
