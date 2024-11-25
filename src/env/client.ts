/* eslint-disable n/no-process-env */
import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
  clientPrefix: "NEXT_PUBLIC_",
  shared: {
    // Las variables de entorno que se usan en ambos lados
    NODE_ENV: z.enum(["development", "production"]),
  },
  client: {
    NEXT_PUBLIC_API_URL: z.string().url(),
    // Las variables de entorno públicas que se usan solo en el cliente
  },
  runtimeEnv: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NODE_ENV: process.env.NODE_ENV,
  },
});
