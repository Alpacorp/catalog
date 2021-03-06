import PropTypes from "prop-types";

const Price = ({ price, formatPrice }) => {
  return (
    <div>
      <h3 aria-label={price} tabIndex="0">
        {formatPrice.format(price)}
      </h3>
    </div>
  );
};

Price.propTypes = {
  price: PropTypes.number,
  formatPrice: PropTypes.object,
};

export default Price;
