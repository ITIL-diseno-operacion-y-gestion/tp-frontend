import { createEnv } from "@t3-oss/env-core";

export const env = createEnv({
  clientPrefix: "PUBLIC_",
  client: {
    // Las variables de entorno públicas que se usan solo en el cliente
  },
  // eslint-disable-next-line n/no-process-env
  runtimeEnv: process.env,
});
