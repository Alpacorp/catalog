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

export default PriceDiscount;
