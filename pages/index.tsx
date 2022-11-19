import Link from "next/link";
import Script from "next/script";
import Meta from "../components/Meta/Meta";
import { FaChevronCircleDown } from "react-icons/fa";
import { VscGraphLine } from "react-icons/vsc";
import { BiHeadphone } from "react-icons/bi";

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
								The <span>one-stop-shop</span> for all your
								Spotify statistics
							</h1>
						</div>
						<div className={styles.goDown} id="goDown">
							<FaChevronCircleDown />
						</div>
					</header>
				</div>
			</div>
			<div className={styles.lower} id="lower">
				<div className={`scrollItem ${styles.ScrollItem}`}>
					<div className={styles.ScrollItem_icon}>
						<VscGraphLine />
					</div>
					<div className={styles.ScrollItem_text}>
						<p>Top tracks and artists</p>
					</div>
				</div>
			</div>
		</>
	);
}
