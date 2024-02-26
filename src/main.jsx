import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Tensor from "./Tensor.jsx";
import Barcode from "./components/barcode.jsx";
import Tes from "./tes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      {/* <Tensor /> */}
      <Tes />
   </React.StrictMode>
);
