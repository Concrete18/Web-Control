import { useState } from 'react'
import './App.css'

import BrowserControls from './Components/ActionGroups/BrowserControls'
import GlobalControls from './Components/ActionGroups/GlobalControls'
import Power from './Components/ActionGroups/Power'
import Miscellaneous from './Components/ActionGroups/Misc'

import SectionTitleToggle from './Components/SectionTitleToggle'
import ShowHideButtons from './Components/ShowHideAll'

function App() {

  const [globalVisibility, setGlobalVisibility] = useState(true);
  
  return (
    <>
      <h1>Web Control</h1>

      <ShowHideButtons setGlobalVisibility={setGlobalVisibility} globalVisibility={globalVisibility}/>

      <div className="button-container">

        <SectionTitleToggle title="Browser" globalVisibility={globalVisibility}>
          <BrowserControls/>
        </SectionTitleToggle>

        <SectionTitleToggle title="Global" globalVisibility={globalVisibility}>
          <GlobalControls />
        </SectionTitleToggle>

        <SectionTitleToggle title="Misc" globalVisibility={globalVisibility}>
          <Miscellaneous/>
        </SectionTitleToggle>
          
        <SectionTitleToggle title="Power" globalVisibility={globalVisibility}>
          <Power />
        </SectionTitleToggle>
        
      </div>
    </>
  )
}

export default App
