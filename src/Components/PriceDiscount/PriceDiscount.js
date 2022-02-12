import PropTypes from "prop-types";
import "./PriceDiscount.css";

const PriceDiscount = ({ price, formatPrice }) => {
  return (
    <div>
      <h3 className="price-discount" aria-label={price} tabIndex="0">
        {formatPrice.format(price)}
      </h3>
    </div>
  );
};

PriceDiscount.propTypes = {
  price: PropTypes.string.isRequired,
  formatPrice: PropTypes.object.isRequired,
};

export default PriceDiscount;
