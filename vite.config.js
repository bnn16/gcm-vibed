import { resolve } from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [react()],
    build: {
        target: "node18",
        outDir: "dist",
        lib: {
            entry: resolve(__dirname, "src/source.tsx"),
            name: "gcm-vibed",
            fileName: "cli",
            formats: ["es"],
        },
        rollupOptions: {
            external: ["react", "ink", "ink-big-text"],
            output: {
                banner: "#!/usr/bin/env node",
            },
        },
        minify: true,
    },
    resolve: {
        alias: {
            "@": resolve(__dirname, "./src"),
        },
    },
});
