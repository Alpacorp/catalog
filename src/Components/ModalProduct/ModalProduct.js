import { memo, useCallback } from "react";
import gorroImage from "../../Data/assets/gorro.png";
import PropTypes from "prop-types";
import "./ModalProduct.css";

const ModalProduct = ({ modalState, setModalState }) => {
  console.log("cargue de modal de producto");
  const hide = useCallback(() => {
    setModalState(false);
  }, [setModalState]);
  return (
    <>
      {modalState && (
        <section className="modal">
          <div className="container">
            <div className="header">
              <header>Nombre producto</header>
            </div>
            <div>
              <div>
                <button className="close-icon" onClick={hide}>
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
            </div>
            <h3>Precio Producto w</h3>
            <figure>
              <img src={gorroImage} alt={gorroImage} />
            </figure>
            <div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Molestiae totam ipsum amet, quia quidem maxime facilis tempora
              iste debitis et mollitia dicta reprehenderit dolore neque nihil,
              id voluptatum est laboriosam.
            </div>
          </div>
        </section>
      )}
    </>
  );
};

ModalProduct.propTypes = {
  modalState: PropTypes.bool.isRequired,
  setModalState: PropTypes.func.isRequired,
};

export default memo(ModalProduct);
