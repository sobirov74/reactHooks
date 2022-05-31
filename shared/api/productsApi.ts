import HttpClient from "../utils/httpClient";

export const getPosts = () => {
  return HttpClient.doGet("/posts?_limit=32", {});
};

export const product = ({ query }: { query: string }) => {
  return HttpClient.doGet(`/products/${query}`, {});
};
