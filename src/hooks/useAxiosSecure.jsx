import axios from "axios";
import { useAuth } from "../provider/AuthProvider";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const instance = axios.create({
  baseURL: "https://career-bridge-server-fh-asgn10.vercel.app",
});

const useAxiosSecure = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    //interceptor --> observer ...
    const requestInterceptor = instance.interceptors.request.use((config) => {
      console.log(config);
      config.headers.authorization = `Bearer ${currentUser.accessToken}`;
      config.headers.token_email = currentUser.email;
      return config;
    });

    instance.interceptors.response.use(
      (res) => {
        return res;
      },
      (err) => {
        const status = err.status;
        if (status === 401 || status === 403) {
          console.log("Bad request: log out the user");
          logout().then(() => {
            navigate("/register");
          });
        }
      }
    );
    // to prevent memory leak
    return () => {
      instance.interceptors.request.eject(requestInterceptor);
    };
  }, [currentUser]);

  return instance;
};

export default useAxiosSecure;
