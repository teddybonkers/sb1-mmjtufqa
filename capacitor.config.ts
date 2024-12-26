import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.horseracing.predictor',
  appName: 'Horse Racing Predictor',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
}

export default config;