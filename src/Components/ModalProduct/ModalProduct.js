import gorroImage from "../../Data/assets/gorro.png";
// import PropTypes from 'prop-types';
import "./ModalProduct.css";

const Modalproduct = () => {
  return (
    <div className="modal">
      <div className="container">
        <header>Nombre producto</header>
        <h3>Precio Producto w</h3>
        <figure>
          <img src={gorroImage} alt={gorroImage} />
        </figure>
      </div>
    </div>
  );
};

// Modalproduct.propTypes = {

// };

export default Modalproduct;
