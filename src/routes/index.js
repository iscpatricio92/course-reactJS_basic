import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../views/Home";
import FourOFour from "../views/404";
import Search from '../views/Search';
export default function RoutesApp() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/search" element={<Search />} />
        <Route path="*" element={<FourOFour />} />
      </Routes>
    </Router>
  );
}
