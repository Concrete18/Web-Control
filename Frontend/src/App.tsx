import { useState } from 'react'
import './App.css'

import BrowserMedia from './Components/BrowserMedia'
import GlobalMedia from './Components/GlobalMedia'
import BrowserControls from './Components/BrowserControls'
import PowerControls from './Components/PowerControls'
import DebugControls from './Components/DebugControls'

import SectionTitleToggle from './Components/SectionTitleToggle'

function App() {

  const [globalVisibility, setGlobalVisibility] = useState(true);
  
  return (
    <>
      <h1>Web Control</h1>

      <div className="side-by-side">
          <button className="sbs-button"
            onClick={() => setGlobalVisibility(false)}
            disabled={!globalVisibility}>
              Hide All
          </button>

          <button className="sbs-button"
            onClick={() => setGlobalVisibility(true)}
            disabled={globalVisibility}>
              Show All
          </button>
        </div>

      <div className="button_container">

        <SectionTitleToggle title="Browser Media" globalVisibility={globalVisibility}>
          < BrowserMedia />
        </SectionTitleToggle>

        <SectionTitleToggle title="Browser Controls" globalVisibility={globalVisibility}>
          < BrowserControls />
        </SectionTitleToggle>

        <SectionTitleToggle title="Global Media" globalVisibility={globalVisibility}>
          < GlobalMedia />
        </SectionTitleToggle>

        <SectionTitleToggle title="Power Controls" globalVisibility={globalVisibility}>
          < PowerControls />
        </SectionTitleToggle>

        <SectionTitleToggle title="Debug Controls" globalVisibility={globalVisibility}>
          < DebugControls />
        </SectionTitleToggle>
          
      </div>
    </>
  )
}

export default App
