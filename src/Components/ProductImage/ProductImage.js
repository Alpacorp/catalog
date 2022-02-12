import PropTypes from "prop-types";
import "./ProductImage.css";

const ProductImage = ({ id, image, name, styleImg }) => {
  return (
    <>
      <div className={styleImg} key={id + "image"} tabIndex="0">
        <figure>
          <img src={image} alt={name} />
        </figure>
      </div>
    </>
  );
};

ProductImage.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.any.isRequired,
  name: PropTypes.string.isRequired,
  styleImg: PropTypes.string.isRequired,
};

export default ProductImage;
