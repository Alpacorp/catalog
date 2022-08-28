// import React from "react";
// import ReactDOM from "react-dom";
// import { Provider } from "react-redux";
// import { BrowserRouter } from "react-router-dom";
// import AppRoutes from './Containers/AppRoutes';
// import "./index.css";
// import { store } from "./store/store";

// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Provider store={store}>
//         <AppRoutes />
//       </Provider>
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById("root")
// );

import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Containers/AppRoutes";
import "./index.css";
import Maintenance from "./Pages/Maintenance";
import { store } from "./store/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const maintenance = process.env.REACT_APP_MAINTENANCE || "false";
console.log("maintenancee", typeof maintenance);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        {maintenance === "true" ? <Maintenance /> : <AppRoutes />}
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
