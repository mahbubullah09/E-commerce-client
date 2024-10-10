import React from "react";
import useProducts from "../../hooks/useProducts";
import Loading from "../../components/Loading";
import ProductCard from "./compoments/ProductCard";

const Product = () => {
  const { products, loading, error, refetch } = useProducts();

  // Show loading state
  if (loading) return <Loading />;
  
  // Show error message if there is an error
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-xl font-bold mb-4">{products.length} Products</h2>

      <div className="grid grid-cols-5 gap-4">
        {products.map((item) => (
          <ProductCard key={item._id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Product;
