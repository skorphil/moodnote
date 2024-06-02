import { defineConfig } from "astro/config";
import { viteStaticCopy } from "vite-plugin-static-copy";
// import cloudflare from "@astrojs/cloudflare";
import zeabur from "@zeabur/astro-adapter/serverless";

import node from "@astrojs/node";
const iconsPath = "node_modules/@shoelace-style/shoelace/dist/assets/icons";

// https://astro.build/config
export default defineConfig({
  site: "https://moodnote.skorphil.xyz",
  vite: {
    resolve: {
      alias: [
        {
          find: /\/assets\/icons\/(.+)/,
          replacement: `${iconsPath}/$1`,
        },
      ],
    },
    build: {
      rollupOptions: {
        // external: /^lit/,
        plugins: [],
      },
    },
    plugins: [
      viteStaticCopy({
        targets: [
          {
            src: iconsPath,
            dest: "assets",
          },
        ],
      }),
    ],
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ru"],
  },
  output: "server",
  adapter: zeabur(),
  // adapter: cloudflare(),
  // adapter: node({
  //   mode: "standalone"
  // })
});
