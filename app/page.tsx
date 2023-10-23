"use client"
import React from "react";
import { useState, useEffect } from "react";
//import RootLayout from "./layout";
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Map from "./components/map";
import Information from "./components/information";
import Lenis from '@studio-freight/lenis';
import { motion } from 'framer-motion';



if (typeof window !== "undefined") {
  const lenis = new Lenis()
  
  
  // lenis.on('scroll', (e) => {
  //   console.log(e)
  // })
  
  const raf = function (time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)
  }


      /*<Router>
        <Routes>
          <Route path="/" Component={information} />
          <Route path="/map" Component={map} />
        </Routes>
    </Router> */
function App() {
  
  const[mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });

  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX - 12,
        y: e.clientY - 12
      })
    }

    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove)
    } 
  }, [])
  
  const variants={
    default: {
      x: mousePosition.x,
      y: mousePosition.y
    } 
  }

  return(
    <>
      <div className="App">
        <motion.div 
        className="cursor" 
        variants={variants}
        animate="default"
        />
        <Information />
      </div>
      
    </>
  );
}
export default App;
