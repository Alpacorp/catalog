import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "../Pages/Home";

const AppRoutes = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </>
  );
};

export default AppRoutes;
