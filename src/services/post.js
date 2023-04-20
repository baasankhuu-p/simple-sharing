import axios from "axios";
import { RestApiUrl } from "../constants";
export const getPosts = () => {
  return axios.get("http://localhost:3001/api/posts");
};
