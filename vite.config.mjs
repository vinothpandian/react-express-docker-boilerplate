import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
export default defineConfig({
  plugins: [react()],
  build: { outDir: 'dist/client', target: 'es2020' },
  test: { environment: 'jsdom', globals: true, setupFiles: ['./src/setupTest.js'], coverage: { provider: 'v8', include: ['src/client/**/*.jsx', 'src/client/redux/*.js', 'src/server/app.jsx'], exclude: ['**/__tests__/**', 'src/client/index.jsx'] } }
})
