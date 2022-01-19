import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import PageTitle from '../Components/PageTitle';
import Product from '../Components/Product';
import './Home.css';

const Home = () => {
  return (
    <>
      <div className='main'>
        <Header />
        <PageTitle />
        <Product />
        <Footer />
      </div>
    </>
  );
}

export default Home;
