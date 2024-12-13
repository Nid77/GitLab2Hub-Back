import { Request, Response } from "express";

export class Controller {
    async get(req: Request, res: Response) {
        res.status(200).json({ message: "Hello World !" });
    }
}
