import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    {
      name: "exclude-file-type",
      transform(code, id) {
        if (id.endsWith(".mov")) {
          return null;
        }
        return code;
      }
    }
  ]
});
