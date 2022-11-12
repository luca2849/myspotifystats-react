const express = require("express");
const next = require("next");
const config = require("config");

const port = config.get("PORT") || 4000;
const env = config.get("ENV") || "DEV";

const app = next({ dev: env === "DEV" });
const handle = app.getRequestHandler();

app.prepare()
	.then(() => {
		const server = express();

		// Init Middleware
		server.use(express.json({ extend: false }));

		server.get("/api/hello", (req, res) =>
			res.status(200).json({ hello: "world!!!" })
		);

		// Define Routes
		server.use("/api/auth", require("./routes/auth"));
		server.use("/api/user", require("./routes/user"));
		server.use("/api/app", require("./routes/app"));

		server.get("*", (req, res) => {
			return handle(req, res);
		});

		server.listen(port, (err) => {
			if (err) throw err;
			console.log(`Listening on port ${port}`);
		});
	})
	.catch((ex) => {
		console.error(ex.stack);
		process.exit(1);
	});
