export default function ProductCard({product}) {
  return (
    <>
    <div className="bg-white rounded-lg shadow hover:shadow-lg flex flex-col">

      <div className="relative">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-45 hover:-scale-x-100"
        />
        <span
          className={
            product.inStock
              ? 'absolute top-2 left-2 px-2 py-1 rounded text-sm font-bold bg-green-100 text-green-700'
              : 'absolute top-2 left-2 px-2 py-1 rounded text-sm font-bold bg-red-100 text-red-700'
          }
        >
          {product.inStock ? 'In stock' : 'Out of stock'}
        </span>
      </div>

      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
        <p className="text-gray-500 text-sm mt-1 line-clamp-2">
          {product.description}
        </p>

        <p className="text-xl font-bold text-gray-900 mt-3">${product.price}</p>


        <button
          disabled={!product.inStock}
          className={
            product.inStock
              ? 'mt-auto w-full py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold'
              : 'mt-auto w-full py-2 rounded-lg bg-gray-300 text-gray-500 font-bold cursor-not-allowed'
          }
        >
          {product.inStock ? 'Add to Cart' : 'Unavailable'}
        </button>
      </div>
    </div>

    </>
  );
}
