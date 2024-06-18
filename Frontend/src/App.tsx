import { useState } from 'react'
import './App.css'

import BrowserControls from './Components/ActionGroups/BrowserControls'
import GlobalControls from './Components/ActionGroups/GlobalControls'
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

        <SectionTitleToggle title="Browser Controls" globalVisibility={globalVisibility}>
          <BrowserControls/>
        </SectionTitleToggle>

        <SectionTitleToggle title="Global Controls" globalVisibility={globalVisibility}>
          <GlobalControls />
        </SectionTitleToggle>

        <SectionTitleToggle title="Miscellaneous" globalVisibility={globalVisibility}>
          <Miscellaneous/>
        </SectionTitleToggle>
          
      </div>
    </>
  )
}

export default App
