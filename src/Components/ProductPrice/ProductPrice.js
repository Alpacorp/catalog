import Price from "../Price/Price";
import PriceDiscount from "../PriceDiscount/PriceDiscount";
import "./ProductPrice.css";

const ProductPrice = ({ discount, price, formatPrice }) => {
  return (
    <div className="product-price">
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
