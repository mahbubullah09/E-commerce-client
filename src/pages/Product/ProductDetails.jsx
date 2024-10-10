import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useSingleProduct from "../../hooks/useSingleProduct";
import Loading from "../../components/Loading";

const ProductDetails = () => {
  const { id } = useParams();
  const { product, loading, error, refetch } = useSingleProduct(id);

  const [image, setImage] = useState("");
  const [count, setCount] = useState(1);

  // Update the initial image once product data is fetched
  useEffect(() => {
    if (product?.images && product.images.length > 0) {
      setImage(product.images[0]);
    }
  }, [product]);

  const handleImageChange = (newImage) => {
    setImage(newImage);
  };

  if (loading) return <Loading/>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="flex justify-center gap-4 my-10">
      <div>
        <div className="relative shadow-xl">
          <img
            className="flex-1 max-w-[600px] transition-transform duration-300 ease-in-out"
            src={image}
            alt={product?.title}
          />

          <span className="absolute bottom-0 right-0 bg-red-500 text-white rounded-l-3xl px-2 text-2xl">
            $
            {(
              product?.price -
              product?.price * (product?.discount / 100)
            ).toFixed(2)}
          </span>
          <span className="absolute top-0 left-0 bg-red-500 text-white rounded-r-3xl px-2 text-2xl">
            {product?.discount}% OFF
          </span>
        </div>

        <div className="flex justify-center my-6 gap-3">
          {product?.images.map((item, idx) => (
            <img
              key={idx}
              onClick={() => handleImageChange(item)}
              className="flex max-w-28 shadow-xl cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105"
              src={item}
              alt={product?.title}
            />
          ))}
        </div>
      </div>

      <div className="flex-1 space-y-4">
        <h1 className="text-xl font-bold">{product?.title}</h1>
        <p>{product?.description}</p>
        <h4 className="font-bold text-lg">Description</h4>
        <h5>
          Elevate your formal attire with our Classic Leather Loafers. Crafted
          from premium leather, these loafers combine elegance and comfort,
          making them the perfect choice for any formal occasion. The timeless
          design features a sleek silhouette and a cushioned insole for all-day
          comfort, ensuring you look and feel your best whether at a business
          meeting or a formal event. With their versatile style, they pair
          effortlessly with suits, dress pants, or even smart casual wear.
          Experience the perfect blend of sophistication and practicality with
          our Classic Leather Loafers.
        </h5>
        <div className="flex gap-3 items-center">
          Qnt:
          <span className="border border-1 border-black text-black rounded-3xl px-4 py-2 my-2">
            <button
              onClick={() =>
                setCount((prevCount) => Math.max(prevCount - 1, 1))
              }
              className="mx-2"
            >
              -
            </button>
            {count}
            <button onClick={() => setCount(count + 1)} className="mx-2">
              +
            </button>
          </span>
          <button className="bg-black text-white px-4 py-2 my-2 rounded-3xl hover:bg-slate-500">
            {" "}
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
