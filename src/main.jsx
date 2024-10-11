import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import MainLayout from "./Layouts/MainLayout";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import ProductDetails from "./pages/Product/ProductDetails";
import Registration from "./pages/Authentiaction/Registration";
import LoginPage from "./pages/Authentiaction/LoginPage";
import { AuthProvider } from "./contextApi/AuthContex";


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
      {
        path: "/registration",
        element: <Registration />, 
      },
      {
        path: "/login",
        element: <LoginPage />, 
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
 
  </React.StrictMode>
);