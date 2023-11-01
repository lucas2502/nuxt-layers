import type { StorybookConfig } from "@storybook-vue/nuxt";

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook-vue/nuxt",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;

// import type { StorybookConfig } from "@storybook/vue3-vite";

// const config: StorybookConfig = {
//   stories: [
//     "../stories/**/*.mdx",
//     "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
//   ],
//   addons: [
//     "storybook-addon-vuetify3",
//     "storybook-addon-nuxt",
//     "@storybook/addon-links",
//     "@storybook/addon-essentials",
//     "@storybook/addon-interactions",
//   ],

//   framework: {
//     name: "@storybook/vue3-vite",
//     options: {},
//   },
//   docs: {
//     autodocs: "tag",
//   },

//   core: {
//     //we will add our vite builder here
//      builder: "storybook-builder-vite",
//   },
// };
// export default config;
