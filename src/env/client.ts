import { createEnv } from "@t3-oss/env-core";

export const env = createEnv({
  clientPrefix: "PUBLIC_",
  client: {},
  // eslint-disable-next-line n/no-process-env
  runtimeEnv: process.env,
});
