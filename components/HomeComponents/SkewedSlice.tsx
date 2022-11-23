import React from "react";
import PropTypes from "prop-types";

const SkewedSlice = ({
	primary,
	secondary,
	children,
	degrees,
	style,
}: SkewedSliceInterface) => {
	return <div style={style}>SkewedSlice</div>;
};

interface SkewedSliceInterface {
	primary: string;
	secondary: string;
	children: React.ReactNode;
	degrees: string | number;
	style: React.CSSProperties;
}

SkewedSlice.propTypes = {};

export default SkewedSlice;
