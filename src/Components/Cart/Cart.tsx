import { useState, useEffect, memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductImage from "../ProductImage/ProductImage";
import ProductInfoHeader from "../ProductInfoHeader/ProductInfoHeader";
import ProductPrice from "../ProductPrice/ProductPrice";
import { formatPrice } from "../../utils/formatPrice.";
import { Delete } from "../assets/index";
import { removeProduct } from "../../actions/cart";
import "./Cart.css";

const Cart = () => {
  console.log("cargue de cart");
  const dispatch = useDispatch();
  const productsInCart = useSelector((state: any) => state.cart);
  const [itemsCart, setItemsCart] = useState<any>([]);
  const { cart, total, quantity } = itemsCart;

  useEffect(() => {
    setItemsCart(productsInCart);
  }, [productsInCart]);

  return (
    <section className="cart">
      {cart?.map((item: any) => (
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
              onClick={() => dispatch(removeProduct(item.id))}
            />
          </div>
        </div>
      ))}
      <div className="cart-sum">
        {cart?.length ? (
          <div className="cart-sum-data">
            <p>{`Tu pedido: ( ${quantity} )`}</p>
            <p>{`Total: ${formatPrice.format(total)}`}</p>
          </div>
        ) : (
          ""
        )}
      </div>
    </section>
  );
};

export default memo(Cart);
