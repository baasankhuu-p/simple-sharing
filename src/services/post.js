import axios from "axios";
import { RestApiUrl } from "../constants";
export const getPosts = () => {
  return axios.get(`${RestApiUrl}/posts`);
};
export const getPost = (id) => {
  return axios.get(`${RestApiUrl}/posts/${id}`);
};
export const createPost = (token, post) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return axios.post(`${RestApiUrl}/posts/`, post, config);
};
export const updatePost = (post, id) => {
  return axios.post(`${RestApiUrl}/posts/${id}`, post);
};
