import express, { Request, Response } from "express";
import routes from "./routes/router";
import * as dotenv from "dotenv";
import { authorizationMiddleware } from "./middleware/auth.middleware";
const cors = require("cors");
// Use dotenv to load environment variables from `.env` file
dotenv.config();

const app = express();
const port = 3000;

// Cors middleware
app.use(
    cors({
        origin: process.env.FRONTEND_URL,
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: "*",
        optionsSuccessStatus: 200,
    })
);

// Middleware use for parsing JSON
app.use(express.json());

// Middleware for authorization
app.use(authorizationMiddleware);

// Routes
app.use("/api", routes);

routes.all("*", (req, res) => {
    res.status(404).send("Route not found.");
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
