import PropTypes from "prop-types";
import "./PriceDiscount.css";

interface PriceDiscountProps {
  price: number;
  formatPrice: any;
}

const PriceDiscount: React.FC<PriceDiscountProps> = ({
  price,
  formatPrice,
}) => {
  return (
    <div>
      <h3 className="price-discount" tabIndex={0}>
        {formatPrice.format(price)}
      </h3>
    </div>
  );
};

PriceDiscount.propTypes = {
  price: PropTypes.number.isRequired,
  formatPrice: PropTypes.object.isRequired,
};

export default PriceDiscount;
