import zennv from "zennv";
import { z } from "zod";

export const env = zennv({
    dotenv: true,
    schema: z.object({
        ENV:z.string().default("development"),
        PORT: z.number().default(3000),
        HOST: z.string().default("127.0.0.1"),
        POSTGRES_URI: z.string()
    })
})