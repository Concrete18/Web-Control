import * as browserMedia from "../../Actions/browserMedia"

function BrowserMedia() {

  return (
    <>
      <div className="browser-media">

        <button onClick={browserMedia.playPause}>
          Video Play/Pause
        </button>

        <div className="side-by-side">
          <button className="sbs-button">
            Prev Video
            {/* /yt_prev */}
          </button>

          <button className="sbs-button">
            Next Video
            {/* yt_next */}
          </button>
        </div>

        <div className="side-by-side">
            <button className="sbs-button">
              Prev Chap
              {/* prev_chapter */}
            </button>

            <button className="sbs-button">
              Next Chap
              {/* next_chapter */}
            </button>
        </div>

        <div className="side-by-side">
            <button className="sbs-button">
              Skip Back
              {/* left_arrow */}
            </button>
          
            <button className="sbs-button">
              Skip Forward
              {/* right_arrow */}
            </button>
        </div>
        
      </div>
    </>
  );
}

export default BrowserMedia;
