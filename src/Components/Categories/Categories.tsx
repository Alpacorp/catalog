import { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductList from "../Product/ProductList";
import ModalProduct from "../ModalProduct/ModalProduct";
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

const Categories: React.FC = () => {
  console.log("cargue de categoria");
  const dispatch = useDispatch();
  const { products } = useSelector((state: any) => state.products);
  const { categories, loading } = useSelector((state: any) => state.categories);
  const [categoriesList, setCategoriesList] = useState<any>([]);
  const [loadingView, setLoadingView] = useState<Boolean>(false);
  const [productsList, setProductsList] = useState<string[]>([]);

  const loadInitial = (): void => {
    setProductsList(products[0]?.data);
  };

  if (loadingView) {
    console.log("loading");
  }

  const setAllCategoriesState = (): void => {
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

  const setAllProductsState = (): void => {
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

  const handleFilterCategory = (id: number): void => {
    const filterProduct = products[0]?.data?.filter(
      (product: any) => product.category === id
    );
    if (id === 0) {
      setProductsList(products[0]?.data);
    } else {
      setProductsList(filterProduct);
    }
  };

  const setLoadingState = (): void => {
    if (loading) {
      setLoadingView(true);
    } else {
      setLoadingView(false);
    }
  };

  useEffect(() => {
    setCategoriesList(categories);
  }, [categories]);

  useEffect(() => {
    setAllProductsState();
    setAllCategoriesState();
    setLoadingState();
    loadInitial();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <section className="categories">
        {loading ? <h1>Loading</h1> : ""}
        <nav>
          <ul tabIndex={0}>
            {categoriesList[0]?.data?.map(({ id, category, image }: any) => (
              <li aria-label={category} key={id + category}>
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
          <ProductList products={productsList ?? products[0]?.data} />
          <ModalProduct />
        </div>
      </section>
    </>
  );
};

export default memo(Categories);
