import { z } from "zod";

export const migrationModel = z.object({
    name: z.string(),
    description: z.string(),
    privateRepo: z.boolean(),
    sourceRepoUrl: z.string(),
    destinationRepoUrl: z.string(),
});
