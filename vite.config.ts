import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },

  nitro: {
    preset: "vercel",
    vercel: {
      config: {
        runtime: "nodejs22.x",
      },
    },
    output: {
      dir: ".vercel/output",
      serverDir: ".vercel/output/functions/__nitro.func",
      publicDir: ".vercel/output/static",
    },
  },
});