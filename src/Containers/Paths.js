import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from '../Pages/Home';

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
