import express from "express";
import { GitHubController } from "../../controllers/github";

const router = express.Router();

const gitHubController = new GitHubController();

router.get("/", gitHubController.get);
router.post("/migrate", gitHubController.migrate);

export default router;
