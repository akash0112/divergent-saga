import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductList from '@/components/ProductList';
import { fetchProducts } from '@/redux/actions/productActions';
import SearchBar from '@/components/SearchBar';

const ProductContainer = () => {
  const dispatch = useDispatch();
  const productsData = useSelector((state) => state.products);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleSearch = (searchTerm) => {
    if (searchTerm.trim() === '') {
      setFilteredProducts([]);
      setNotFound(false);
    } else {
      const filtered = productsData.products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
      setNotFound(filtered.length === 0);
    }
  };

  const displayProducts = notFound ? [] : (filteredProducts.length > 0 ? filteredProducts : productsData.products);

  return (
    <div className="container mx-auto py-8 ">
        <SearchBar handleSearch={handleSearch} />
      {notFound ? (
        <p className="text-red-500 text-center font-semibold">No products found</p>
      ) : (
        <ProductList products={displayProducts} />
      )}
    </div>
  );
};

export default ProductContainer;
