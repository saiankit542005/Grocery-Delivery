import { useEffect, useState } from "react";
import type { Product } from "../../types";
import { dummyProducts } from "../../assets/assets";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "lucide-react";
import ProductsCard from "../ProductsCard";

const PopularProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setProducts(dummyProducts.slice(0, 10));
  },[]);
  return (
    <section className="py-5">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-semibold ">PopularProducts</h1>
            <p className="text-sm text-app-text-light mat-1">
              Top-rated Prodcuts this season
            </p>
          </div>
          <Link
            to="/products"
            className="text-sm font-semibold text-app-orange hover:text-app-orange-dark flex flex-center gap-1 transition-colors"
          >
            View All
            <ArrowRightIcon className="size-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 ms:grid-cols-3 lg:grid-cols-5 gap-4 xl:gap-8">
          {products.map((product) => (
            <ProductsCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
