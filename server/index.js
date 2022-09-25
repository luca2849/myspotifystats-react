const express = require("express");
const app = express();

// Init Middleware
app.use(express.json({ extend: false }));

// Define Routes
//app.use("/route", require("./routes/routes"));

app.get("/", (req, res) => {
	return res.send("Response from API");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Server Listening on Port ${PORT}`);
});
