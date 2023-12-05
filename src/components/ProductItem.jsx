const ProductItem = ({ product }) => {
    return (
      <div className="border rounded p-4">
        <img className="w-32 mx-auto mb-2" src={product?.image} alt={product?.title} />
        <p className="text-lg font-bold">{product?.title}</p>
        <p className="text-gray-700">{product?.price}</p>
      </div>
    );
  };
  
  export default ProductItem;
  