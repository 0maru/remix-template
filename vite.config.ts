import { unstable_vitePlugin as remix } from '@remix-run/dev'
import { installGlobals } from '@remix-run/node'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

installGlobals()

// storybook で起動しているかを判定する
const isStorybook = process.argv[1]?.includes('storybook')

console.log(isStorybook)
export default defineConfig({
  server: {
    port: 3030,
  },
  plugins: [
    ...(isStorybook ? [] : [
      // Remix Vite プラグインはdevサーバ、productionビルドで使用するものなので、
      // Storybook で使用する場合は除外する
      remix({
        ignoredRouteFiles: ['**/.*'],
      }),
    ]),
    tsconfigPaths(),
  ]
})
