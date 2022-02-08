import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import "./Product.css";
import { formatPrice } from "../../utils/formatPrice.";
import ModalProduct from "../ModalProduct/ModalProduct";
import ProductImage from "../ProductImage/ProductImage";
import ProductInfoHeader from "../ProductInfoHeader/ProductInfoHeader";
import PriceDiscount from "../PriceDiscount/PriceDiscount";
import Price from "../Price/Price";
import Description from "../Description/Description";

const Product = ({ products }) => {
  console.log("cargue de producto");
  const [modalState, setModalState] = useState(false);
  const showHide = useCallback(() => {
    setModalState(!modalState);
  }, [modalState]);
  return (
    <>
      {products.data?.map(
        ({
          id,
          name,
          price,
          description,
          features,
          tags,
          image,
          discount,
          promo,
        }) => (
          <section className="product" key={id + "product"} tabIndex="0">
            <ProductImage id={id} image={image} name={name} />
            <div className="product-info" key={id + "info"} tabIndex="0">
              <ProductInfoHeader promo={promo} name={name} />
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
              <Description description={description} />
              <div className="features" tabIndex="0">
                {features?.map((feature) => (
                  <p
                    aria-label={feature}
                    className="feature"
                    key={id + feature}
                  >
                    {feature}
                  </p>
                ))}
              </div>
              <div className="tags" tabIndex="0">
                {tags?.map((tag) => (
                  <small aria-label={tag} className="tag" key={id + tag}>
                    <strong>{tag}</strong>
                  </small>
                ))}
              </div>
              <div className="product-button">
                <button onClick={showHide}>Pedir</button>
              </div>
            </div>
          </section>
        )
      )}
      <ModalProduct modalState={modalState} setModalState={setModalState} />
    </>
  );
};

Product.propTypes = {
  products: PropTypes.object.isRequired,
};

export default Product;
