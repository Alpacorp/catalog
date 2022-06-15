import React, { memo } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { formatPrice } from "../../utils/formatPrice.";
import ProductImage from "../ProductImage/ProductImage";
import ProductInfoHeader from "../ProductInfoHeader/ProductInfoHeader";
import Features from "../Features/Features";
import Tags from "../Tags/Tags";
import ProductPrice from "../ProductPrice/ProductPrice";
import "./Product.css";
import { getModalproductSuccess } from "../../actions/modalProduct";

const Product = (product) => {
  console.log("cargue de producto");
  const { id, name, price, features, tags, image, discount, promo } = product;
  const dispatch = useDispatch();

  const handleShowHideModal = () => {
    dispatch(getModalproductSuccess(product));
  };

  return (
    <>
      <section className="product" key={id + "product"} tabIndex="0">
        <ProductImage
          id={id}
          image={image}
          name={name}
          styleImg={"product-image"}
        />
        <div className="product-info" key={id + "info"} tabIndex="0">
          <ProductInfoHeader promo={promo} name={name} />
          <ProductPrice
            discount={discount}
            price={price}
            formatPrice={formatPrice}
          />
          <Features features={features} id={id} />
          <Tags tags={tags} id={id} />
          <div className="product-button">
            <button onClick={handleShowHideModal}>Detalles de {name}</button>
          </div>
        </div>
      </section>
    </>
  );
};

Product.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  features: PropTypes.array,
  tags: PropTypes.array,
  image: PropTypes.any.isRequired,
  discount: PropTypes.number,
  promo: PropTypes.bool,
};

export default memo(Product);
