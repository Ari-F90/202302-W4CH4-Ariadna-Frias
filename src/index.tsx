import React from "react";
import ReactDOM from "react-dom/client";
import { PhoneContextProvider } from "./core/context/phone.context.provider";
import { App } from "./core/components/app/app";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.querySelector(".container") as HTMLElement
);
root.render(
  <React.StrictMode>
    <PhoneContextProvider>
      <App />
    </PhoneContextProvider>
  </React.StrictMode>
);

reportWebVitals();
