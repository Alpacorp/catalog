import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import { formatPrice } from "../../utils/formatPrice.";
import ModalProduct from "../ModalProduct/ModalProduct";
import ProductImage from "../ProductImage/ProductImage";
import ProductInfoHeader from "../ProductInfoHeader/ProductInfoHeader";
import Description from "../Description/Description";
import Features from "../Features/Features";
import Tags from "../Tags/Tags";
import ProductPrice from "../ProductPrice/ProductPrice";
import "./Product.css";
import Counter from "../Counter/Counter";
import { useDispatch } from "react-redux";
import { addToCartStart, addToCartSuccess } from "../../actions/actions";

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
  console.log("cargue de producto");
  const [modalState, setModalState] = useState(false);
  const [exist, setExist] = useState();
  const showHide = useCallback(
    () => setModalState((modalState) => !modalState),
    []
  );

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCartStart(id));
    dispatch(addToCartSuccess(id, name, price, description, image, discount));
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
        <Counter />
        <div className="add-car">
          <button
            disabled={exist}
            onClick={() => handleAddToCart()}
            title={!exist ? "Agregar al Carrito" : "Producto en carrito"}
          >
            {!exist ? "Agregar al Carrito" : "Producto en carrito"}
          </button>
        </div>
      </ModalProduct>
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

export default Product;
