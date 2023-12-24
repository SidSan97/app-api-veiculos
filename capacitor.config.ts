import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'app-api-veiculos',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
