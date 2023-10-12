"use client"
import React from "react";
import RootLayout from "./layout";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import map from "./components/map";
import information from "./components/information";

function App() {
  return(
    <>
      <Router>
      <div>
        <Routes>
          <Route path="/" Component={map} />
          <Route path="/about" Component={information} />
        </Routes>
      </div>
    </Router>
    </>
  );
}
export default App;
