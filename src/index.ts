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

try {
    app.use("/api", routes);
} catch (error) {
    app.use((req: Request, res: Response) => {
        res.status(404).send("Not Found");
    });
    console.log(error);
}

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
