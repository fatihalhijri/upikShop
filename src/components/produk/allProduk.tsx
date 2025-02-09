import { useEffect, useState } from "react";
import ProductCard from "../ProductCard";

const productsTerlaris = [
  {
    img: "/sabun-sunfia-b.webp",
    title: "Sabun Serbaguna Harum Jeruk Nipis",
    desc: "Sabun untuk cuci",
    rating: 5,
    stok: 12,
    price: "55000",
    category: "Sabun Serbaguna",
  },
  {
    img: "/sabun-sunfia-a.webp",
    title: "Sabun Pel Harum Sereh Original",
    desc: "Sabun untuk lantai",
    rating: 5,
    stok: 15,
    price: "55000",
    category: "Sabun Serbaguna",
  },
  {
    img: "/sabun-sunfia-c.webp",
    title: "Sabun Cuci Baju Harum TutiFruty",
    desc: "Pemutih baju",
    rating: 5,
    stok: 4,
    price: "55000",
    category: "Sabun Serbaguna",
  },
  {
    img: "/detergent.webp",
    title: "Pemutih Pakaian Original Pembersih Noda",
    desc: "Pemutih baju",
    rating: 4,
    stok: 10,
    price: "55000",
    category: "Pemutih",
  },
  {
    img: "/sabun/sabun-1.webp",
    title: "Sabun Batang Daun Kelor Original",
    desc: "testing testing testing",
    rating: 5,
    stok: 21,
    price: "10000",
    category: "Sabun Batang",
  },
];
const productsData = [
  //data ketika filter
  //sabun
  {
    img: "/sabun-sunfia-b.webp",
    title: "Sabun Serbaguna Harum Jeruk Nipis",
    desc: "Sabun untuk cuci",
    rating: 5,
    stok: 12,
    price: "55000",
    category: "Sabun Serbaguna",
  },
  {
    img: "/sabun-sunfia-a.webp",
    title: "Sabun Pel Harum Sereh Original",
    desc: "Sabun untuk lantai",
    rating: 5,
    stok: 15,
    price: "55000",
    category: "Sabun Serbaguna",
  },
  {
    img: "/sabun-sunfia-c.webp",
    title: "Sabun Cuci Baju Harum TutiFruty",
    desc: "Pemutih baju",
    rating: 5,
    stok: 4,
    price: "55000",
    category: "Sabun Serbaguna",
  },
  {
    img: "/detergent.webp",
    title: "Pemutih Pakaian Original Pembersih Noda",
    desc: "Pemutih baju",
    rating: 4,
    stok: 10,
    price: "55000",
    category: "Sabun Serbaguna",
  },
  {
    img: "/detergent.webp",
    title: "Pemutih Pakaian Original Pembersih Noda",
    desc: "Pemutih baju",
    rating: 4,
    stok: 10,
    price: "55000",
    category: "Pemutih",
  },
  //sabun batang
  {
    img: "/sabun/sabun-1.webp",
    title: "Sabun Batang Sereh Alami ",
    desc: "Sabun Batang Sereh Alami",
    rating: 5,
    stok: 20,
    price: "25000",
    category: "Sabun Batang",
  },
  {
    img: "/sabun/sabun-2.webp",
    title: "Sabun Batang Sereh Alami ",
    desc: "Sabun Batang Sereh Alami",
    rating: 5,
    stok: 20,
    price: "25000",
    category: "Sabun Batang",
  },
  {
    img: "/sabun/sabun-3.webp",
    title: "Sabun Batang Sereh Alami ",
    desc: "Sabun Batang Sereh Alami",
    rating: 5,
    stok: 20,
    price: "25000",
    category: "Sabun Batang",
  },
  {
    img: "/sabun/sabun-4.webp",
    title: "Sabun Batang Sereh Alami ",
    desc: "Sabun Batang Sereh Alami",
    rating: 5,
    stok: 20,
    price: "25000",
    category: "Sabun Batang",
  },
  {
    img: "/sabun/sabun-5.webp",
    title: "Sabun Batang Sereh Alami ",
    desc: "Sabun Batang Sereh Alami",
    rating: 5,
    stok: 20,
    price: "25000",
    category: "Sabun Batang",
  },
  {
    img: "/sabun/sabun-6.webp",
    title: "Sabun Batang Sereh Alami ",
    desc: "Sabun Batang Sereh Alami",
    rating: 5,
    stok: 20,
    price: "25000",
    category: "Sabun Batang",
  },
  {
    img: "/sabun/sabun-7.webp",
    title: "Sabun Batang Sereh Alami ",
    desc: "Sabun Batang Sereh Alami",
    rating: 5,
    stok: 20,
    price: "25000",
    category: "Sabun Batang",
  },
  {
    img: "/sabun/sabun-8.webp",
    title: "Sabun Batang Sereh Alami ",
    desc: "Sabun Batang Sereh Alami",
    rating: 5,
    stok: 20,
    price: "25000",
    category: "Sabun Batang",
  },
  {
    img: "/sabun/sabun-9.webp",
    title: "Sabun Batang Sereh Alami ",
    desc: "Sabun Batang Sereh Alami",
    rating: 5,
    stok: 20,
    price: "25000",
    category: "Sabun Batang",
  },
  {
    img: "/sabun/sabun-10.webp",
    title: "Sabun Batang Sereh Alami ",
    desc: "Sabun Batang Sereh Alami",
    rating: 5,
    stok: 20,
    price: "25000",
    category: "Sabun Batang",
  },

  //buah
  {
    img: "/buah/anggur.webp",
    title: "Anggur Segar Pinot Noir original  ",
    desc: "Sabun Buah segar",
    rating: 5,
    stok: 17,
    price: "25000",
    category: "Buah-Buahan",
  },
  {
    img: "/buah/jeruk-santang.webp",
    title: "Jeruk Santang Segar Manis Madu ",
    desc: "Sabun Buah segar",
    rating: 5,
    stok: 3,
    price: "25000",
    category: "Buah-Buahan",
  },
  {
    img: "/buah/lengkeng.webp",
    title: "Kelengkeng Matalada Original ",
    desc: "Sabun Buah segar",
    rating: 5,
    stok: 14,
    price: "25000",
    category: "Buah-Buahan",
  },
];
const SabunCuci = [
  {
    img: "/sabun-sunfia-b.webp",
    title: "Sabun Serbaguna Harum Jeruk Nipis",
    desc: "Sabun untuk cuci",
    rating: 5,
    stok: 12,
    price: "55000",
    category: "Sabun Serbaguna",
  },
  {
    img: "/sabun-sunfia-a.webp",
    title: "Sabun Pel Harum Sereh Original",
    desc: "Sabun untuk lantai",
    rating: 3,
    stok: 15,
    price: "55000",
    category: "Sabun Serbaguna",
  },
  {
    img: "/sabun-sunfia-c.webp",
    title: "Sabun Cuci Baju Harum TutiFruty",
    desc: "Pemutih baju",
    rating: 5,
    stok: 4,
    price: "55000",
    category: "Sabun Serbaguna",
  },
  {
    img: "/detergent.webp",
    title: "Pemutih Pakaian Original Pembersih Noda",
    desc: "Pemutih baju",
    rating: 4,
    stok: 10,
    price: "55000",
    category: "Pemutih",
  },
];

const BuahBuahan = [
  {
    img: "/buah/anggur.webp",
    title: "Anggur Segar Pinot Noir original  ",
    desc: "Sabun Buah segar",
    rating: 5,
    stok: 17,
    price: "25000",
    category: "Buah-Buahan",
  },
  {
    img: "/buah/jeruk-santang.webp",
    title: "Jeruk Santang Segar Manis Madu ",
    desc: "Sabun Buah segar",
    rating: 5,
    stok: 3,
    price: "25000",
    category: "Buah-Buahan",
  },
  {
    img: "/buah/lengkeng.webp",
    title: "Kelengkeng Matalada Original ",
    desc: "Sabun Buah segar",
    rating: 5,
    stok: 14,
    price: "25000",
    category: "Buah-Buahan",
  },
];
const SabunBatang = [
  {
    img: "/sabun/sabun-1.webp",
    title: "Sabun Batang Sereh Alami ",
    desc: "Sabun Batang Sereh Alami",
    rating: 5,
    stok: 20,
    price: "25000",
    category: "Sabun Batang",
  },
  {
    img: "/sabun/sabun-2.webp",
    title: "Sabun Batang Sereh Alami ",
    desc: "Sabun Batang Sereh Alami",
    rating: 5,
    stok: 20,
    price: "25000",
    category: "Sabun Batang",
  },
  {
    img: "/sabun/sabun-3.webp",
    title: "Sabun Batang Sereh Alami ",
    desc: "Sabun Batang Sereh Alami",
    rating: 5,
    stok: 20,
    price: "25000",
    category: "Sabun Batang",
  },
  {
    img: "/sabun/sabun-4.webp",
    title: "Sabun Batang Sereh Alami ",
    desc: "Sabun Batang Sereh Alami",
    rating: 5,
    stok: 20,
    price: "25000",
    category: "Sabun Batang",
  },
  {
    img: "/sabun/sabun-5.webp",
    title: "Sabun Batang Sereh Alami ",
    desc: "Sabun Batang Sereh Alami",
    rating: 5,
    stok: 20,
    price: "25000",
    category: "Sabun Batang",
  },
  {
    img: "/sabun/sabun-6.webp",
    title: "Sabun Batang Sereh Alami ",
    desc: "Sabun Batang Sereh Alami",
    rating: 5,
    stok: 20,
    price: "25000",
    category: "Sabun Batang",
  },
  {
    img: "/sabun/sabun-7.webp",
    title: "Sabun Batang Sereh Alami ",
    desc: "Sabun Batang Sereh Alami",
    rating: 5,
    stok: 20,
    price: "25000",
    category: "Sabun Batang",
  },
  {
    img: "/sabun/sabun-8.webp",
    title: "Sabun Batang Sereh Alami ",
    desc: "Sabun Batang Sereh Alami",
    rating: 5,
    stok: 20,
    price: "25000",
    category: "Sabun Batang",
  },
  {
    img: "/sabun/sabun-9.webp",
    title: "Sabun Batang Sereh Alami ",
    desc: "Sabun Batang Sereh Alami",
    rating: 5,
    stok: 20,
    price: "25000",
    category: "Sabun Batang",
  },
  {
    img: "/sabun/sabun-10.webp",
    title: "Sabun Batang Sereh Alami ",
    desc: "Sabun Batang Sereh Alami",
    rating: 5,
    stok: 20,
    price: "25000",
    category: "Sabun Batang",
  },
];

const AllProduk = ({ selectedCategory }: any) => {
  const [showTerlaris, setShowTerlaris] = useState(true);
  const filteredProducts =
    selectedCategory === "Semua Kategori"
      ? productsData
      : productsData.filter((item) => item.category.includes(selectedCategory));

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
        {showTerlaris && (
          <div>
            <div className="pb-8">
              <h2 className="font-medium md:text-2xl uppercase">
                Produk Terlaris
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 xl:gap-6 lg:gap-4 md:gap-3 gap-2 ">
                {productsTerlaris.map((item, index) => (
                  <ProductCard
                    key={index}
                    img={item.img}
                    title={item.title}
                    desc={item.desc}
                    price={item.price}
                    stok={item.stok}
                    rating={item.rating}
                  />
                ))}
              </div>
            </div>
            <div className="pb-8">
              <h2 className="font-medium md:text-2xl uppercase">
                Sabun Serbaguna
              </h2>
              <div className="grid grid-cols-2    md:grid-cols-2  xl:grid-cols-4 md:gap-8 gap-4   ">
                {SabunCuci.map((item, index) => (
                  <ProductCard
                    key={index}
                    img={item.img}
                    title={item.title}
                    desc={item.desc}
                    price={item.price}
                    stok={item.stok}
                    rating={item.rating}
                  />
                ))}
              </div>
            </div>
            <div className="pb-8">
              <h2 className="font-medium md:text-2xl uppercase">Buah-Buahan</h2>
              <div className="grid grid-cols-2    md:grid-cols-2  xl:grid-cols-4 md:gap-8 gap-4   ">
                {BuahBuahan.map((item, index) => (
                  <ProductCard
                    key={index}
                    img={item.img}
                    title={item.title}
                    desc={item.desc}
                    price={item.price}
                    stok={item.stok}
                    rating={item.rating}
                  />
                ))}
              </div>
            </div>
            <div className="pb-8">
              <h2 className="font-medium md:text-2xl uppercase">
                Sabun Batang
              </h2>
              <div className="grid grid-cols-2    md:grid-cols-2  xl:grid-cols-4 md:gap-8 gap-4   ">
                {SabunBatang.map((item, index) => (
                  <ProductCard
                    key={index}
                    img={item.img}
                    title={item.title}
                    desc={item.desc}
                    price={item.price}
                    stok={item.stok}
                    rating={item.rating}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        <h2 className="font-medium md:text-2xl uppercase">
          {selectedCategory}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-2  xl:grid-cols-4 md:gap-8 gap-4">
          {filteredProducts.map((item, index) => (
            <ProductCard
              key={index}
              img={item.img}
              title={item.title}
              desc={item.desc}
              price={item.price}
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
