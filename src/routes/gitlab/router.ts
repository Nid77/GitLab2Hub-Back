import express from "express";
import { GitLabController } from "../../controllers/gitlab";

const router = express.Router();

const gitlabController = new GitLabController();

router.get("/", gitlabController.get);

export default router;
