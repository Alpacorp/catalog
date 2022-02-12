import PropTypes from "prop-types";
import Product from "./Product";

const ProductList = ({ products }) => {
  return (
    <div>
      {products.data.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.object.isRequired,
};

export default ProductList;
