import { useEffect, useState } from "react";
import ProductCard from "../ProductCard";
import UseProdukModule from "../lib";



const AllProduk = ({ selectedCategory }: any) => {
  const { useProdukList } = UseProdukModule();
  const {
    data,
    isFetching,
    // filterParams,
    // params,
    // handlePage,
    // handlePageSize,
    // setParams,
    // handleFilter,
    // handleClear,
  } = useProdukList();

  const [showTerlaris, setShowTerlaris] = useState(true);
  const filteredProducts =
    selectedCategory === "Semua Kategori"
      ? data?.data
      : data?.data.filter((item) =>
          item.kategori.nama_kategori.includes(selectedCategory)
        );

  useEffect(() => {
    if (selectedCategory === "Semua Kategori") {
      setShowTerlaris(true);
    } else {
      setShowTerlaris(false);
    }
  }, [selectedCategory]);

  return (
    <div className="h-auto pb-7">
      <div className="">
        

        <h2 className="font-medium md:text-2xl uppercase">
          {selectedCategory}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-2  xl:grid-cols-4 md:gap-8 gap-4">
          {filteredProducts?.map((item, index) => (
            <ProductCard
              key={index}
              img={item.foto}
              title={item.nama_produk}
              desc={item.deskripsi_produk}
              price={item.harga}
              stok={item.stok}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default AllProduk;
