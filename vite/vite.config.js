import vue from "@vitejs/plugin-vue";
const path = require("path");
/**
 * @type {import('vite').UserConfig}
 */
// function resolve(dir) {
//   return path.join(__dirname, "./", dir);
// }
export default {
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
};
