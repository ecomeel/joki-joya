// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  buildDir: 'docs',
  devtools: { enabled: true },
  css: [
    { src: '/assets/styles/commons.scss', lang: 'scss' }
  ]
})
