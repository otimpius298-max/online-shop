import { useEffect, useState } from "react";
import TopNavigation from "../components/TopNavigation";
import ProductCard from "../components/ProductCard";

export default function Beauty(props) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.products);
        setProducts(data.products);
        setLoading(false);
      })
      .catch((error) => console.log(error));
    setLoading(false);
  }, []);

  if (loading) return <h1>Loading Beauty products...</h1>;

  const beautyProducts = products.filter(
    (product) => product.category === "beauty",
  );

  return (
    <>
      <div>
        <TopNavigation />
        <section className="max-w-6xl mx-auto px-30 py-8">
          <div className="flex items-center justify-between mb-6 border-b border-gray-200 pb-3">
            <h1 className="text-2xl font-bold text-gray-800 text-center mb-10">Beauty Products</h1>
            <span className="text-sm text-gray-500">
              {beautyProducts.length} products
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {beautyProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
