import Link from "next/link";
import Script from "next/script";
import Meta from "../components/Meta/Meta";
import ConnectedItems from "../components/HomeComponents/ConnectedComponents/ConnectedItems";
import ActionIcons from "../components/HomeComponents/ActionIcons";

import { FaChevronCircleDown, FaRegClipboard } from "react-icons/fa";
import {
	MdOutlineWavingHand,
	MdOutlineLogin,
	MdQueryStats,
	MdOutlineShare,
	MdOutlineAnalytics,
} from "react-icons/md";
import { VscGraphLine, VscHistory, VscAccount } from "react-icons/vsc";
import { BsDisplay } from "react-icons/bs";

import styles from "../styles/Home.module.scss";

export default function Home() {
	return (
		<>
			<div className={styles.home}>
				<Meta title="MySpotifyStats | Track your top Spotify statistics" />
				<Script
					src="/scripts/homeScroll.js"
					strategy="afterInteractive"
					defer
				/>
				<div>
					<header className={styles.header}>
						<div className={styles.top}>
							<div className={styles.brand}>
								<img
									src="/img/logo.png"
									alt={`MySpotifyStats Logo`}
								/>
							</div>
							<nav className={styles.nav}>
								<div className={styles.navItem}>
									<Link href="/login">Login</Link>
								</div>
							</nav>
						</div>
						<div className={styles.hero}>
							<h1>
								The one-stop-shop for all your
								<span> Spotify</span> statistics
							</h1>
						</div>
						<div className={styles.goDown} id="goDown">
							<FaChevronCircleDown />
						</div>
					</header>
				</div>
			</div>
			<section className={styles.lowerSection} id="howItWorks">
				<h2 className={styles.sectionTitle}>How does it work?</h2>
				<ConnectedItems
					items={connectedItems}
					primary="#FFF"
					secondary="#0c1015"
				/>
			</section>
			<section className={styles.lowerSection} id="whatCanIDo">
				<h2 className={styles.sectionTitle}>What can I do?</h2>
				<ActionIcons actions={actions} />
			</section>
		</>
	);
}

const connectedItems = [
	{
		text: "Welcome",
		body: "Welcome to the MySpotifyStats - a secure, performant solution for finding your top Spotify statistics.",
		icon: <MdOutlineWavingHand />,
	},
	{
		text: "Log In",
		body: "Log in with Spotify so we can securely request your information from Spotify.",
		icon: <MdOutlineLogin />,
	},
	{
		text: "Information Gathering",
		body: "Once you log in, we can query Spotify to find out some information about your account.",
		icon: <FaRegClipboard />,
	},
	{
		text: "Data Crunching",
		body: "When we recieve your data, we can analyse it to make observations.",
		icon: <MdQueryStats />,
	},
	{
		text: "Presentation",
		body: "Once we've processed the data, we display it to you!",
		icon: <BsDisplay />,
	},
	{
		text: "Share your Results",
		body: "You can then share your results to your favourite social media, and encourage your friends to share theirs!",
		icon: <MdOutlineShare />,
	},
];

const actions = [
	{
		text: "See top tracks and artists",
		icon: <VscGraphLine />,
	},
	{
		text: "See what's playing and what's recently played",
		icon: <VscHistory />,
	},
	{
		text: "View account information",
		icon: <VscAccount />,
	},
	{
		text: "Run complex track and playlist analysis",
		icon: <MdOutlineAnalytics />,
	},
];
