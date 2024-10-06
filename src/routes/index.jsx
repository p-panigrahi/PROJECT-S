import { createBrowserRouter } from "react-router-dom"; // First import createBrowserRouter from react-router-dom for routeing perpose
import App from "../App.jsx"; // Import App From App.jsx
import Home from "../pages/Home.jsx"; // Import Home file From Pages Folder
import Login from "../pages/Login.jsx";
const router = createBrowserRouter([
  // Create router Variable to Store Path , Elements and Children
  {
    path: "/", //This is by Default Path
    element: <App />,
    // Use App in Element Because , We can make This App as a root File
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);
// Export The router Variable Because , We want to use this variable out side of this file
export default router;
// After go to main.js to set Router Provider
