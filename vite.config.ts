import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import { resolve } from 'path'
import tsconfigPaths from 'vite-tsconfig-paths'
// import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  // resolve: {
  //   alias: {
  //     '@': path.resolve(__dirname, './src'),
  //     '@assets': path.resolve(__dirname, './src/assets'),
  //     '@components': path.resolve(__dirname, './src/components'),
  //   },
  // },

  // resolve: {
  //   alias: [
  //     { find: '@', replacement: path.resolve(__dirname, 'src') },
  //     {
  //       find: '@components',
  //       replacement: path.resolve(__dirname, 'src/components'),
  //     },
  //   ],
  // },
  plugins: [react(), tsconfigPaths()],
})
