import favicon from "./extensions/favicon.png";
import logoLogin from "./extensions/logo.png";
export default {
  config: {
    head: {
      favicon: favicon,
    },
    auth: {
      logo: logoLogin,
    },
  },
  locales: ["vi", "en"],
  bootstrap() {},
};
