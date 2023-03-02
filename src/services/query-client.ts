import NetInfo from '@react-native-community/netinfo';
import {
  DefaultOptions,
  MutationCache,
  onlineManager,
  QueryCache,
  QueryClient,
} from '@tanstack/react-query';

interface QueryClientConfig {
  queryCache?: QueryCache;
  mutationCache?: MutationCache;
  defaultOptions?: DefaultOptions;
}

let isConnected = true;
onlineManager.setOnline(isConnected);
// map net info to react query
onlineManager.setEventListener(setOnline => {
  return NetInfo.addEventListener(state => {
    if (state.isConnected !== isConnected) {
      setOnline(state.isConnected || undefined);
      isConnected = !!state.isConnected;
    }
  });
});

const defaultConfig: QueryClientConfig = {
  // set default config
  defaultOptions: {
    queries: {
      cacheTime: 1000 * 60 * 60, // default 5 minutes
    },
  },
};

const queryClient = new QueryClient(defaultConfig);
export default queryClient;
