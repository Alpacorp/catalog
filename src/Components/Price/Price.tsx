import PropTypes from "prop-types";

interface PriceProps {
  price?: number;
  formatPrice: any;
}

const Price: React.FC<PriceProps> = ({ price, formatPrice }) => {
  return (
    <div>
      <h3 tabIndex={0}>{formatPrice.format(price)}</h3>
    </div>
  );
};

Price.propTypes = {
  price: PropTypes.number,
  formatPrice: PropTypes.object,
};

export default Price;
