import axios from "axios";

const instance = axios.create({
  baseURL: "https://career-bridge-server-fh-asgn10.vercel.app",
  timeout: 1000,
});

const useAxios = () => {
  return instance;
};

export default useAxios;
