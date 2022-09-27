const express = require("express");
const app = express();

// Init Middleware
app.use(express.json({ extend: false }));

// Define Routes
app.use("/auth", require("./routes/auth"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Server Listening on Port ${PORT}`);
});
