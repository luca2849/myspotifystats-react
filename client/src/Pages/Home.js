import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div>
			<p>Home Page</p>
			<Link to="/login">
				<p>Login</p>
			</Link>
		</div>
	);
};

export default Home;
