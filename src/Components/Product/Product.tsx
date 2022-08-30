import { memo } from "react";
import { useDispatch } from "react-redux";
import { formatPrice } from "../../utils/formatPrice.";
import ProductImage from "../ProductImage/ProductImage";
import ProductInfoHeader from "../ProductInfoHeader/ProductInfoHeader";
import Features from "../Features/Features";
import Tags from "../Tags/Tags";
import ProductPrice from "../ProductPrice/ProductPrice";
import "./Product.css";
import { getModalproductSuccess } from "../../actions/modalProduct";

interface ProductProps {
  id: number;
  name: string;
  price: number;
  image: string;
  tags?: any;
  features?: any;
  discount?: number;
  promo?: boolean;
  description: string;
}

const Product = (product: ProductProps) => {
  console.log("cargue de producto");
  const { id, name, price, features, tags, image, discount, promo } = product;
  console.log("product", typeof product);

  const dispatch = useDispatch();

  const handleShowHideModal = (): void => {
    dispatch(getModalproductSuccess(product));
  };

  return (
    <>
      <section className="product" key={id + "product"} tabIndex={0}>
        <ProductImage
          id={id}
          image={image}
          name={name}
          styleImg={"product-image"}
        />
        <div className="product-info" key={id + "info"} tabIndex={0}>
          <ProductInfoHeader promo={promo} name={name} />
          <ProductPrice
            discount={discount}
            price={price}
            formatPrice={formatPrice}
          />
          <Features features={features} id={id} />
          <Tags tags={tags} id={id} />
          <div className="product-button">
            <button onClick={handleShowHideModal}>Detalles de {name}</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default memo(Product);
