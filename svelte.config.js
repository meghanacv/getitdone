import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import adapter from "@sveltejs/adapter-auto";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      // Specify the Node.js runtime version
      precompress: false,
      env: {
        runtime: "node18" // or 'node16'
      }
    })
  },
  preprocess: vitePreprocess()
};

export default config;
