'use client'
import './components/Lenis'
import './globals.css'
import React from 'react'
import StartSection from './components/structures/StartSection'
import { Divider1, Divider2, Divider3 } from './components/structures/Dividers'
import MapComparison from './components/map/MapComparison'
import EndSection from './components/structures/EndSection'
import QueryPreprocessed from './components/query_preprocessed/QueryPreprocessed'


function App (): JSX.Element {
  return (
    <>
      <div className="App">
        <StartSection></StartSection>

        <Divider1></Divider1>

        <MapComparison></MapComparison>

        <Divider2></Divider2>

        <QueryPreprocessed></QueryPreprocessed>

        <Divider3></Divider3>
 
        <EndSection></EndSection> 
      </div>
    </>
  )
}
export default App
