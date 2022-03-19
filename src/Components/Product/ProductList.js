import PropTypes from "prop-types";
import Product from "./Product";

const ProductList = ({ products }) => {
  console.log("cargue de lista de productos");
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
