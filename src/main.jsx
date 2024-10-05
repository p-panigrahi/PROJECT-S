import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// Import RouterProvider from react-router-dom
import { RouterProvider } from "react-router-dom";
// import your routes folder
import router from "./routes/index.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* In This Line We Can Use RouterProvider and Pass Props router from Routes */}
  </StrictMode>
);
