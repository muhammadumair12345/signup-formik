import React from "react";
import ReactDOM from "react-dom";
import SignupFormApp from "./components/SignupFormApp/SignupFormApp";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <SignupFormApp />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorkerRegistration.register();
reportWebVitals();
