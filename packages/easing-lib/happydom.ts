import { GlobalRegistrator } from "@happy-dom/global-registrator";

if (!globalThis.window) {
  GlobalRegistrator.register();
}
