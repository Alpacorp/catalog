import React, { useCallback, useState } from "react";
// import PropTypes from "prop-types";
import { formatPrice } from "../../utils/formatPrice.";
import ModalProduct from "../ModalProduct/ModalProduct";
import ProductImage from "../ProductImage/ProductImage";
import ProductInfoHeader from "../ProductInfoHeader/ProductInfoHeader";
import Description from "../Description/Description";
import Features from "../Features/Features";
import Tags from "../Tags/Tags";
import ProductPrice from "../ProductPrice/ProductPrice";
import "./Product.css";

const Product = React.memo(
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
  }) => {
    console.log("cargue de producto", name);
    const [modalState, setModalState] = useState(false);
    const [count, setCount] = useState(0);
    const showHide = useCallback(() => {
      setModalState(!modalState);
    }, [modalState]);
    return (
      <>
        <section className="product" key={id + "product"} tabIndex="0">
          <ProductImage id={id} image={image} name={name} />
          <div className="product-info" key={id + "info"} tabIndex="0">
            <ProductInfoHeader promo={promo} name={name} />
            <ProductPrice
              discount={discount}
              price={price}
              formatPrice={formatPrice}
            />
            <Description description={description} />
            <Features features={features} id={id} />
            <Tags tags={tags} id={id} />
            <div className="product-button">
              <button onClick={showHide}>Pedir</button>
            </div>
          </div>
        </section>
        <ModalProduct
          modalState={modalState}
          setModalState={setModalState}
          name={name}
        >
          <ProductImage id={id} image={image} name={name} />
          <Description description={description} />
        </ModalProduct>
        <button onClick={() => setCount(count + 1)}>count {count}</button>
      </>
    );
  }
);

// Product.propTypes = {
//   products: PropTypes.object.isRequired,
// };

export default Product;
