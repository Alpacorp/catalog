import React, { memo, useCallback, useState, useEffect } from "react";
import "./ModalProduct.css";
import ProductImage from "../ProductImage/ProductImage";
import ProductPrice from "../ProductPrice/ProductPrice";
import Description from "../Description/Description";
import Counter from "../Counter/Counter";
import { useDispatch, useSelector } from "react-redux";
import { addToCartSuccess } from "../../actions/cart";
import { resetModalProduct } from "../../actions/modalProduct";
import { formatPrice } from "../../utils/formatPrice.";

const ModalProduct = () => {
  console.log("cargue de modal");
  const dispatch = useDispatch();
  const [modalState, setModalState] = useState(false);
  const {
    open,
    product,
    product: { id, image, name, price, discount, description },
  } = useSelector((state: any) => state.modalProduct);

  const showHideModalProduct = useCallback(() => {
    if (open) {
      setModalState(true);
    } else {
      setModalState(false);
    }
  }, [open]);

  useEffect(() => {
    showHideModalProduct();
  }, [product, showHideModalProduct]);

  const handleAddToCart = (): void => {
    dispatch(addToCartSuccess(product));
  };

  const hideModal = useCallback(() => {
    dispatch(resetModalProduct());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setModalState]);

  return (
    <>
      {modalState && (
        <section className="modal">
          <div className="container">
            <div className="header">
              <header>{name}</header>
            </div>
            <div>
              <button className="close-icon" onClick={hideModal}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-x"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </button>
            </div>
            <div className="container-info">
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
                  onClick={() => handleAddToCart()}
                  title={"Agregar al Carrito"}
                >
                  Agregar al Carrito
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default memo(ModalProduct);
