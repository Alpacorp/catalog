import React from 'react';
import Categories from '../Components/Categories/Categories';
import Footer from '../Components/Footer';
import Header from '../Components/Header/Header';
import PageTitle from '../Components/PageTitle/PageTitle';
import Product from '../Components/Product';
import './Home.css';
import Data from '../Data/categories.json';

console.log("Data", Data);

const Home = () => {
  return (
    <>
      <div className='main'>
        <Header />
        <Categories categories={Data} />
        <div className='title-store'>
          <PageTitle titleText={'Creaciones Jiomarcita'} styleType={'title-big'} />
          <PageTitle titleText={'Catálogo'} styleType={'title-small'} />
        </div>
        <Product />
        <Footer />
      </div>
    </>
  );
}

export default Home;
