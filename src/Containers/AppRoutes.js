import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "../Pages/Home";
// import NotFound from "../Pages/NotFound";
import PageProduct from "../Pages/PageProduct";

const AppRoutes = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="product/:productid" element={<PageProduct />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </>
  );
};

export default AppRoutes;
