import React, { useCallback, useState, useEffect } from "react";
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

  const productList = "product-list";
  let recoveredData = localStorage.getItem(productList);
  let data = JSON.parse(recoveredData);

  const handleAddToCart = (id, name, price, description, image, discount) => {
    const productData = [{ id, name, price, description, image, discount }];

    if (recoveredData === null) {
      localStorage.setItem(productList, JSON.stringify(productData));
    } else {
      let newData = { id, name, price, description, image, discount };
      data.push(newData);
      localStorage.setItem(productList, JSON.stringify(data));
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const checkProductCart = (id) => {
    let data = JSON.parse(recoveredData);
    const filterData = data?.some((product) => product.id === id);
    setExist(filterData);
    return filterData;
  };

  useEffect(() => {
    checkProductCart(id);
  }, [checkProductCart, exist, id]);

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
            onClick={() =>
              handleAddToCart(id, name, price, description, image, discount)
            }
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
