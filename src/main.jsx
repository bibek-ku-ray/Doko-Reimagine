import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import GlobalCursor from "./components/GlobalCursor.jsx";

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <GlobalCursor />
        <App />
    </BrowserRouter>
);
