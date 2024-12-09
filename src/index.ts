import express, { Request, Response } from "express";
import routes from "./routes/router";


const app = express();
const port = 3000;

// Middleware use for parsing JSON
app.use(express.json());


app.get("/", (req: Request, res: Response) => {
    res.send("Hello World!");
});

app.use("/api",routes);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
