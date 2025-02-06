import { useEffect, useState } from "react";
import ProductCard from "../ProductCard";

const productsTerlaris = [
  {
    img: "/sabun-sunfia-b.webp",
    title: "Sabun Cuci Serbaguna ",
    desc: "Sabun untuk cuci",
    rating: 4,
    stok: 4,
    price: "55.000",
    category: "Sabun Cuci Serbaguna",
  },
  {
    img: "/sabun-sunfia-a.webp",
    title: "Sabun Pel Harum",
    desc: "Sabun untuk lantai",
    rating: 3,
    stok: 4,
    price: "45.000",
    category: "Sabun Cuci Serbaguna",
  },
  {
    img: "/sabun-sunfia-c.webp",
    title: "Pemutih Pakaian",
    desc: "Pemutih baju",
    rating: 5,
    stok: 10,
    price: "30.000",
    category: "Sabun Cuci Serbaguna",
  },
  {
    img: "/sabun-sunfia-c.webp",
    title: "Pemutih Pakaian",
    desc: "Pemutih baju",
    rating: 5,
    stok: 10,
    price: "30.000",
    category: "Pemutih",
  },
  {
    img: "/sabun-batang-1.png",
    title: "Sabun Batang",
    desc: "testing testing testing",
    rating: 5,
    stok: 10,
    price: "30.000",
    category: "Sabun Batang",
  },
  {
    img: "/nipis_bg.webp",
    title: "Jeruk  Nipis Segar",
    desc: "Buah segar",
    rating: 5,
    stok: 20,
    price: "25.000",
    category: "BuahBuahan",
  },
];
const productsData = [
  {
    img: "/sabun-sunfia-b.webp",
    title: "Sabun Cuci Serbaguna ",
    desc: "Sabun untuk cuci",
    rating: 4,
    stok: 4,
    price: "55.000",
    category: "Sabun Cuci Serbaguna",
  },
  {
    img: "/sabun-sunfia-a.webp",
    title: "Sabun Pel Harum",
    desc: "Sabun untuk lantai",
    rating: 3,
    stok: 4,
    price: "45.000",
    category: "Sabun Cuci Serbaguna",
  },
  {
    img: "/sabun-sunfia-c.webp",
    title: "Pemutih Pakaian",
    desc: "Pemutih baju",
    rating: 5,
    stok: 10,
    price: "30.000",
    category: "Sabun Cuci Serbaguna",
  },
  {
    img: "/sabun-sunfia-c.webp",
    title: "Pemutih Pakaian",
    desc: "Pemutih baju",
    rating: 5,
    stok: 10,
    price: "30.000",
    category: "Pemutih",
  },
  {
    img: "/sabun-b.jpg",
    title: "Sabun Batang",
    desc: "Pemutih baju",
    rating: 5,
    stok: 10,
    price: "30.000",
    category: "Sabun Batang",
  },
  {
    img: "/nipis_bg.webp",
    title: "Jeruk  Nipis Segar",
    desc: "Buah segar",
    rating: 5,
    stok: 20,
    price: "25.000",
    category: "BuahBuahan",
  },
];
const SabunCuci = [
  {img: "/nipis_bg.webp",
      title: "Jeruk  Nipis Segar",
      desc: "Sabun Buah segar",
      rating: 5,
      stok: 20,
      price: "25.000",
      category: "BuahBuahan",},
]

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
      <div className="container">
        {showTerlaris && (
          <div>
            <div className="pb-8">
              <h2 className="font-medium text-2xl pb-4 uppercase">
                Produk Terlaris
              </h2>
              <div className="grid grid-cols-2    md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 md:gap-8 gap-4   ">
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
              <h2 className="font-medium text-2xl pb-4 uppercase">
                Sabun Cuci Serbaguna
              </h2>
              <div className="grid grid-cols-2    md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 md:gap-8 gap-4   ">
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
              <h2 className="font-medium text-2xl pb-4 uppercase">
                Buah-Buahan
              </h2>
              <div className="grid grid-cols-2    md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 md:gap-8 gap-4   ">
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
              <h2 className="font-medium text-2xl pb-4 uppercase">
                Sabun Batang
              </h2>
              <div className="grid grid-cols-2    md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 md:gap-8 gap-4   ">
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
          </div>
        )}

        <h2 className="font-medium text-2xl pb-4 uppercase">{selectedCategory}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 md:gap-8 gap-4">
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
