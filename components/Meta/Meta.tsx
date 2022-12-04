import React from "react";
import Head from "next/head";

interface MetaProps {
	keywords?: string;
	description?: string;
	title?: string;
}

const Meta = ({ keywords, description, title }: MetaProps) => {
	return (
		<Head>
			<meta
				name="viewport"
				content="width=device-width,initial-scale=1"
			/>
			<meta name="keywords" content={keywords} />
			<meta name="description" content={description} />
			<meta charSet="utf-8" />
			<link rel="icon" href="/favicon.ico" />
			<title>{title}</title>
		</Head>
	);
};

Meta.defaultProps = {
	title: "MySpotifyStats",
	keywords: "spotify, statistics, top, tracks, songs, artists",
	description: "Track your Spotify stats today with MySpotifyStats",
};

export default Meta;
