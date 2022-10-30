import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./Todo App/App";
import { EditProvider } from "./Todo App/context/EditContext";
import { VoiceProvider } from "./Todo App/context/VoiceContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <EditProvider>
      <VoiceProvider>
        <App />
      </VoiceProvider>
    </EditProvider>
  </BrowserRouter>
);
