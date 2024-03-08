// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  buildDir: 'doc',
  devtools: { enabled: true },
  css: [
    { src: '/assets/styles/commons.scss', lang: 'scss' }
  ]
})
