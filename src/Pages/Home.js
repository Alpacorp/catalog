import React from "react";
import Categories from "../Components/Categories/Categories";
import Footer from "../Components/Footer/Footer";
import Hero from "../Components/Hero/Hero";
import Modalproduct from "../Components/ModalProduct/ModalProduct";
import PageSubtitle from "../Components/PageSubtitle/PageSubtitle";
import PageTitle from "../Components/PageTitle/PageTitle";
import Product from "../Components/Product/Product";
import Data from "../Data/categories.json";
import Products from "../Data/products.json";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="main">
        <Modalproduct />
        <Hero />
        <main>
          <div className="title-store">
            <PageTitle
              titleText={"Creaciones la Oveja Calva"}
              styleType={"title-big"}
            />
            <PageSubtitle titleText={"Catálogo"} styleType={"title-small"} />
            <Categories categories={Data} />
          </div>
          <div className="products">
            <Product products={Products} />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
