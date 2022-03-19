import Categories from "../Components/Categories/Categories";
import Footer from "../Components/Footer/Footer";
import Hero from "../Components/Hero/Hero";
import PageSubtitle from "../Components/PageSubtitle/PageSubtitle";
import PageTitle from "../Components/PageTitle/PageTitle";
import Data from "../Data/categories.json";
import Products from "../Data/products.json";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="main">
        <Hero />
        <main>
          <div className="title-store">
            <PageTitle titleText={"Creaciones Firu"} styleType={"title-big"} />
            <PageSubtitle titleText={"Catálogo"} styleType={"title-small"} />
            <Categories categories={Data} products={Products} />
          </div>
          {/* <div className="products"></div> */}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
