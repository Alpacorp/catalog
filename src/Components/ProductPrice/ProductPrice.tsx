import Price from "../Price/Price";
import PriceDiscount from "../PriceDiscount/PriceDiscount";
import "./ProductPrice.css";

interface ProductPriceProps {
  discount?: number;
  price: number;
  formatPrice?: any;
}

const ProductPrice = ({ discount, price, formatPrice }: ProductPriceProps) => {
  return (
    <div data-testid="test-div-product-price" className="product-price">
      {discount ? (
        <>
          <PriceDiscount price={price} formatPrice={formatPrice} />
          <Price price={discount} formatPrice={formatPrice} />
        </>
      ) : (
        <Price price={price} formatPrice={formatPrice} />
      )}
    </div>
  );
};

export default ProductPrice;
