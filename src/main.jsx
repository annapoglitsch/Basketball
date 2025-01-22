import React from "react";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";
import "./index.css";
import Interface from "./Interface";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Interface></Interface>
    <Canvas>
      <Scene />
    </Canvas>
  </React.StrictMode>
);
