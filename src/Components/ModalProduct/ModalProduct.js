import gorroImage from "../../Data/assets/gorro.png";
// import PropTypes from 'prop-types';
import "./ModalProduct.css";

const Modalproduct = () => {
  return (
    <section className="modal">
      <div className="container">
        <div className="header">
          <header>Nombre producto</header>
          <div className="close-icon">X</div>
        </div>
        <h3>Precio Producto w</h3>
        <figure>
          <img src={gorroImage} alt={gorroImage} />
        </figure>
        <div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae
          totam ipsum amet, quia quidem maxime facilis tempora iste debitis et
          mollitia dicta reprehenderit dolore neque nihil, id voluptatum est
          laboriosam.
        </div>
      </div>
    </section>
  );
};

// Modalproduct.propTypes = {

// };

export default Modalproduct;
