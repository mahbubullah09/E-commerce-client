import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  // Calculate the final price after discount
  const finalPrice = (
    product?.price -
    product?.price * (product?.discount / 100)
  ).toFixed(2);

  return (
    <div>
      <Link to={`/products/${product?._id}`}>
        <div className="max-w-80 rounded-md shadow-xl">
          <img
            className="w-full max-h-32 rounded-t-md object-cover"
            src={product?.images[0]}
            alt={product?.title || "Product logo"}
          />
          <div className="p-3 space-y-2">
            <h2 className="font-bold">{product?.title}</h2>
            <div className="flex justify-between items-center">
              <h4 className="font-semibold">${finalPrice}</h4>
              <h4 className="text-red-500 font-semibold">
                {product?.discount}% Off
              </h4>
            </div>
            <h6 className="text-justify text-slate-600 text-sm">
              {product?.description}
            </h6>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
