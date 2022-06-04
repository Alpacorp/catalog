import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ProductList from "../Product/ProductList";
import { useDispatch, useSelector } from "react-redux";
import { getCategoriesSuccess } from "../../actions/categories";
import { getCategories } from "../../apis/data";
import { getProductsSuccess } from "../../actions/products";
import { getProducts } from "../../apis/data";
import "./Categories.css";

const Categories = () => {
  const dispatch = useDispatch();
  const getAllProductsState = useSelector((state) => state.products);
  console.log("getAllProductsState", getAllProductsState);
  const products = getAllProductsState?.products[0]?.data;
  console.log("products", products);
  const getAllCategoriesState = useSelector((state) => state.categories);
  console.log("getAllCategoriesState", getAllCategoriesState);
  const categories = getAllCategoriesState?.categories[0]?.data;
  const [productList, setProductList] = useState();
  console.log("productList", productList);

  const setAllCategoriesState = () => {
    getCategories()
      .then((response) => {
        dispatch(getCategoriesSuccess(response));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const setAllProductsState = () => {
    getProducts()
      .then((response) => {
        dispatch(getProductsSuccess(response));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    setAllProductsState();
    setAllCategoriesState();
    setProductList({ products });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleFilterCategory = (cat) => {
    const catFilter = products.filter((product) => product.category === cat);

    if (cat === 0) {
      setProductList(products);
    } else {
      setProductList(catFilter);
    }
  };

  return (
    <>
      <section className="categories">
        <nav>
          <ul tabIndex="0">
            {categories?.map(({ id, category, image }) => (
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
