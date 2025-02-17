import unoConfig from './uno.config';

// https://nuxt.com/docs/api/configuration/nuxt-config
declare module '@nuxt/schema' {
  interface NuxtConfig {
    shadcn?: {
      prefix?: string;
      componentDir?: string;
    };
  }
}

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@unocss/nuxt', '@vueuse/nuxt', 'shadcn-nuxt'],
  unocss: unoConfig,
  css: ['@unocss/reset/normalize.css'],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui',
  },
});
