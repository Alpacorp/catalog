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

import { log } from "console";
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

//obtain all url value
const url = window.location.href;

console.log("url", url);

//save the value of the url in a session storage
sessionStorage.setItem("url", url);

//obtain the value of the url in a session storage
const urlSession = sessionStorage.getItem("url");

console.log("urlSession", urlSession);

//obtai url params
const urlParams = new URLSearchParams(window.location.search);
const utmSource = urlParams.get("utm_source");
const utmMedium = urlParams.get("utm_medium");
const utmCampaign = urlParams.get("utm_campaign");
const utmTerm = urlParams.get("utm_term");
const utmContent = urlParams.get("utm_content");

//set utm params in local storage
sessionStorage.setItem("utm_source", utmSource || "");
sessionStorage.setItem("utm_medium", utmMedium || "");
sessionStorage.setItem("utm_campaign", utmCampaign || "");
sessionStorage.setItem("utm_term", utmTerm || "");
sessionStorage.setItem("utm_content", utmContent || "");

//get utm params from local storage
const utmSourceSession = sessionStorage.getItem("utm_source");
const utmMediumSession = sessionStorage.getItem("utm_medium");
const utmCampaignSession = sessionStorage.getItem("utm_campaign");
const utmTermSession = sessionStorage.getItem("utm_term");
const utmContentSession = sessionStorage.getItem("utm_content");

console.log("utmSourceSession", utmSourceSession);
console.log("utmMediumSession", utmMediumSession);
console.log("utmCampaignSession", utmCampaignSession);
console.log("utmTermSession", utmTermSession);
console.log("utmContentSession", utmContentSession);

// create url with utm params
const urlWithUtmParams = `${urlSession}?utm_source=${
  utmSourceSession || ""
}&utm_medium=${utmMediumSession || ""}&utm_campaign=${
  utmCampaignSession || ""
}&utm_term=${utmTermSession || ""}&utm_content=${utmContentSession || ""}`;

console.log("urlWithUtmParams", urlWithUtmParams);

// create url with utm params conditionally if value is empty

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        {maintenance === "true" ? <Maintenance /> : <AppRoutes />}
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
