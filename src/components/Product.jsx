import { useEffect, useState } from "react";
import { fetchProducts } from "../api";
import ProductCard from "./ProductCard";
import TopNavigation from "./TopNavigation";
import Footer from "./Footer";

export default function Product(props) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchItem, setSearchItem] = useState('');
  const [category, setCategory] = useState('All');

  useEffect(() =>{
    const loadProducts = async() =>{
        const data = await fetchProducts()
        setProducts(data)
        setLoading(false)
    }
    loadProducts()
  }, [])

//   useEffect(() => {
//     fetch("https://dummyjson.com/products")
//     .then((response) =>response.json())
//     .then((data) =>{
//         console.log(data.products)
//         setProducts(data.products);
//         setLoading(false)
        
//     })
//     .catch((error) =>
//     console.log(error));
//   }, [])

  if (loading) return(
    <button type="button" className="bg-indigo-500 ..." disabled>
  <svg className="mr-3 size-5 animate-spin ..." viewBox="0 0 24 24">
  </svg>
  Processing…
</button>
  )

  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  const visibleProducts = products.filter(product =>{
    const matchesSearch = product.title.toLowerCase().includes(searchItem.toLowerCase())
    const matchesCategory = category === 'All' || product.category === category
    return matchesSearch && matchesCategory
  })

  return (
    <>
    <TopNavigation/>
    <div>
      <div className="min-h-screen bg-gray-100">
        <div className="max-w-6xl mx-auto p-4">

          <input
            type="text"
            placeholder="Search product..."
            value={searchItem}
            onChange={(e) => setSearchItem(e.target.value)}
            className="w-full p-3 rounded-lg border border-gray-300 bg-white mb-4"
          />


          <div className="flex flex-col md:flex-row gap-4">

            <div className="w-full md:w-64 top-30 self-start h-fit sticky bg-sky-700 text-white rounded-lg p-4 md:self-start">
              <h1 className="text-xl font-bold">Filter By</h1>
              <hr className="my-2 border-sky-300" />
              <h2 className="font-bold mb-2">Category</h2>

              <div className="flex flex-col gap-1 max-h-96">
                {categories.map((name) => (
                  <button
                    key={name}
                    onClick={() => setCategory(name)}
                    className={
                      category === name
                        ? "text-left px-3 py-2 rounded-lg bg-white text-sky-700 font-bold"
                        : "text-left px-3 py-2 rounded-lg hover:bg-sky-600"
                    }
                  >
                    {name}
                  </button>
                ))}
              </div>
            </div>


            <div className="flex-1">
              <p className="mb-4 text-gray-600">
                Showing {visibleProducts.length} products
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {visibleProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              {visibleProducts.length === 0 && (
                <p className="text-center text-xl text-gray-500 py-12">
                  No products match your search.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      </div>
      <Footer/>
      
    </>
  );
}
