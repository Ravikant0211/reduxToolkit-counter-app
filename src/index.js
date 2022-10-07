import { createRoot } from "react-dom/client";

import { Provider } from "react-redux";

import CounterStore from "./store/CounterStore";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={CounterStore}>
    <App />
  </Provider>
);
