import Link from "next/link";

import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div className={styles.container}>
			<div>
				{/* <h2>Home Page</h2>
				<Link href="/login">
					<p>Login</p>
				</Link>
				<Link href="/profile">
					<p>Profile</p>
				</Link> */}
				<p>Hello</p>
			</div>
		</div>
	);
}
