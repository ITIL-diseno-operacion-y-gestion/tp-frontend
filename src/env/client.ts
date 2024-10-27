import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
  clientPrefix: "NEXT_PUBLIC_",
  client: {
    NEXT_PUBLIC_API_URL: z.string().url(),
    // Las variables de entorno públicas que se usan solo en el cliente
  },

  runtimeEnv: {
    // eslint-disable-next-line n/no-process-env
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
});
