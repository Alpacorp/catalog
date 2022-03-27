import { useState, useEffect } from "react";
import { formatPrice } from "../../utils/formatPrice.";
import ProductImage from "../ProductImage/ProductImage";
import ProductInfoHeader from "../ProductInfoHeader/ProductInfoHeader";
import ProductPrice from "../ProductPrice/ProductPrice";
import "./Cart.css";

const Cart = () => {
  const [itemsCart, setItemsCart] = useState([]);
  const getItemsCart = () => {
    const products = JSON.parse(localStorage.getItem("product-list"));
    setItemsCart(products);
  };

  console.log(itemsCart);
  useEffect(() => {
    getItemsCart();
  }, []);
  return (
    <section className="cart">
      {itemsCart?.map((item) => (
        <div
          className="cart-info"
          key={`${item?.id} + ${new Date().getMilliseconds()}`}
        >
          <div>
            <ProductImage
              id={item.id}
              image={item.image}
              name={item.name}
              styleImg={"product-image-cart"}
            />
          </div>
          <div>
            <ProductInfoHeader promo={false} name={item.name} />
            <ProductPrice
              discount={item.discount}
              price={item.price}
              formatPrice={formatPrice}
            />
          </div>
        </div>
      ))}
    </section>
  );
};

export default Cart;
