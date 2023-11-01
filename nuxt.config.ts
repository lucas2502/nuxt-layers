// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

export default defineNuxtConfig({
  ssr: false,

  // extends: ["./ui"],

  build: {
    transpile: ["vuetify"],
  },

  // dir: {
  //   plugins: './lib/ui/plugin'
  // },

  modules: [
    // "@nuxtjs/storybook",
    // "@nuxt/ui",
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
});
