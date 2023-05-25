import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Blog from './Pages/Blog'
import Sidebar from './Pages/Sidebar'
import { BrowserRouter } from 'react-router-dom'
import BareLayout from './Pages/BareLayout/BareLayout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Sidebar />
        {/* <BareLayout/> */}

      </BrowserRouter>
    </>
  )
}

export default App
