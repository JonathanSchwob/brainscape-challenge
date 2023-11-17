import React from "react";
import ReactDOM from "react-dom/client";
import { DndProvider } from "react-dnd-multi-backend";
import "./index.css";
import App from "./App";
import { HTML5toTouch } from "rdndmb-html5-to-touch";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <DndProvider options={HTML5toTouch}>
    <App />
  </DndProvider>
);
