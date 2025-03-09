import { useToast } from '@/hook';
import useAxiosAuth from '@/hook/useAxiousAuth';
import { useQueryClient } from '@tanstack/react-query';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { LoginPayload, LoginResponse, ProfileResponse, RegisterPayload, RegisterResponse } from '../interface';
import { axiosClient } from '@/lib/axiousClient';
import { useMutation, useQuery } from "@tanstack/react-query";

const UseAuthModule = () => {
    const { toastError, toastSuccess, toastWarning } = useToast();
    const axiosAuthClient = useAxiosAuth();
    // const { uploadSingle } = useUploadFile();
    const { data: session } = useSession();
    const queryClient = useQueryClient()

    const router = useRouter();

    const register = async (
        payload: RegisterPayload
    ): Promise<RegisterResponse> => {
        return axiosClient.post("/auth/register", payload).then((res) => res.data);
    };

    const useRegister = () => {
        const [errorValidation, setErrorValidation] = useState<string[]>([]);
        const handleTyping = (name: string) => {
            setErrorValidation((value: any) => {
                const filter = value.filter(
                    (item: string) => item?.includes(name) === false
                );
                return filter;
            });
        };

        const handleShowError = (name: string) => {
            const message = errorValidation.find((item: string) =>
                item?.includes(name)
            );
            return message;
        };

        const { mutate, isLoading, isError, error } = useMutation({
            mutationFn: (payload: RegisterPayload) => register(payload),
            onSuccess: (response) => {
                toastSuccess(response.message);
                router.push("/auth/login");
            },
            // onMutate: () => {
            //   setErrorValidation([]);
            // },

            onError: (error: any) => {
                console.log("eerror", error);
                if (error.response.status === 302) {
                    return toastWarning(error.response.data.message);
                }
                if (error.response.status === 400) {
                    setErrorValidation(error.response.data.message);
                    return toastWarning(error.response.data.message);
                }
                toastError();
            },
        });
        return { mutate, isLoading, isError, error, handleShowError, handleTyping };
    };
    const login = async (payload: LoginPayload): Promise<LoginResponse> => {
        return axiosClient.post("/auth/login", payload).then((res) => res.data);
    };
    const useLogin = () => {
        const { mutate, isLoading } = useMutation(
            (payload: LoginPayload) => login(payload),
            {
                onSuccess: async (response) => {
                    console.log("res", response);
                    toastSuccess(response.message);
                    await signIn("credentials", {
                        id: response.data.id,
                        name: response.data.nama,
                        role: response.data.role,
                        email: response.data.email,
                        refreshToken: response.data.refresh_token,
                        accessToken: response.data.access_token,
                        redirect: false,
                    });

                    // // **Cek apakah login berhasil**
                    // if (signInResponse?.error) {
                    //     toastError("Gagal login, coba lagi!");
                    //     return;
                    // }

                    // // **Redirect manual setelah login berhasil**
                    // if (response.data.role === "admin") {
                    //     return router.push("/admin");
                    // }

                    if (response.data.role === "admin") {
                        return router.push("/admin");
                    }
                    router.push("/siswa");
                },
                onError: (error: any) => {
                    if (error.response.status == 422) {
                        toastWarning(error.response.data.message);
                    } else {
                        toastError();
                    }
                },
            }
        );
        return { mutate, isLoading };
    };
    const getProfile = async (): Promise<ProfileResponse> => {
        return axiosAuthClient.get("/auth/profile").then((res) => res.data);
    };

    const useProfile = () => {
        const { data, isLoading, isFetching } = useQuery(
            ["/auth/profile"],
            () => getProfile(),
            {
                select: (response) => response,
                staleTime: 1000 * 60 * 60,
                refetchInterval: 1000 * 60 * 60,
                refetchOnWindowFocus: false,
                // enabled: session?.user?.id !== undefined,
                enabled: !!session === true,
            }
        );

        return { data, isFetching, isLoading };
    };


    return {
        useRegister,
        useLogin,
        useProfile
    }

}

export default UseAuthModule