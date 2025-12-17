import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // iOS Safari (особенно при доступе по LAN) часто агрессивно кэширует ассеты.
    // Запрещаем кэш на dev-сервере, чтобы изменения точно подтягивались.
    headers: {
      'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
      Pragma: 'no-cache',
      Expires: '0',
      'Surrogate-Control': 'no-store',
    },
  },
})
