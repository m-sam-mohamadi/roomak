// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  routeRules: {
    '/branch': { ssr:false},
     
  },
  modules: [
    "@primevue/nuxt-module",
    "nuxt-booster", 
  ],
  css: ["@/assets/styles/main.scss", "@/assets/styles/tailwind.css"],
  primevue: {
    options: { theme: "none", ripple: true },
    autoImport: true,
  },
  postcss: {
    plugins: {
      "postcss-import": {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  components: {
    dirs: [
      "@/components/*",
      {
        path: "@/components",
        pathPrefix: false,
      },
    ],
  },
  nitro:{
    // storage:{
    //   redis:{
    //     driver:'redis',
    //     port:6379,
    //     host:'127.0.0.1',
    //     username:'',
    //     password:'',
    //     db:0,
    //     tls:{}
    //   }
    // }
  },
  // booster: {
  //   detection: {
  //     performance: true,
  //     browserSupport: true,
  //   },

  //   performanceMetrics: {
  //     device: {
  //       hardwareConcurrency: { min: 2, max: 48 },
  //       deviceMemory: { min: 2 },
  //     },
  //     timing: {
  //       fcp: 800,
  //       dcl: 1200,
  //     },
  //   },

  //   // fonts: [
  //   //   {
  //   //     family: "Font A",
  //   //     locals: ["Font A"],
  //   //     fallback: ["Arial", "sans-serif"],
  //   //     variances: [
  //   //       {
  //   //         style: "normal",
  //   //         weight: 400,
  //   //         sources: [
  //   //           { src: "@/assets/fonts/font-a-regular.woff", type: "woff" },
  //   //           { src: "@/assets/fonts/font-a-regular.woff2", type: "woff2" },
  //   //         ],
  //   //       },
  //   //       {
  //   //         style: "italic",
  //   //         weight: 400,
  //   //         sources: [
  //   //           { src: "@/assets/fonts/font-a-regularItalic.woff", type: "woff" },
  //   //           {
  //   //             src: "@/assets/fonts/font-a-regularItalic.woff2",
  //   //             type: "woff2",
  //   //           },
  //   //         ],
  //   //       },
  //   //       {
  //   //         style: "normal",
  //   //         weight: 700,
  //   //         sources: [
  //   //           { src: "@/assets/fonts/font-a-700.woff", type: "woff" },
  //   //           { src: "@/assets/fonts/font-a-700.woff2", type: "woff2" },
  //   //         ],
  //   //       },
  //   //     ],
  //   //   },
  //   // ],

  //   // targetFormats: ["webp", "avif", "jpg|jpeg|png|gif"],

  //   componentAutoImport: false,
  //   componentPrefix: undefined,

  //   /**
  //    * IntersectionObserver rootMargin for Compoennts and Assets
  //    */
  //   lazyOffset: {
  //     component: "0%",
  //     asset: "0%",
  //   },
  // },

  // image: {
  //   screens: {
  //     default: 320,
  //     xxs: 480,
  //     xs: 576,
  //     sm: 768,
  //     md: 996,
  //     lg: 1200,
  //     xl: 1367,
  //     xxl: 1600,
  //     "4k": 1921,
  //   },

  //   domains: ["img.youtube.com", "i.vimeocdn.com"],

  //   alias: {
  //     youtube: "https://img.youtube.com",
  //     vimeo: "https://i.vimeocdn.com",
  //   },
  // },
});