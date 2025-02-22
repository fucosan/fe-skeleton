import { http, HttpRequestHandler } from 'msw';

const apiUrl = import.meta.env.VITE_APP_API_URL;

const api = new Proxy(http, {
  get(target, prop: keyof typeof http) {
    if (prop in target) {
      return (uri: string, resolver: Parameters<HttpRequestHandler>[1], options?: Parameters<HttpRequestHandler>[2]) => {
        return target[prop](apiUrl + uri, resolver, options);
      };
    }
    return undefined;
  },
});

export { api };
