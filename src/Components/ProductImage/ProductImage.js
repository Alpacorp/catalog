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

export default ProductImage;
