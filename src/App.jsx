import Product from "./components/Product";
import TopNavigation from "./components/TopNavigation";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Beauty from "./pages/Beauty";

import Furniture from "./pages/Furniture";
import Fragnances from "./pages/Fragnances";
import Home from "./pages/Home";
import Electronics from "./pages/Electronics";

export default function App(props) {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Product/>
    },
    {
      path: "/beauty",
      element: <Beauty/>
    },
    {
      path: "/electronics",
      element: <Electronics/>
    },
    {
      path: "/furniture",
      element: <Furniture/>
    },
    {
      path: "/fragnances",
      element: <Fragnances/>
    },
    {
      path: "/home",
      element: <Home/>
    }
  ])

  return (
    <>

    <RouterProvider router={router}></RouterProvider>

    </>
  );
}
