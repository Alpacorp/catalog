import "./ProductImage.css";

interface ProductImageProps {
  id: number;
  image: string;
  name: string;
  styleImg?: string;
}

const ProductImage: React.FC<ProductImageProps> = ({
  id,
  image,
  name,
  styleImg,
}) => {
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
