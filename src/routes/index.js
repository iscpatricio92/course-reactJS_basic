import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../views/Home";
import FourOFour from "../views/404";
import Search from "../views/Search";
import PokeDetail from "../views/PokeDetail";
import ScrollToTop from "../componentes/ScrollToTop";
export default function RoutesApp() {

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/search" element={<Search />} />
        <Route exact path="pokemon/:id" element={<PokeDetail />} />
        <Route path="*" element={<FourOFour />} />
      </Routes>
    </Router>
  );
}
