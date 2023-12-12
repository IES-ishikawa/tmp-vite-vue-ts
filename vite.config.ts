import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tsconfigPaths from 'vite-tsconfig-paths';
import checker from 'vite-plugin-checker';
import eslintPlugin from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		outDir: './build'
	},
	server: {
		open: false,
		strictPort: true,
		watch: {
			usePolling: true
		}
	},
	plugins: [
		vue(),
		tsconfigPaths(),
		checker({
			typescript: true,
			eslint: {
				lintCommand: 'eslint "./src/**/*.{ts,tsx,vue}"'
			}
		}),
		eslintPlugin()
	]
});
