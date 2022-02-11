import Product from "./Product";

const ProductList = ({ products }) => {
  console.log("carga listado productos");
  return (
    <div>
      {products.data.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductList;
