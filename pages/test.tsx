import React from "react";
import PropTypes from "prop-types";
import ConnectedItems from "../components/HomeComponents/ConnectedComponents/ConnectedItems";
import { FaAccessibleIcon, FaEnvelopeOpen, FaSpotify } from "react-icons/fa";
import { ConnectedItemInterface } from "../components/HomeComponents/ConnectedComponents/types";
import Script from "next/script";

const test = ({}) => {
	const items: ConnectedItemInterface[] = [
		{
			text: "Welcome",
			body: "Welcome to the site Welcome to the site Welcome to the site Welcome to the site  Welcome to the site  Welcome to the site  Welcome to the site",
			icon: <FaEnvelopeOpen />,
		},
		{
			text: "Log In",
			body: "Log in with Spotify",
			icon: <FaSpotify />,
		},
		{
			text: "Log In",
			body: "Log in with Spotify",
			icon: <FaSpotify />,
		},
		{
			text: "Log In",
			body: "Log in with Spotify",
			icon: <FaSpotify />,
		},
		{
			text: "Welcome",
			body: "Welcome to the site",
			icon: <FaEnvelopeOpen />,
		},
	];
	return (
		<div>
			<Script
				src="/scripts/hovers.js"
				strategy="afterInteractive"
				defer
			/>
			<ConnectedItems items={items} />
		</div>
	);
};

test.propTypes = {};

export default test;
