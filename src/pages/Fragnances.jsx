import { useEffect, useState } from "react";
import TopNavigation from "../components/TopNavigation";
import ProductCard from "../components/ProductCard";
import { fetchProducts } from "../api";
import Footer from "../components/Footer";

export default function Fragnances(props) {
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

  if (loading) return <h1>Loading Beauty products...</h1>;

  const fragnanceProducts = products.filter(
    (product) => product.category === "Fragrances",
  );

  return (
    <>
      <div>
        <TopNavigation />
        <section className="max-w-6xl mx-auto px-30 py-8">
          <div className="flex items-center justify-between mb-6 border-b border-gray-200 pb-3">
            <h1 className="text-2xl font-bold text-gray-800 text-center mb-10">Fragnance Products</h1>
            <span className="text-sm text-gray-500">
              {fragnanceProducts.length} products
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {fragnanceProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          {fragnanceProducts.length === 0 && <p className="text-center py-20 text-gray-600">No product available in this category</p>}
        </section>
      </div>
      <Footer/>
    </>
  );
}

