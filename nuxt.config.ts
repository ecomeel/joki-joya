// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Joki Joya",
    },
  },
  buildDir: "docs",
  target: "static",
  devtools: { enabled: true },
  css: [{ src: "/assets/styles/commons.scss", lang: "scss" }],
});
