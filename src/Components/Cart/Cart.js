import { useState, useEffect } from "react";
import { formatPrice } from "../../utils/formatPrice.";
import ProductImage from "../ProductImage/ProductImage";
import ProductInfoHeader from "../ProductInfoHeader/ProductInfoHeader";
import ProductPrice from "../ProductPrice/ProductPrice";
import { Delete } from "../assets/index";
import { useSelector, useDispatch } from "react-redux";
import "./Cart.css";
import { removeProduct } from "../../actions/actions";

const Cart = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [itemsCart, setItemsCart] = useState([]);
  const [loading, setLoading] = useState(false);
  const { cart, total, quantity, isLoading } = itemsCart;

  console.log("products itemsCart", itemsCart);
  console.log("isLoading", isLoading);

  const loader = () => {
    if (isLoading) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  };

  console.log("loading", loading);

  useEffect(() => {
    setItemsCart(products);
    loader();
  }, [products]);

  return (
    <section className="cart">
      {loading && <h1>Cargando ...</h1>}
      {cart?.map((item) => (
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

export default Cart;
