import { useState, useEffect } from "react";
import "./App.css";
import NavbarUI from "./components/ui-components/Navbar_ui";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import "primeflex/primeflex.css"; // flex
import Home from "./pages/Home";

function App() {

  return (
    <>
      <NavbarUI />
      <Home />
    </>
  );
}

export default App;
