import { defineConfig } from "astro/config";
import { viteStaticCopy } from "vite-plugin-static-copy";
import cloudflare from "@astrojs/cloudflare";
const iconsPath = "node_modules/@shoelace-style/shoelace/dist/assets/icons";


// https://astro.build/config
export default defineConfig({
  site: "https://moodnote.skorphil.xyz",
  vite: {
    resolve: {
      alias: [{
        find: /\/assets\/icons\/(.+)/,
        replacement: `${iconsPath}/$1`
      }]
    },
    build: {
      rollupOptions: {
        // external: /^lit/,
        plugins: []
      }
    },
    plugins: [viteStaticCopy({
      targets: [{
        src: iconsPath,
        dest: "assets"
      }]
    })]
  },
  output: "server",
  adapter: cloudflare()
});