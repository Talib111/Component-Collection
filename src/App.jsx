import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Blog from './Pages/Blog'
import Sidebar from './Pages/Sidebar'
import { BrowserRouter } from 'react-router-dom'
import { contextVar } from "./Components/Context/Context";

function App() {
  const [showCodeButton, setshowCodeButton] = useState(true)

  //context Data to active toast from anywhere
  const contextData = {
    showCodeButton,
    setshowCodeButton,
  };

  return (
    <>
      <contextVar.Provider value={contextData}>
        <div onDoubleClick={() => setshowCodeButton(!showCodeButton)}>
          <BrowserRouter>
            <Sidebar />
            {/* <BareLayout/> */}

          </BrowserRouter>
        </div>
      </contextVar.Provider>
    </>
  )
}

export default App
