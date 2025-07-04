import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Đổi YOUR_GITHUB_USERNAME và REPO_NAME cho đúng
export default defineConfig({
  base: '/hello-world/',
  plugins: [react()],
}
