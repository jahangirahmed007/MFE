import React from "react";
import ReactDom from "react-dom";
import App from "./app";

// Mount Fn to start up the app
const mount = (el) => {
  ReactDom.render(<App />, el);
};

//If we are in dev and in isolation,
// Call mount immdiately

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");
  if (devRoot) {
    mount(devRoot);
  }
}

// We are running through container
// and we should export the moun Fn

export { mount };
