import "core-js/stable";
import "regenerator-runtime/runtime";
// import "react-app-polyfill/ie9";
// import "react-app-polyfill/stable";

import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/App";
import "./scss/reset.scss";

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);
