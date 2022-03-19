import { useState } from "react";
import PropTypes from "prop-types";
import "./Categories.css";
import ProductList from "../Product/ProductList";

const Categories = ({ categories, products }) => {
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
                <button
                  className="button-cat"
                  key={id}
                  onClick={() => handleFilterCategory(id)}
                >
                  <img
                    className="icon-image"
                    src={image}
                    alt={`ícono de ${category}`}
                  />
                  {category}
                </button>
              </li>
            ))}
          </ul>
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
