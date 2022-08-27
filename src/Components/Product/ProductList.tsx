import { memo } from "react";
import Product from "./Product";

interface ProductListProps {
  products: string[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  console.log("cargue de lista de productos");
  return (
    <div>
      {products?.map((product: any) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
};

export default memo(ProductList);
