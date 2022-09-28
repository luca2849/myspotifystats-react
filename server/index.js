const express = require("express");
const config = require("config");
const app = express();

// Init Middleware
app.use(express.json({ extend: false }));

// Define Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/user", require("./routes/user"));

const PORT = config.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Server Listening on Port ${PORT}`);
});
