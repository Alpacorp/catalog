import { useState, useEffect } from "react";
import { formatPrice } from "../../utils/formatPrice.";
import ProductImage from "../ProductImage/ProductImage";
import ProductInfoHeader from "../ProductInfoHeader/ProductInfoHeader";
import ProductPrice from "../ProductPrice/ProductPrice";
import { Delete } from "../assets/index";
import "./Cart.css";

const Cart = () => {
  const [itemsCart, setItemsCart] = useState([]);
  const getItemsCart = () => {
    const products = JSON.parse(localStorage.getItem("product-list"));
    setItemsCart(products);
  };

  const getSumAllCart = () => {
    const sum = itemsCart
      .map((product) => JSON.parse(product.price))
      .reduce((previosValue, currentValue) => previosValue + currentValue, 0);

    return sum;
  };

  const deleteProduct = (id) => {
    const newArrayCartProd = itemsCart.filter((product) => product.id !== id);
    setItemsCart(newArrayCartProd);
    localStorage.setItem("product-list", JSON.stringify(newArrayCartProd));
  };

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
          <div className="product-image">
            <ProductImage
              id={item.id}
              image={item.image}
              name={item.name}
              styleImg={"product-image-cart"}
            />
          </div>
          <div className="product-name">
            <ProductInfoHeader promo={false} name={item.name} />
          </div>
          <div className="product-price">
            <ProductPrice
              discount={item.discount}
              price={item.price}
              formatPrice={formatPrice}
            />
          </div>
          <div className="product-delete">
            <img
              src={Delete}
              alt="eliminar producto"
              title="Eliminar producto"
              onClick={() => deleteProduct(item.id)}
            />
          </div>
        </div>
      ))}
      <div className="cart-sum">
        {itemsCart?.length
          ? `Total: ${formatPrice.format(getSumAllCart())}`
          : ""}
      </div>
    </section>
  );
};

export default Cart;
