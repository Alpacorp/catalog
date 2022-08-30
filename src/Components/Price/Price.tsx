interface PriceProps {
  price?: number;
  formatPrice: any;
}

const Price = ({ price, formatPrice }: PriceProps) => {
  return (
    <div>
      <h3 tabIndex={0}>{formatPrice.format(price)}</h3>
    </div>
  );
};

export default Price;
