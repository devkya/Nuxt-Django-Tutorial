// nuxt.config.ts

import vuetify from 'vite-plugin-vuetify'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
// @ts-ignore
export default defineNuxtConfig({
    css: ['vuetify/lib/styles/main.sass', '/assets/scss/style.scss'], // vuetify ships precompiled css, no need to import sass
    build: {
      transpile: ['vuetify'],
    },
    vite: {
      define: {
        'process.env.DEBUG': false,
      },
    },
  
    target: 'static',
  
})