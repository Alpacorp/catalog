import gorroImage from "../../Data/assets/gorro.png";
// import PropTypes from 'prop-types';
import "./ModalProduct.css";

const Modalproduct = () => {
  return (
    <div className="modal">
      <div className="container">
        <h2>Nombre producto</h2>
        <h3>Precio Producto</h3>
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
