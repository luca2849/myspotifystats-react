import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Callback from "./Components/Login/Callback";
import Login from "./Components/Login/Login";
import Home from "./Pages/Home";

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/login" element={<Login />} />
					<Route
						exact
						path="/login/callback"
						element={<Callback />}
					/>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
