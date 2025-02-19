import { keepPreviousData, queryOptions } from "@tanstack/react-query";
import { getQueryString } from "@/lib/utils";

const apiURL = import.meta.env.VITE_API_URL;

export const getHelloWorld = <T extends Record<string, string>>(params: T) =>
  queryOptions({
    queryKey: ['hello-world', params],
    queryFn: async ({ signal }) => {
      const queryString = getQueryString<T>(params);
      const response = await fetch(
        apiURL + '/hello-world' + queryString,
        {
          signal,
        }
      );
      return response.json();
    },
    placeholderData: keepPreviousData,
  })
