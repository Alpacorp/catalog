import PropTypes from "prop-types";
import Price from "../Price/Price";
import PriceDiscount from "../PriceDiscount/PriceDiscount";
import "./ProductPrice.css";

const ProductPrice = ({ discount, price, formatPrice }) => {
  return (
    <div className="product-price">
      {discount ? (
        <>
          <PriceDiscount price={price} formatPrice={formatPrice} />
          <Price price={discount} formatPrice={formatPrice} />
        </>
      ) : (
        <Price price={price} formatPrice={formatPrice} />
      )}
    </div>
  );
};

ProductPrice.propTypes = {
  discount: PropTypes.number,
  price: PropTypes.number,
  formatPrice: PropTypes.object,
};

export default ProductPrice;
