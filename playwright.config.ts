import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './src/tests',
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:8080/balance-on-tap/',
    reuseExistingServer: true, 
    port: 8080,
    timeout: 120 * 1000 
  },
  use: {
    baseURL: 'http://localhost:8080/balance-on-tap/',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure'
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  reporter: ['html', ['list']],
});