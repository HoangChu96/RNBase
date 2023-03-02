import {getClient} from './graphql-client';

export const fetcher = <TData, TVariables>(
  query: string,
  variables?: TVariables,
): ((abortController?: any) => Promise<TData>) => {
  return async (abortController?: any) => {
    if (abortController?.signal) {
      abortController.signal.onabort = function () {
        console.log('Request canceled');
      };
    }
    const client = getClient(true, abortController);
    try {
      const res = await client.request<TData, TVariables>(query, variables);
      return res;
    } catch (error) {
      // console.log('API FAILED: ', error, query);
      console.log('API FAILED: ', error);
      throw new Error(error);
    }
  };
};
