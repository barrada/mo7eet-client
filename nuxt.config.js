import colors from 'vuetify/es5/util/colors'


export default {
  mode: 'universal',
  env: {
    // baseUrl: process.env.BASE_URL || 'http://localhost:3000'
    baseUrl: process.env.NODE_ENV == 'production' ? 'http://mo7eet.com' : 'http://localhost:3000'
  },
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: 'محيط - ' + '%s',
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'محيط - اكتشف الجديد و أفضل المقالات ومقاطع الفيديو' },
      { hid: 'keywords', name: 'keywords', content: 'مقالات, فيديو, رياضه, وصفات طبخ, تكنولوجيا, فوتوغرافيا, موسيقى, أخبار, كتب, موضة, فن, سفر ' },
      { hid:'name',name:'title', itemprop: 'title', content:'محيط'},
      { hid:'image',name:'image', itemprop: 'image', content:'https://mo7eet.com/logo.png'},
      { hid:'og:description',name:'og:description', property: 'og:description', 'محيط - اكتشف الجديد و أفضل المقالات ومقاطع الفيديو'},
      { hid:'og:url',name:'og:url', property: 'og:url', content:'https://mo7eet.com'},
      { hid:'og:image',name:'og:image', property: 'og:image', content:'https://mo7eet.com/logo.png'},
      { hid:'twitter:card',name:'twitter:card', content:'summary_large_image'},
      { hid:'twitter:title',name:'twitter:title', content:'محيط'},
      { hid:'twitter:description',name:'twitter:description', 'محيط - اكتشف الجديد و أفضل المقالات ومقاطع الفيديو'},
      { hid:'twitter:image',name:'twitter:image', content:'https://mo7eet.com/logo.png'},
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel:'canonical',href:'https://mo7eet.com'}    
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/fonts/almarai.css',
    '~/assets/css/style.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {src: '~/plugins/SocialSharing'},
    {src: '~/plugins/InfiniteLoading'},
    {src: '~/plugins/Moment'},
    {src: '~/plugins/VueGtag'},
    // {src: '~/plugins/InfiniteLoading', mode:'client'},
   
  ],
  /* 
   Middle wear to force SSL - redirect to https
  */
  serverMiddleware: ["redirect-ssl"],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
    '@nuxtjs/router',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxtjs/sitemap',
    // google adsense
    ['@nuxtjs/google-adsense', {
      id: 'ca-pub-1951746776327943'
    }]
    
  ],
  /*
  Sitemap
  */
 sitemap: {
    hostname: 'https://mo7eet.com',
    gzip: true,
    exclude: [    
      '/mtadmin/**'
    ],
    routes: [
      '/:title',
      '/رياضه',
      '/وصفات',
      '/العاب',
      '/طهي/طريقه-عمل/:title',

    ]

 },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    defaultAssets: {
      font: true,
      icons: 'md'
    },
    icons: {
      iconfont: 'md',
    },
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
