import express from "express";
import GitLabRoutes from "./gitlab/router";
import GitHubRoutes from "./github/router";

const router = express.Router();

router.use("/gitlab", GitLabRoutes);
router.use("/github", GitHubRoutes);

export default router;
