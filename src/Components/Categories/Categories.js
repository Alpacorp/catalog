import { useState } from "react";
import PropTypes from "prop-types";
import "./Categories.css";
// import gorroImage from "../../Data/assets/gorro.png";
import { Link } from "react-router-dom";
import ProductList from "../Product/ProductList";

const Categories = ({ categories, products }) => {
  console.log("products", products);

  const [productList, setProductList] = useState(products.data);

  const handleFilterCategory = (cat) => {
    const catFilter = products.data.filter(
      (product) => product.category === cat
    );

    if (cat === 0) {
      setProductList(products.data);
    } else {
      setProductList(catFilter);
    }
  };

  console.log("productList", productList);

  return (
    <>
      <section className="categories">
        <nav>
          <ul tabIndex="0">
            {categories.data.map(({ id, category, image }) => (
              <li
                aria-label={category}
                key={id + category}
                onClick={() => {
                  console.log("click en lista");
                }}
              >
                <Link to="/">
                  {/* <img src={gorroImage} alt="prueba" /> */}
                  <img src={image} alt={`ícono de ${category}`} />
                  {category}
                </Link>
              </li>
            ))}
          </ul>
          <div>
            {categories.data.map(({ id, category }) => (
              <button key={id} onClick={() => handleFilterCategory(id)}>
                {category}
              </button>
            ))}
          </div>
        </nav>
      </section>
      <section>
        <div className="products">
          <ProductList products={productList} />
        </div>
      </section>
    </>
  );
};

Categories.propTypes = {
  categories: PropTypes.object.isRequired,
  products: PropTypes.object.isRequired,
};

export default Categories;
