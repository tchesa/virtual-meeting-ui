import "../src/components/participants-list/participants-list.scss";
import "../src/components/badge/badge.scss";
import "../src/assets/style/variables/colors.scss";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
