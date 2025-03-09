'use client'

import { signOut, useSession } from "next-auth/react";
import { useToast } from "./useToast";
import { useEffect } from "react";
import { axiosClient } from "@/lib/axiousClient";
import { useRefreshToken } from "./useRefreshToken";

const useAxiosAuth = () => {
  const { data: session } = useSession();
  const { refreshToken } = useRefreshToken();

  useEffect(() => {
    const requestIntercept = axiosClient.interceptors.request.use(
      (config: any) => {
        config.headers[
          "Authorization"
        ] = `Bearer ${session?.user?.accessToken}`;

        return config;
      },
      (error: any) => Promise.reject(error)
    );

    const responseIntercept = axiosClient.interceptors.response.use(
      async (response: any) => response,
      async (error: any) => {
        const prevRequest = error?.config;

        if (401 === error?.response?.status && !prevRequest?.sent) {
          prevRequest.sent = true;
          try {
            await refreshToken();

            prevRequest.headers[
              "Authorization"
            ] = `Bearer ${session?.user?.accessToken}`;
            return axiosClient(prevRequest);
          } catch (err) {
            signOut()
            window.location.replace("/auth/login");
          }
        } else {
          return Promise.reject(error);
        }
      }
    );

    return () => {
      axiosClient.interceptors.request.eject(requestIntercept);
      axiosClient.interceptors.response.eject(responseIntercept);
    };
  }, [session, refreshToken]);

  return axiosClient;
};

export default useAxiosAuth;
