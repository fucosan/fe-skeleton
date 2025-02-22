import { keepPreviousData, queryOptions } from "@tanstack/react-query";
import { getQueryString } from "@/lib/utils";
import { ky } from '@/lib/ky-with-auth'

export const getHelloWorld = <T extends Record<string, string>>(params: T) =>
  queryOptions({
    queryKey: ['hello-world', params],
    queryFn: async ({ signal }) => {
      const queryString = getQueryString<T>(params);
      const response = await ky.get('hello-world?' + queryString, {
        signal,
      }).json();

      return response;
    },
    placeholderData: keepPreviousData,
  })
