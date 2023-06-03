import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";

import { Provider } from "react-redux";
import { store } from "./components/redux/store.js";

import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/lib/integration/react";

let persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RecoilRoot>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </RecoilRoot>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
