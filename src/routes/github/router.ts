import express from "express";
import { GitHubController } from "../../controllers/github";
import { validMigrationBodyMiddleware } from "../../middleware/validation/validbody.middleware";

const router = express.Router();

const gitHubController = new GitHubController();

router.post("/migrate", validMigrationBodyMiddleware, gitHubController.migrate);

export default router;
