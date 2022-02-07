import React from "react";
// import PropTypes from "prop-types";
import "./ProductInfoHeader.css";

const ProductInfoHeader = ({ promo, name }) => {
  return (
    <>
      <div className="info-header">
        {promo ? (
          <>
            <h2 aria-label={name} tabIndex="0">
              {name}
            </h2>
            <h4 aria-label={name} tabIndex="0">
              En descuento
            </h4>
          </>
        ) : (
          <h2 aria-label={name} tabIndex="0">
            {name}
          </h2>
        )}
      </div>
    </>
  );
};

// ProductInfoHeader.propTypes = {};

export default ProductInfoHeader;
