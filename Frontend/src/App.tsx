import './App.css'

import BrowserMedia from './Components/BrowserMedia'
import GlobalMedia from './Components/GlobalMedia'
import BrowserControls from './Components/BrowserControls'

function App() {

  return (
    <>
      <h1>Web Control</h1>
      <div className="button_container">

        <BrowserMedia />

        <div className="divider"></div>

        <BrowserControls />

        <div className="divider"></div>
    
        <GlobalMedia />

        <div className="divider"></div>

        <div className="side-by-side">
          <form action="/volume_down" method="post">
            <button className="sbs-button">
              Volume -
            </button>
          </form>

          <form action="/volume_up" method="post">
            <button className="sbs-button">
              Volume +
            </button>
          </form>
        </div>

        <div className="divider"></div>

        <form action="/audio_speakers" method="post">
          <button  >
            Set Audio to Speakers
          </button>
        </form>

        <form action="/audio_headphones" method="post">
          <button  >
            Set Audio to Headphones
          </button>
        </form>

        <h1>Power Controls</h1>
  
        <form action="/sleep" method="post">
          <button  >
            Sleep PC
          </button>
        </form>
        
        {/* <form action="/shutdown" method="post">
          <button  >
            Shutdown PC
          </button>
        </form> */}

        <h1>Debug</h1>
    
        <form action="/refocus" method="post">
          <button  >
            Refocus Window
          </button>
        </form>

        <form action="/open_log" method="post">
          <button  >
            Open Log
          </button>
        </form>
          
      </div>
    </>
  )
}

export default App
