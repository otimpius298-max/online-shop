import { useEffect, useState } from "react";
import TopNavigation from "../components/TopNavigation";
import ProductCard from "../components/ProductCard";
import { fetchProducts } from "../api";
import Footer from "../components/Footer";

export default function Beauty(props) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

   useEffect(() =>{
     const loadProducts = async() =>{
         const data = await fetchProducts()
         setProducts(data)
         setLoading(false)
     }
     loadProducts()
   }, [])

  if (loading) return(
    <button type="button" className="bg-indigo-500 ..." disabled>
  <svg className="mr-3 size-5 animate-spin ..." viewBox="0 0 24 24">
  </svg>
  Loading…
</button>
  )

  const beautyProducts = products.filter(
    (product) => product.category === "Beauty",
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
      <Footer/>
    </>
  );
}
