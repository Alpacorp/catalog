import "./PriceDiscount.css";

interface PriceDiscountProps {
  price: number;
  formatPrice: any;
}

const PriceDiscount = ({ price, formatPrice }: PriceDiscountProps) => {
  return (
    <div>
      <h3 className="price-discount" tabIndex={0}>
        {formatPrice.format(price)}
      </h3>
    </div>
  );
};

export default PriceDiscount;
