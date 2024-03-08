// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  head: {
    title: "Joki Joya",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
  },
  // buildDir: "docs",
  target: "static",
  devtools: { enabled: true },
  css: [{ src: "/assets/styles/commons.scss", lang: "scss" }],
};
