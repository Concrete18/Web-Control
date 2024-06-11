// import * as browserMedia from "../../Actions/browserMedia"

function BrowserMedia() {

  return (
    <>
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
    </>
  );
}

export default BrowserMedia;
