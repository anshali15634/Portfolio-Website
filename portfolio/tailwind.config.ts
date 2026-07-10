import type { Config } from "tailwindcss";

const config: Config = {
  // ...
  theme: {
    extend: {
      fontFamily: {
        handwriting: ["var(--font-handwriting)"],
      },
      // ...your existing extensions
    },
  },
};

export default config;