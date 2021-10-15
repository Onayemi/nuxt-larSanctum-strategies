export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Remlex Technologies',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "stylesheet", href:"https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css" },
    ],
    script: [
      { src:'/js/bootstrap.bundle.min.js' },
      // { src:'/js/bootstrap.Chart.min.js' },
      // { src:'/js/bootstrap.dashboard.js' },
      // { src:'/js/bootstrap.feather.min.js' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/bootstrap.min.css',
    '@/assets/css/dashboard.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],

  // router: {
  //   middleware: ["auth"]
  // },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'http://localhost:8000/api',
    credentials: true
  },

  auth: {
    strategies: {
      laravelSanctum: {
        provider: 'laravel/sanctum',
        url: 'http://localhost:8000',
        endpoints: {
          // We are using fortity route
          login: { 
            url: '/login' 
          },
          logout: { 
            url: '/logout' 
          },
          // We are using api route
          user: { 
            url: '/api/user' 
          }
        },
        user: {
          property: false
        }
      }
    },
    redirect: {
      login: '/auth/login',
      logout: '/auth/login',
      // callback: '/auth/login',
      home: '/admin/dashboard'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
