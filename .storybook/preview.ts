// import { type Preview } from "@storybook/vue3";

// const preview: Preview = {
//   parameters: {
//     actions: { argTypesRegex: "^on[A-Z].*" },
//     controls: {
//       matchers: {
//         color: /(background|color)$/i,
//         date: /Date$/,
//       },
//     },
//   },

// };
// console.log('.storybook Preview =============')
// export default preview;

import type { Preview } from "@storybook/vue3";
// import   from "@storybook/vue3";
import { withVuetify } from "storybook-addon-vuetify3/dist/decorators";
import { myCustomLightTheme } from "../plugins/vuetify";
import { setup } from "@storybook/vue3";

setup((app) => {
  // Registers your app's plugins into Storybook
  // registerPlugins(app);
});

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

export const globalTypes = {
  vuetify: {
    theme: {
      defaultTheme: "myCustomLightTheme",
      themes: {
        myCustomLightTheme,
      },
    },
  },
};

export const decorators = [withVuetify];
