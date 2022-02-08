const Price = ({ price, formatPrice }) => {
  return (
    <>
      <h3 aria-label={price} tabIndex="0">
        {formatPrice.format(price)}
      </h3>
    </>
  );
};

export default Price;
