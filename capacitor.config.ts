import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'zanis.web.app',
  appName: 'zanis',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
