import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import MainLayout from "./Layouts/MainLayout";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import ProductDetails from "./pages/Product/ProductDetails";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/products",
        element: <Product/>,
        
      },
      {
        path: "/products/:id",
        element: <ProductDetails />, 
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);