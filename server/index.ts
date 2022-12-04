import express, { Request, Response } from "express";
import next from "next";
import config from "config";

import AuthRoutes from "./routes/auth";
import UserRoutes from "./routes/user";
import AppRoutes from "./routes/app";

const port: string = config.get("PORT") || "4005";
const env = config.get("ENV") || "DEV";

const PORT: number = parseInt(port, 10) || 4005;

const dev: boolean = env !== "production";

const app = next({ dev });

const handle = app.getRequestHandler();

app.prepare().then(() => {
	const server = express();

	server.use(express.json());

	server.get("/health_check", (req: Request, res: Response) =>
		res.status(200).json({ status: "healthy" })
	);

	server.use("/api/auth", AuthRoutes);
	server.use("/api/user", UserRoutes);
	server.use("/api/app", AppRoutes);

	server.all("*", (req: Request, res: Response) => handle(req, res));

	server.listen(PORT, () => {
		console.log(`> Ready on http://localhost:${PORT}`);
	});
});
