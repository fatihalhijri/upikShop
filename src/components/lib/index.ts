import React from 'react'
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from 'next/navigation';
import { KategoriListResponse, ProdukListFilter, ProdukListResponse } from '../interface';
import { axiosClient } from '@/lib/axiousClient';
import { usePagination } from '../hook/usePagination';

const UseProdukModule = () => {
    const queryClient = useQueryClient()
    const router = useRouter()
    const defaultParams: ProdukListFilter = {
        page: 1,
        pageSize: 100,
        nama_produk: '',
        deskripsi_produk: '',
        harga: 0,
        stok: 0,
        rating: 0,

    }

    const getProdukList = async (): Promise<ProdukListResponse> => {
        return axiosClient.get('/produk/list').then((res) => res.data)
    }
    const useProdukList = () => {

        const { data, isFetching, isLoading, isError } = useQuery(
            {
                queryKey: ['/produk/list',],
                queryFn: () => getProdukList(),
                select: (response) => response,
            }
        );

        return {
            data,
            isFetching,

            isLoading,

        };

    }
    // const getProdukList = async (params: ProdukListFilter): Promise<ProdukListResponse> => {
    //     return axiosClient.get('/produk/list', { params: params }).then((res) => res.data)
    // }
    // const useProdukList = () => {
    //     const {
    //         params,
    //         setParams,
    //         handleFilter,
    //         handleClear,
    //         handlePageSize,
    //         handlePage,
    //         filterParams,
    //     } = usePagination(defaultParams);
    //     const { data, isFetching, isLoading, isError } = useQuery(
    //         {
    //             queryKey: ['/produk/list', filterParams],
    //             queryFn: () => getProdukList(filterParams),
    //             select: (response) => response,
    //         }
    //     );

    //     return {
    //         data,
    //         isFetching,
    //         filterParams,
    //         isLoading,
    //         params,
    //         setParams,
    //         handlePage,
    //         handlePageSize,
    //         handleFilter,
    //         handleClear,
    //     };

    // }
    const getKategoriList = async (): Promise<KategoriListResponse> => {
        return axiosClient.get('/kategori/list',).then((res) => res.data)
    }
    const useKategoriList = () => {

        const { data, isFetching, isLoading, isError } = useQuery(
            {
                queryKey: ['/kategori/list',],
                queryFn: () => getKategoriList(),
                select: (response) => response,
            }
        );

        return {
            data,
            isFetching,
            isLoading,

        };

    }

    return {
        useProdukList,
        useKategoriList
    }


}

export default UseProdukModule