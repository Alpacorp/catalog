import "./PriceDiscount.css";

const PriceDiscount = ({ price, formatPrice }) => {
  return (
    <>
      <h3 className="price-discount" aria-label={price} tabIndex="0">
        {formatPrice.format(price)}
      </h3>
    </>
  );
};

export default PriceDiscount;
