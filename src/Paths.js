import { Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './Containers/Layout';
import Home from './Pages/Home';

const Paths = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Layout>
    </>
  );
}

export default Paths;
