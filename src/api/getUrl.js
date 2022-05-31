import axios from "axios";

export const getUrl = ({ page = 1, limit = 4 }) => {
  return axios.get(
    `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`
  );
};
