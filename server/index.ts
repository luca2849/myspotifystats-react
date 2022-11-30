import express, { Request, Response, ErrorRequestHandler } from "express";
import next from "next";
const config = require("config");

const port = config.get("PORT") || 4000;
const env = config.get("ENV") || "DEV";

const app = next({ dev: env === "DEV" });
const handle = app.getRequestHandler();

import AuthRoutes from "./routes/auth";
import UserRoutes from "./routes/user";
import AppRoutes from "./routes/app";

app.prepare()
	.then(() => {
		const server = express();

		server.use(express.json);

		server.get("/api/hello", (req: Request, res: Response) =>
			res.status(200).json({ hello: "world!!!" })
		);

		// Define Routes
		server.use("/api/auth", AuthRoutes);
		server.use("/api/user", UserRoutes);
		server.use("/api/app", AppRoutes);

		server.get("*", (req, res) => {
			return handle(req, res);
		});

		server.listen(port, () => {
			console.log(`Listening on port ${port}`);
		});
	})
	.catch((err: ErrorRequestHandler) => {
		console.error(err);
		process.exit(1);
	});

export {};
