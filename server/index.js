const express = require("express");
const config = require("config");
const path = require("path");
const app = express();

// Init Middleware
app.use(express.json({ extend: false }));

// Define Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/user", require("./routes/user"));

// Route for built client routes
app.use(express.static("../client/build"));
app.get("*", (req, res) => {
	res.sendFile(
		require("path").resolve(__dirname, "../client", "build", "index.html")
	);
});

const PORT = config.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Server Listening on Port ${PORT}`);
});
