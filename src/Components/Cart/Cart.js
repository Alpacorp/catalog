import { useState, useEffect } from "react";

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
    <section>
      <div>
        {itemsCart?.map((item) => (
          <div key={`${item?.id} + ${new Date().getMilliseconds()}`}>
            <p>{item?.name}</p>
            <p>{item?.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cart;
