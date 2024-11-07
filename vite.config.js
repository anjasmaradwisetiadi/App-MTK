import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
      plugins: [react()],
      define: {
        'process.env.APP_URL_REQRES': JSON.stringify(env.APP_URL_REQRES),
      },
      css: {
        preprocessorOptions: {
            scss: {
              api: 'modern-compiler'
            }
      }
    }
  };
});
