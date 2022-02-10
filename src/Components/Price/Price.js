const Price = ({ price, formatPrice }) => {
  return (
    <div>
      <h3 aria-label={price} tabIndex="0">
        {formatPrice.format(price)}
      </h3>
    </div>
  );
};

export default Price;
