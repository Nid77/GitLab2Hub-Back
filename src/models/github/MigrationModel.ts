import { z } from "zod";

export const migrationModel = z.object({
    gitHubUrl: z.string().min(1),
    name: z.string().min(1),
    description: z.string(),
    private: z.boolean(),
    sourceRepoUrl: z.string().min(1),
});
