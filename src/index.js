import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle } from "./assets/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./assets/theme";
import { BrowserRouter } from "react-router-dom";
import "./assets/fonts.css";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </ThemeProvider>
);
