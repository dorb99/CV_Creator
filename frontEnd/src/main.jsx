import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./components/Tools/Context/UserContext.jsx";
import { CVProvider } from "./components/Tools/Context/CVContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserProvider>
    <CVProvider>
      <BrowserRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BrowserRouter>
    </CVProvider>
  </UserProvider>
);
