import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    server: {
      host: true,
      port: process.env.PORT ? parseInt(process.env.PORT) : 5174,
      hmr: {
        overlay: false,
      },
      allowedHosts: ["balagh.horizonsventure.com"],
    },
    base: "/blagh-latest/",
    plugins: [react(), mode === "development" && componentTagger()].filter(
      Boolean,
    ),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
