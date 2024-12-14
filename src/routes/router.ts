import express from "express";
import GitLabRoutes from "./gitlab/router";
import GitHubRoutes from "./github/router";
import { validMigrationHeaderMiddleware } from "../middleware/validation/validheader.middlware";

const router = express.Router();

router.use("/gitlab", GitLabRoutes);
router.use("/github", validMigrationHeaderMiddleware, GitHubRoutes);

export default router;
