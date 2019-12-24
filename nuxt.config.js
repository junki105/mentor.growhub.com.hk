if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

export default {
  mode: 'universal',
  env: {
    STRIPE_PUBLISHABLE_KEY: process.env.STRIPE_PUBLISHABLE_KEY,
    NODE_ENV: process.env.NODE_ENV || 'development'
  },
  /*
   ** Headers of the page
   */
  head: {
    title: 'Tech Support - Powerd by Growhub',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'メンターとしてプログラミングをサポートしていきます。Web開発をしたい企業やこれからプログラマーを目指す初学者、さらにプログラマーとして成長したい方に向けたサービスです。'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: '//js.stripe.com/v3/', async: true }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/composition-api.js'
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',

    '@nuxt/typescript-build'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/dotenv',
    '@bazzite/nuxt-netlify'
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },

  srcDir: 'src',

  dotenv: {
    path: '.',
    filename: '.env'
  },

  netlify: { 
    redirects: [
      {
        from: '/dummy.html',
        to: '/',
        status: 301
      },
    ]
  },

  generate: {
    routes: [
      '/term',
      '/policy/privacy',
      '/law',
      '/plan/business/b-d2gj39w4',
      '/plan/business/b-2spnamzv',
      '/contact/thanks',
      '/checkout/thanks',
    ]
  }
}
