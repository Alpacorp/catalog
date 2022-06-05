import { memo, useEffect, useState } from "react";
import PropTypes from "prop-types";
import ProductList from "../Product/ProductList";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategoriesFailure,
  getCategoriesStart,
  getCategoriesSuccess,
} from "../../actions/categories";
import {
  getProductsStart,
  getProductsSuccess,
  getproductsFailure,
} from "../../actions/products";
import { getCategories } from "../../apis/data";
import { getProducts } from "../../apis/data";
import "./Categories.css";

const Categories = () => {
  console.log("cargue de categorias");
  const dispatch = useDispatch();
  const getAllProductsState = useSelector((state) => state.products);
  const products = getAllProductsState?.products[0]?.data;
  const getAllCategoriesState = useSelector((state) => state.categories);
  const categories = getAllCategoriesState?.categories[0]?.data;

  const [loading, setLoading] = useState(false);
  const [categoriesList, setCategoriesList] = useState([]);

  useEffect(() => {
    setCategoriesList(categories);
  }, [categories]);

  if (getAllCategoriesState.loading) {
    console.log("loading");
  }
  // const [productList, setProductList] = useState([]);

  const setAllCategoriesState = () => {
    getCategories()
      .then((response) => {
        dispatch(getCategoriesStart());
        dispatch(getCategoriesSuccess(response));
      })
      .catch((error) => {
        console.log(error);
        dispatch(getCategoriesFailure(error));
      });
  };

  const setAllProductsState = () => {
    getProducts()
      .then((response) => {
        dispatch(getProductsStart());
        dispatch(getProductsSuccess(response));
      })
      .catch((error) => {
        console.log(error);
        dispatch(getproductsFailure(error));
      });
  };

  // const handleFilterCategory = (cat) => {
  //   const catFilter = products.filter((product) => product.category === cat);

  //   if (cat === 0) {
  //     setProductList(products);
  //   } else {
  //     setProductList(catFilter);
  //   }
  // };

  const setLoadingState = () => {
    if (getAllCategoriesState.loading) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  };

  useEffect(() => {
    setAllProductsState();
    setAllCategoriesState();
    setLoadingState();
    // setProductList(products);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <section className="categories">
        {loading ? <h1>Loading</h1> : ""}
        <nav>
          <ul tabIndex="0">
            {categoriesList?.map(({ id, category, image }) => (
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
                  // onClick={() => handleFilterCategory(id)}
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
          <ProductList products={products} />
        </div>
      </section>
    </>
  );
};

Categories.propTypes = {
  categories: PropTypes.object.isRequired,
  products: PropTypes.object.isRequired,
};

export default memo(Categories);
