import { defineConfig, loadEnv, ConfigEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import tailwindcss from '@tailwindcss/vite'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename)

export default defineConfig(({ mode }: ConfigEnv) => {
  const env = loadEnv(mode, process.cwd());
  const port = env.VITE_APP_PORT || '3000';

  return {
    plugins: [
      TanStackRouterVite({ autoCodeSplitting: true }),
      react(),
      tailwindcss(),
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src')
      }
    },
    server: {
      port: parseInt(port),
    },
  };
});
