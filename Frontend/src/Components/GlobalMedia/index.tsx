// import * as browserMedia from "../../Actions/browserMedia"

import { useState } from 'react'

function BrowserMedia() {
  const [showSection, setShowSection] = useState(true);

  return (
    <>
      <button onClick={() => setShowSection(!showSection)}>
        Media Controls
      </button>

      {showSection && (
          <div className="global-media">
            <button  >
              Media Play/Pause
              {/* media_play_pause */}
            </button>

            <div className="side-by-side">
              <button className="sbs-button">
                Prev
                {/* media_prev_track */}
              </button>
          
              <button className="sbs-button">
                Next
                {/* media_next_track */}
              </button>
            </div>
          </div>
        )}
    </>
  );
}

export default BrowserMedia;
