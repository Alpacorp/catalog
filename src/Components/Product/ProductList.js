import { memo, useState } from "react";
import Product from "./Product";

const ProductList = ({ products }) => {
  console.log("carga listado productos");
  const [counter, setCounter] = useState(0);
  return (
    <div>
      {products.data.map((product) => (
        <Product key={product.id} {...product} />
      ))}
      <button onClick={() => setCounter(counter + 1)}>
        counter list {counter}
      </button>
    </div>
  );
};

export default memo(ProductList);
