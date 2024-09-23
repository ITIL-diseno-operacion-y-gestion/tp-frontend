import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

/** Las variables de entorno privadas que se pueden
 *  usar solo en el servidor
 */
export const env = createEnv({
  server: {
    NODE_ENV: z.enum(["development", "production"]),
  },
  onValidationError: (error) => {
    console.error(
      "❌ Invalid server environment variables:",
      error.flatten().fieldErrors,
    );
    process.exit(1);
  },
  // eslint-disable-next-line n/no-process-env
  runtimeEnv: process.env,
  emptyStringAsUndefined: true,
});
