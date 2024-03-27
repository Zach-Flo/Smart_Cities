'use client'
import './components/Lenis'
import './globals.css'
import React from 'react'
import StartSection from './components/structures/StartSection'
import { Divider1, Divider2 } from './components/structures/Dividers'
import MapComparison from './components/map/MapComparison'
import EndSection from './components/structures/EndSection'


function App (): JSX.Element {
  return (
    <>
      <div className="App">
        <StartSection></StartSection>

        <Divider1></Divider1>

        <MapComparison></MapComparison>

        <Divider2></Divider2>

        <EndSection></EndSection>
      </div>
    </>
  )
}
export default App
