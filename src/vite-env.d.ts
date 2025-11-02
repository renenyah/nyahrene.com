/// <reference types="vite/client" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue' // or your framework plugin

export default defineConfig({
  base: '/nyahrene.com/',  // <-- add this line
  plugins: [vue()]
})