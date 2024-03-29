// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {head: {
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' }
    ],
    title: 'Simply Royalty'
  }},
  devtools: { enabled: true },
  modules: ['@nuxtjs/google-fonts'],
  googleFonts: {
    families: {
      // Add the font families you want to use
      'Playfair Display': [400, 700],
      Raleway: [400, 700],
      'La Belle Aurore': [400, 700]
    },
    display: 'swap', // Use the 'swap' value for optimal performance
    download: true
  }
})
