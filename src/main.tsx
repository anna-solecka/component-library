import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./components/index.scss";
import "./design-system.css";
import "./index.css";
import { BasketProvider } from "./components/BasketContext.tsx";
import { TodoProvider } from "./components/ToDo/TodoContext.tsx";
import { DialogProvider } from "./components/DialogElement.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <TodoProvider>
        <BasketProvider>
          <DialogProvider>
            <App />
          </DialogProvider>
        </BasketProvider>
      </TodoProvider>
    </BrowserRouter>
  </StrictMode>
);
