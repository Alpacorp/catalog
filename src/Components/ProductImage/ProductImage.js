import "./ProductImage.css";

const ProductImage = ({ id, image, name }) => {
  return (
    <>
      <div className="product-image" key={id + "image"} tabIndex="0">
        <figure>
          <img src={image} alt={name} />
        </figure>
      </div>
    </>
  );
};

export default ProductImage;
