export default defineNuxtConfig({
  ssr: false,
  components: [{ path: "./components", prefix: "UI", global: true }],
  // extends: ["../"],
});
