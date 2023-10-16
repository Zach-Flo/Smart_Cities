"use client"
import React from "react";
import RootLayout from "./layout";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import map from "./components/map";
import information from "./components/information";
import Lenis from '@studio-freight/lenis'

const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
function App() {
  return(
    <>
      <Router>
      <div>
        <Routes>
          <Route path="/map" Component={map} />
          <Route path="/" Component={information} />
        </Routes>
      </div>
    </Router>
    </>
  );
}
export default App;
