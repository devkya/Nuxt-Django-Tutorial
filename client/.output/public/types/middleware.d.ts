import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "/Users/devkya/Desktop/Xpertinc/Git/Nuxt-Django-Tutorial/client/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}