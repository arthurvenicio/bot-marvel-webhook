import { RuntimeOptions } from "firebase-functions/v1";

export const runtimeOpts: RuntimeOptions = {
  timeoutSeconds: 540,
  memory: "1GB",
};
