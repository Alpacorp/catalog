import PropTypes from "prop-types";
import Product from "./Product";

const ProductList = ({ products }) => {
  console.log("productList inner", products);
  return (
    <div>
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductList;
