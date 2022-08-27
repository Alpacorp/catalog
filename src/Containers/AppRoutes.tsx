import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound";

const AppRoutes: React.FC = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
};

export default AppRoutes;
