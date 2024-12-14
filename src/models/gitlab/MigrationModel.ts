import { z } from "zod";

export const migrationModel = z.object({
    gitLabUrl: z.string(),
    name: z.string(),
    description: z.string(),
    private: z.boolean(),
    sourceRepoUrl: z.string(),
});
