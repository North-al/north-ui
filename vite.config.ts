import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [uni()],
	resolve: {
		alias: {
			'~': '/src'
		}
	},
	// 配置全局sass变量
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@use '~/uni.scss';`
			}
		}
	}
})
