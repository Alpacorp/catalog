import PropTypes from "prop-types";
import "./Categories.css";
import gorroImage from "../../Data/assets/gorro.png";
import { Link } from "react-router-dom";

const Categories = ({ categories }) => {
  console.log("cargue de categories");
  return (
    <>
      <section className="categories">
        <nav>
          <ul tabIndex="0">
            {categories.data.map(({ id, category }) => (
              <li
                aria-label={category}
                key={id + category}
                onClick={() => {
                  console.log("click en lista");
                }}
              >
                <Link to="/">
                  <img src={gorroImage} alt="prueba" />
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </section>
    </>
  );
};

Categories.propTypes = {
  categories: PropTypes.object.isRequired,
};

export default Categories;
