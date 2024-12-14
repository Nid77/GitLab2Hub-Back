import { Request, Response, NextFunction } from "express";
import { ERROR_MESSAGE } from "../../constants/constants";
import { migrationModel } from "../../models/github/MigrationModel";

export function validMigrationBodyMiddleware(req: Request, res: Response, next: NextFunction) {
    if (migrationModel.safeParse(req.body).success === false) {
        res.status(400).json("INVALID BODY");
        return;
    }

    next();
}
