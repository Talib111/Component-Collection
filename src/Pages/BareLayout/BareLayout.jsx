import React from 'react'
import BareSidebar from './BareSidebar'
import BareHeader from './BareHeader'
import { Route, Routes } from 'react-router-dom'
import CodeView from '../../Components/Common/CodeView'

function BareLayout() {
  return (
    <>
      {/* CODE VIEW */}
      <CodeView code={`import {BrowserRouter, Route, Routes } from 'react-router-dom'
      
      <BrowserRouter>
        <div className="flex">
        <BareSidebar />
        <div className="flex flex-col w-full">
          <BareHeader />
          <main className="p-20">
            <Routes>
              <Route exact path="/" element={<h1>Dummy direct</h1>} />
              <Route path="/about" element={<h1>Dummy about</h1>} />
              <Route path="/contact" element={<h1>Dummy contact</h1>} />
            </Routes>

          </main>
        </div>
      </div>
      </BrowserRouter>`} />

      <div className="flex">
        <BareSidebar />
        <div className="flex flex-col w-full">
          <BareHeader />
          <main className="p-20">
            <Routes>
              <Route exact path="/" element={<h1>Dummy direct</h1>} />
              <Route path="/about" element={<h1>Dummy about</h1>} />
              <Route path="/contact" element={<h1>Dummy contact</h1>} />
            </Routes>

          </main>
        </div>
      </div>


    </>
  )
}

export default BareLayout