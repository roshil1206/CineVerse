import React from "react";
import ReactDOM from "react-dom/client";
// import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import theme from "./theme";
import "./index.css";
import App from "./App";
import { StyledEngineProvider, ThemeProvider } from "@mui/material";
// import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <StyledEngineProvider injectFirst>
        {" "}
        <ThemeProvider theme={theme}>
          {/* <Provider store={store}> */}
          <App />
          {/* </Provider> */}
        </ThemeProvider>
      </StyledEngineProvider>
    </BrowserRouter>
  </React.StrictMode>
);
