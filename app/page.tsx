'use client'
import React, { useState, useEffect } from 'react'
// import RootLayout from "./layout";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Information from './components/information'
import Lenis from '@studio-freight/lenis'
import { motion } from 'framer-motion'

if (typeof window !== 'undefined') {
  const lenis = new Lenis()

  // lenis.on('scroll', (e) => {
  //   console.log(e)
  // })

  const raf = function (time: number): void {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)
}

function App (): JSX.Element {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  })

  useEffect(() => {
    const mouseMove = (e: MouseEvent): void => {
      setMousePosition({
        x: e.clientX - 12,
        y: e.clientY - 12
      })
    }

    window.addEventListener('mousemove', mouseMove)
    return () => {
      window.removeEventListener('mousemove', mouseMove)
    }
  }, [])

  const variants = {
    default: {
      x: mousePosition.x,
      y: mousePosition.y
    }
  }

  return (
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
  )
}
export default App
