import { useState, useEffect, useCallback } from "react";
import axiosInstance from "../Api/axiosInstance";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Start loading as true
  const [error, setError] = useState(null);

  const fetchProducts = useCallback(async () => {
    setLoading(true); // Set loading to true before fetching
    setError(null); // Reset error state
    try {
      const response = await axiosInstance.get("/products");
      setProducts(response.data);
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false); // Set loading to false after fetch attempt
    }
  }, []);

  // Refetch
  const refetch = () => {
    fetchProducts();
  };

  // Automatically fetch products on mount
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return { products, loading, error, refetch };
};

export default useProducts;
