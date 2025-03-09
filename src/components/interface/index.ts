import { BaseResponsePagination } from "@/lib/axiousClient";

interface Produk {
    id: string;
    nama_produk: string;
    barcode: string;
    deskripsi_produk: string;
    harga: number;
    stok: number;
    rating: number;
    foto: string;
    created_at: string;
    updated_at: string;
    kategori: {
        id: number;
        nama_kategori: string
    }
    created_by: {
        id: number;
        nama: string;
    }
    updated_by: {
        id: number;
        nama: string;
    }

}

export interface DataProduk {
    // id:number;
    produkCount: number;
    kategoriCount: number;
    produkKategoriCount: number;
    userCount: number;
    peminjamanCount: number;
}

export interface ProdukListFilter extends Partial<Produk> {
    dari_tahun?: string;
    ke_tahun?: string;
    page: number;
    pageSize: number;
}

export interface ProdukListResponse extends BaseResponsePagination {
    data: Produk[];
}


// kategori

interface Kategori {
    id: string;
    nama_kategori: string
    foto:string
}

export interface KategoriListResponse extends BaseResponsePagination {
    data: Kategori[];
}