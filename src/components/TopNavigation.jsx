import { NavLink } from "react-router-dom";

export default function TopNavigation(props) {
  return (
    <>
      <header className="bg-sky-700 text-white sticky top-0 z-50 shadow">
        <div className="max-w-6xl mx-auto px-20 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-around gap-3">
          <h1 className="text-2xl font-bold">Shopfront</h1>

          <nav className="flex flex-wrap gap-2">
            <NavLink to="/" className={({isActive}) => isActive ? "text-white font-bold px-3 py-2 bg-sky-500 rounded-lg" : "text-white hover:bg-sky-600 px-3 py-2 rounded-lg"}>Shop</NavLink>
            <NavLink to="/beauty" className={({isActive}) => isActive ? "text-white font-bold px-3 py-2 bg-sky-500 rounded-lg" : "text-white hover:bg-sky-600 px-3 py-2 rounded-lg"}>Beauty</NavLink>
            <NavLink to="/fragnances" className={({isActive}) => isActive ? "text-white font-bold px-3 py-2 bg-sky-500 rounded-lg" : "text-white hover:bg-sky-600 px-3 py-2 rounded-lg"}>Fragnaces</NavLink>
            <NavLink to="/furniture" className={({isActive}) => isActive ? "text-white font-bold px-3 py-2 bg-sky-500 rounded-lg" : "text-white hover:bg-sky-600 px-3 py-2 rounded-lg"}>Furniture</NavLink>
            <NavLink to="/electronics" className={({isActive}) => isActive ? "text-white font-bold px-3 py-2 bg-sky-500 rounded-lg" : "text-white hover:bg-sky-600 px-3 py-2 rounded-lg"}>Electronics</NavLink>
          </nav>
        </div>
      </header>
    </>
  );
}
