import React, { useCallback, useState } from "react";
import { formatPrice } from "../../utils/formatPrice.";
import ModalProduct from "../ModalProduct/ModalProduct";
import ProductImage from "../ProductImage/ProductImage";
import ProductInfoHeader from "../ProductInfoHeader/ProductInfoHeader";
import Description from "../Description/Description";
import Features from "../Features/Features";
import Tags from "../Tags/Tags";
import ProductPrice from "../ProductPrice/ProductPrice";
import "./Product.css";

const Product = ({
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
  const showHide = useCallback(
    () => setModalState((modalState) => !modalState),
    []
  );
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
          <Description description={description} styleDesc={"description"} />
          <Features features={features} id={id} />
          <Tags tags={tags} id={id} />
          <div className="product-button">
            <button onClick={showHide}>Detalles de {name}</button>
          </div>
        </div>
      </section>
      <ModalProduct
        modalState={modalState}
        setModalState={setModalState}
        name={name}
      >
        <ProductImage
          id={id}
          image={image}
          name={name}
          styleImg={"product-image-modal"}
        />
        <ProductPrice
          discount={discount}
          price={price}
          formatPrice={formatPrice}
        />
        <Description
          description={description}
          styleDesc={"description-modal"}
        />
      </ModalProduct>
    </>
  );
};

// Product.propTypes = {
//   products: PropTypes.object.isRequired,
// };

export default Product;
