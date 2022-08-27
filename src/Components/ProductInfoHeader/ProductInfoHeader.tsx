import PropTypes from "prop-types";
import "./ProductInfoHeader.css";

interface ProductInfoHeaderProps {
  promo?: Boolean;
  name: string;
}

const ProductInfoHeader: React.FC<ProductInfoHeaderProps> = ({
  promo,
  name,
}) => {
  return (
    <>
      <div
        className="info-header"
        itemScope
        itemType="https://schema.org/Thing"
      >
        {promo ? (
          <>
            <h2 itemProp="name" aria-label={name} tabIndex={0}>
              {name}
            </h2>
            <h4
              itemScope
              itemType="https://schema.org/Product"
              itemProp="offers"
              aria-label={name}
              tabIndex={0}
            >
              En descuento
            </h4>
          </>
        ) : (
          <h2 itemProp="name" aria-label={name} tabIndex={0}>
            {name}
          </h2>
        )}
      </div>
    </>
  );
};

ProductInfoHeader.propTypes = {
  promo: PropTypes.bool,
  name: PropTypes.string.isRequired,
};

export default ProductInfoHeader;
