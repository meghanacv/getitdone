
// import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
// import adapter from "@sveltejs/adapter-auto";

// /** @type {import('@sveltejs/kit').Config} */
// const config = {
//   kit: {
//     adapter: adapter({
//       // Specify the Node.js runtime version
//       precompress: false
//     })
//   },
//   preprocess: vitePreprocess()
// };

// export default config;


import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import adapter from "@sveltejs/adapter-auto";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      // Specify the Node.js runtime version
      precompress: false
    })
  },
  preprocess: vitePreprocess(),
  // Specify runtime version for serverless function
  // This is just an example, replace it with your function configuration
  functions: {
    "api/**/*.js": {
      runtime: "nodejs14.x" // or any supported version
    }
  }
};

export default config;
