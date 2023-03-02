import Config from 'react-native-config';

export interface ENV {
  BASE_URL: string;
  WS_URL: string;
  getConstants(): void;
}

const env: ENV = Config as any;

export default env;
