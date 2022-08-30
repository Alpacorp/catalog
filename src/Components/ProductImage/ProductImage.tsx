import "./ProductImage.css";

interface ProductImageProps {
  id: number;
  image: string;
  name: string;
  styleImg?: string;
}

const ProductImage = ({ id, image, name, styleImg }: ProductImageProps) => {
  return (
    <>
      <div
        data-testid="test-div-img"
        className={styleImg}
        key={id + "image"}
        tabIndex={0}
        itemScope
        itemType="http://schema.org/Thing"
      >
        <figure>
          <img itemProp="image" src={image} alt={name} />
        </figure>
      </div>
    </>
  );
};

export default ProductImage;
