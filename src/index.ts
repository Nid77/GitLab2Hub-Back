import express, { Request, Response } from "express";
import routes from "./routes/router";
import * as dotenv from "dotenv";
import { authorizationMiddleware } from "./middleware/auth.middleware";

// Use dotenv to load environment variables from `.env` file
dotenv.config();

const app = express();
const port = 3000;

// Middleware use for parsing JSON
app.use(express.json());

// Middleware for authorization
app.use(authorizationMiddleware);

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World!");
});

app.use("/api", routes);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
