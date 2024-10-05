import { useState } from "react";

import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      {/* Header Component Import inside App because Headers are display in every where */}
      <Outlet />
      {/* This Outlet Use For Displaying all The Pages Which is Assined in routes  */}
      <Footer />
      {/* Footer Component Import inside App because Footers are display in every where */}
    </>
  );
}

export default App;
