import { keepPreviousData, queryOptions } from "@tanstack/react-query";

const apiURL = import.meta.env.VITE_API_URL;

interface GetHelloWorldParams {
  name: string;
}

export const getHelloWorld = (params: GetHelloWorldParams) =>
  queryOptions({
    queryKey: ['hello-world', params.name],
    queryFn: async ({ signal }) => {
      const queryString = new URLSearchParams(params as any).toString();
      const response = await fetch(
        apiURL + '/hello-world' + (queryString ? '?' + queryString : ''),
        {
          signal,
        }
      );
      return response.json();
    },
    placeholderData: keepPreviousData,
  })
