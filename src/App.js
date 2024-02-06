import React from "react";
import Header from "./components/Header/index.js";
import Filter from "./components/Filter/index.js";
import Catalogue from "./components/Catalogue/index.js";

function App() {
  return (
    <div>
      <Header />
      <Filter />
      <Catalogue />
    </div>
  );
}

export default App;
