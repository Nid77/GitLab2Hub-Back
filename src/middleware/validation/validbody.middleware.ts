import { Request, Response, NextFunction } from "express"
import { ERROR_MESSAGE } from "../../constants/constants"

export function validMigrationBodyMiddleware(req: Request, res: Response, next: NextFunction) {

    const { sourceRepoUrl, destinationRepoUrl } = req.body

    if (!sourceRepoUrl || !destinationRepoUrl) {
        res.status(400).json("INVALID BODY")
        return
    }

    next()
}
