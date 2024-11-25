import { createEnv } from "@t3-oss/env-core";

export const env = createEnv({
  server: {
    // Las variables de entorno privadas que se usan solo en el servidor
  },
  // eslint-disable-next-line n/no-process-env
  runtimeEnv: process.env,
  emptyStringAsUndefined: true,
});
