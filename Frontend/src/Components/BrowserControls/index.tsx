// import * as browserMedia from "../../Actions/browserMedia"

import { useState } from 'react'

function BrowserMedia() {
  const [showSection, setShowSection] = useState(true);

  return (
    <>
      <button onClick={() => setShowSection(!showSection)}>
        Browser Controls
      </button>

      {showSection && (
          <div className="browser-controls">
            <button  >
              Fullscreen
              {/* fullscreen */}
            </button>
        
            <div className="side-by-side">
              <button className="sbs-button">
                Prev Tab
                {/* prev_tab */}
              </button>

              <button className="sbs-button">
                Next Tab
                {/* next_tab */}
              </button>
            </div>
          </div>
        )}
    </>
  );
}

export default BrowserMedia;
