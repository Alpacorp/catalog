import Cart from "../Components/Cart/Cart";
import Categories from "../Components/Categories/Categories";
import Footer from "../Components/Footer/Footer";
import Hero from "../Components/Hero/Hero";
import PageSubtitle from "../Components/PageSubtitle/PageSubtitle";
import PageTitle from "../Components/PageTitle/PageTitle";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <>
      <div className="main">
        <Hero />
        <main>
          <div className="title-store">
            <PageTitle titleText={"Creaciones Firu"} styleType={"title-big"} />
            <PageSubtitle titleText={"Catálogo"} styleType={"title-small"} />
            <Categories />
          </div>
        </main>
        <Cart />
        <Footer />
      </div>
    </>
  );
};

export default Home;
