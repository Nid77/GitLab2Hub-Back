import { Request, Response, NextFunction } from "express"

export function authorizationMiddleware(req: Request, res: Response, next: NextFunction) {
    const secretToken = process.env.AUTH_TOKEN
    const authorization = req.headers["authorization"]

    if(!authorization){
        res.status(403).json({
            error: "MISSIGN TOKEN"
        })
        return
    }
    if(authorization !== `Bearer ${secretToken}`){
        res.status(403).json({
            error: "INVALID TOKEN"
        })
        return
    }

    next()
}
