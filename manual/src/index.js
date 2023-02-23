import React from "react";
import ReactDOM from "react-dom";
//import { App } from "./componentes/app";
//import App from "./propsandstates/propagacion/app";
//import App from "./propsandstates/hijomodificapadre/app";
//import App from "./formularios/app";
import App from "./ciclo-de-vida/app";

const root = ReactDOM.createRoot( document.getElementById("root") );

root.render(<React.StrictMode><App /></React.StrictMode>)