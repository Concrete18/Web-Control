import { useState } from 'react'
import './App.css'

import BrowserMedia from './Components/ActionGroups/BrowserMedia'
import GlobalMedia from './Components/ActionGroups/GlobalMedia'
import BrowserControls from './Components/ActionGroups/BrowserControls'
import Miscellaneous from './Components/ActionGroups/Misc'

import SectionTitleToggle from './Components/SectionTitleToggle'
import ShowHideButtons from './Components/ShowHideAll'

function App() {

  const [globalVisibility, setGlobalVisibility] = useState(true);
  
  return (
    <>
      <h1>Web Control</h1>

      <ShowHideButtons setGlobalVisibility={setGlobalVisibility} globalVisibility={globalVisibility}/>

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

        <SectionTitleToggle title="Miscellaneous" globalVisibility={globalVisibility}>
          < Miscellaneous />
        </SectionTitleToggle>
          
      </div>
    </>
  )
}

export default App
